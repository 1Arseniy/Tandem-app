import { createBrowserRouter } from "react-router";
import App from "@/app/App";
import NotFoundPage from "@/app/NotFoundPage";

const router = createBrowserRouter([
	{
		index: true,
		path: "/",
		Component: App,
	},
	{
		path: "*",
		Component: NotFoundPage,
	},
]);

export default router;
