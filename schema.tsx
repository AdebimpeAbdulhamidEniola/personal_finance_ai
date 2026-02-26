import * as z from "zod";


export const logInSchema = z.object({
    email: z.email({
        error: (issue) => {
            if (issue.input === undefined) {
                return 'Email is required';
            }
            return 'Invalid email address';
        }
    }),
    password: z.string({
        error: (issue) => {
            if (issue.input === undefined) {
                return 'Password is required';
            }
            return 'Invalid password';
        }
    })
}).strict();   

export type LogInData = z.infer<typeof logInSchema>;


