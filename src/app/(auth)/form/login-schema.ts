import { z } from "zod";

export const getLoginSchema = () => {
  return z.object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address." })
      .min(1, { message: "Email is required." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long." })
      .min(1, { message: "Password is required." }),
  });
};

export type LoginSchemaType = z.infer<ReturnType<typeof getLoginSchema>>;
