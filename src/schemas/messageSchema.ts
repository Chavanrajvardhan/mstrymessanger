import { z } from "zod"

export const messageSchema = z. object({
   constent: z
   .string()
   .min(10, "content must be atleast 10 charecter")
   .max(300, "Content must be no longer that 300 charcter")
})
