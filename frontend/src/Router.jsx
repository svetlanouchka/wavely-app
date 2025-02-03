import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "@components/Layout/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "@pages/AboutPage";
import FaqPage from "@pages/FaqPage";
import ContactPage from "@pages/ContactPage";

function AppLayout() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

const router = createBrowserRouter([
	{ element: <AppLayout />, 
		children: [			
	{ path: "/", element: <HomePage /> },
	{ path: "/about", element: <AboutPage /> },
	{ path: "/faq", element: <FaqPage/>}, 
	{ path: "/contact", element: <ContactPage/>},
		]
	}
]);

export default router;
