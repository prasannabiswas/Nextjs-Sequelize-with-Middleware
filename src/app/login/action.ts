"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { dbInit, Member } from "@/models";
import { createSession, deleteSession } from "@/utils/session";
import { comparePassword } from "@/utils/password";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {
  await dbInit();

  const formValues = Object.fromEntries(formData);
  const result = loginSchema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  try {
    const existing = await Member.findOne({ where: { email } });
    if (!existing) {
      return {
        errors: {
          email: ["Email does not exist."],
        },
        values: formValues,
      };
    }

    const isValid = await comparePassword(password, existing.password);
    if (!isValid) {
      return {
        errors: {
          password: ["Invalid password."],
        },
        values: formValues,
      };
    }

    await createSession(
      existing.id.toString(),
      existing.name,
      existing.email,
      parseInt(existing.mobile_number ?? "0", 10)
    );

    redirect("/");
  } catch (err) {
    console.error("Login error:", err);
    return {
      errors: {
        general: ["Something went wrong. Try again later."],
      },
      values: formValues,
    };
  }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
