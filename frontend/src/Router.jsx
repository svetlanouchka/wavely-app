import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "@components/Layout/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "@pages/AboutPage";
import FaqPage from "@pages/FaqPage";
import FrequenciesPage from "@pages/FrequenciesPage";
import FrequencyPage from "@pages/FrequencyPage";
import ContactPage from "@pages/ContactPage";
import SignUpPage from "@pages/SignUpPage";
import LoginPage from "@pages/LoginPage";
import SeancePage from "@pages/SeancePage";
import MyProfilePage from "@pages/MyProfilePage";
import UserPage from "@pages/UserPage";


function AppLayout() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

const router = createBrowserRouter([
	{ path: "/", element: <HomePage /> },
	{ path: "/frequencies/:id/seance", element: <SeancePage /> },
	{
		element: <AppLayout />,
		children: [
			{ path: "/about", element: <AboutPage /> },
			{ path: "/frequencies", element: <FrequenciesPage /> },
			{ path: "/frequencies/:id", element: <FrequencyPage /> },
			{ path: "/faq", element: <FaqPage /> },
			{ path: "/contact", element: <ContactPage /> },
			{ path: "/signup", element: <SignUpPage /> },
			{ path: "/login", element: <LoginPage /> },
			{ path: "/my-profile", element: <MyProfilePage /> },
			{ path: "/myspace", element: <UserPage /> },
		],
	},
]);

export default router;
