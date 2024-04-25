import { z } from 'zod';
 
export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  password: z
    .string()
    .min(6, { message: 'Be at least 6 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .trim(),
})

export type FormState =
| {
    errors?: {
      username?: string[]
      password?: string[]
      form?: string[]
    }
    message?: string
  }
| undefined;
