import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "@pages/AboutPage";

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },
]);

export default router;
