"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { hashPassword } from "@/utils/password";
import { getModels } from "@/lib/connection/connection";

const signupSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }).trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim()
});

export async function signup(prevState: any, formData: FormData) {
  const formValues = Object.fromEntries(formData);
  const result = signupSchema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      values: formValues,
    };
  }

  const { name, email, password } = result.data;

  const models = await getModels();

  // Check if user already exists
  const existing = await models.members.findOne({ where: { email } });
  if (existing) {
    return {
      errors: {
        email: ["Email is already registered"],
      },
      values: formValues,
    };
  }

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create user
  await models.members.create({
    name,
    email,
    gender: "prefer_not_to_say",
    password: hashedPassword,
  });

  redirect("/login");
}

