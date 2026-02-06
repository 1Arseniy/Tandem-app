import { z } from "zod";

export const signUpSchema = z
	.object({
		name: z.string().min(1, "Name is required"),
		email: z.string().email("Enter a valid email address"),
		password: z
			.string()
			.min(8, "Password must be at least 8 characters long")
			.regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Include letters and numbers"),
		confirmPassword: z
			.string()
			.min(8, "Password must be at least 8 characters long")
			.regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Include letters and numbers"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Passwords do not match",
	});

export type TypeSignUpSchema = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
	name: z.string().min(1, "Name is required"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters long")
		.regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, "Include letters and numbers"),
});

export type TypeSignInSchema = z.infer<typeof signInSchema>;
