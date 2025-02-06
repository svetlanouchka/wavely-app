import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-blue-light">
            <Header />
            <main className="p-4" style={{ minHeight: "calc(100vh - 192px)" }}>
            <Outlet />
            </main>
            <Footer />
        </div>
    );
}