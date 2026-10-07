import { z } from "zod";

export const complainSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((value) => !Number.isNaN(Number(value)), {
      message: "Price must be a valid number",
    }),
  image: z.array(z.instanceof(File)).min(1, "Image is required"),
});
