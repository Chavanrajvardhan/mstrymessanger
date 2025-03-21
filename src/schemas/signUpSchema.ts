import { z } from "zod"

export const usernameValidation = z
    .string()
    .min(2 , "Usernname must be  2 charcter")
    .max(20, "Username must no more than 20 character")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special charcter")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password:z.string().min(6,{message: "password must be at least 6 charcters"})
})

