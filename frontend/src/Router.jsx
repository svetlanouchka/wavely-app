import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "@pages/AboutPage";
import FaqPage from "@pages/FaqPage";
import ContactPage from "@pages/ContactPage";

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },
	{ path: "/faq", element: <FaqPage/>}, 
	{ path: "/contact", element: <ContactPage/>},
]);

export default router;
