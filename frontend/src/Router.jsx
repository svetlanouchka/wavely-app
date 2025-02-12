import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "@components/Layout/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "@pages/AboutPage";
import FaqPage from "@pages/FaqPage";
import FrequenciesPage from "@pages/FrequenciesPage";
import FrequencyPage from "@pages/FrequencyPage";
import ContactPage from "@pages/ContactPage";
import LoginPage from "@pages/LoginPage";

function AppLayout() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{
		element: <AppLayout />,
		children: [
			{ path: "/about", element: <AboutPage /> },
			{ path: "/frequencies", element: <FrequenciesPage /> },
			{ path: "/frequencies/:id", element: <FrequencyPage /> },
			{ path: "/faq", element: <FaqPage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "/login", element: <LoginPage /> },
		],
	},
]);

export default router;
