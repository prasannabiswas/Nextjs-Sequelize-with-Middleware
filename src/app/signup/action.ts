"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/utils/session";
import { dbInit, Member } from "@/models";
import { hashPassword } from "@/utils/password";

const signupSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }).trim(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
  number: z
    .string()
    .regex(/^\d{10}$/, { message: "Number should be exactly 10 digits" }),
});

export async function signup(prevState: any, formData: FormData) {
  await dbInit();
  const formValues = Object.fromEntries(formData);
  const result = signupSchema.safeParse(formValues);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      values: formValues,
    };
  }

  const { name, email, password, number } = result.data;
  console.log("30", name, email, password, number);

  // Check if user already exists
  const existing = await Member.findOne({ where: { email } });
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
  await Member.create({
    name,
    email,
    password: hashedPassword,
    mobile_number: number,
    // optional: country_code: '+91',  // if you're passing it
  });

  redirect("/login");
}
