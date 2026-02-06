import { createBrowserRouter } from "react-router";
import App from "@/app/App";
import NotFoundPage from "@/app/NotFoundPage";
import SignUpView from "./SignUp";

const router = createBrowserRouter([
	{
		index: true,
		path: "/",
		Component: App,
	},
	{
		path: "/sign-up",
		Component: SignUpView,
	},
	{
		path: "*",
		Component: NotFoundPage,
	},
]);

export default router;
