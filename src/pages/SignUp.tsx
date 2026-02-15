import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import Header from "@/app/Header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { TypeSignUpSchema } from "@/validation/schemas";
import { signUpSchema } from "@/validation/schemas";

function SignUpView() {
	const { handleSubmit, control } = useForm<TypeSignUpSchema>({
		defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
		resolver: zodResolver(signUpSchema),
		mode: "all",
	});

	const onSubmit = (data: TypeSignUpSchema) => {
		console.log(data);
	};

	return (
		<div className="h-full">
			<Header />
			<div className="h-screen flex justify-center items-center">
				<Card className="w-full max-w-sm">
					<CardHeader>
						<CardTitle>Sign Up</CardTitle>
						<CardDescription>
							Get started with Tandem. Create your account to access AI
							interview coach.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
							<Controller
								name="name"
								control={control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor={field.name}>
											Enter your name
										</FieldLabel>
										<Input
											placeholder="tour name"
											{...field}
											id={field.name}
											type="text"
											aria-invalid={fieldState.invalid}
										/>
										{fieldState.invalid && (
											<FieldError
												className="h-2.5"
												errors={[fieldState.error]}
											/>
										)}
									</Field>
								)}
							/>
						</form>
					</CardContent>
					<CardFooter>
						{/* <Field orientation={"horizontal"}> */}
						<Button type="submit" className="w-full mt-2.5" form="sign-up-form">
							Sign Up
						</Button>
						<Button variant="outline" className="w-full">
							Login with Google
						</Button>
						{/* </Field> */}
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

export default SignUpView;
