"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/utils/session";
import { OAuth2Client } from "google-auth-library";
import { comparePassword } from "@/utils/password";
import { getModels } from "@/lib/connection/connection";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  const formValues = Object.fromEntries(formData);
  const result = loginSchema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  const models = await getModels();
  const existing = await models.members.findOne({ where: { email } });

  if (!existing) {
    return { errors: { email: ["Email does not exist."] }, values: formValues };
  }

  const isValid = await comparePassword(password, existing.dataValues.password);

  if (!isValid) {
    return { errors: { password: ["Invalid password."] }, values: formValues };
  }

  await createSession(
    existing.dataValues.id,
    existing.dataValues.name,
    existing.dataValues.email
  );

  redirect("/dashboard");
}

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  "http://localhost:3000/api/auth/google/callback"
);

export async function googleLoginCallback(prevState: any, searchParams: URLSearchParams) {
  const code = searchParams.get("code");

  if (!code) {
    return {
      errors: {
        general: ["Missing code from Google"],
      },
    };
  }

  try {
    // Get token from code
    const { tokens } = await client.getToken(code);
    const ticket = await client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID!,
    });

    const payload = ticket.getPayload();

    if (!payload?.sub || !payload.email) {
      return {
        errors: {
          general: ["Invalid Google account payload"],
        },
      };
    }

    const { name, email } = payload;

    const models = await getModels();

    let user = await models.members.findOne({ where: { email } });
    if (user) {
      return {
        errors: {
          email: ["Email is already registered"],
        },
      };
    }

    if (!user) {
      user = await models.members.create({
        name: name || "Google User",
        email,
        gender: "prefer_not_to_say",
        password: "12345678",
      });
    }

    await createSession(
      user.dataValues.id,
      user.dataValues.name,
      user.dataValues.email,
    );
  } catch (err) {
    console.error("Google login failed:", err);
    return {
      errors: {
        general: ["Login with Google failed. Please try again."],
      },
    };
  }
  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
