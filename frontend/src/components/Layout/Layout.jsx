import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen bg-blue-light">
			<Header backgroundColor="bg-green-header" />
			<main className="p-4 min-h-[calc(100vh-154px)] flex flex-col justify-center">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
