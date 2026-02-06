import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import type { TypeSignUpSchema } from "@/validation/schemas";
import { signUpSchema } from "@/validation/schemas";

function SignUpView() {
	const { handleSubmit } = useForm<TypeSignUpSchema>({
		defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
		resolver: zodResolver(signUpSchema),
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
						<form onSubmit={handleSubmit(onSubmit)}>
							<Button type="submit" className="w-full">
								Sign Up
							</Button>
						</form>
					</CardContent>
					<CardFooter>
						<Button variant="outline" className="w-full">
							Login with Google
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}

export default SignUpView;
