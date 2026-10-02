import z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password Must Minimum 6 Characters")
    .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
    .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
    .regex(/[0-9]/, "Password must contain atleast 1 Number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain atleast 1 Special Characters",
    ),
});
