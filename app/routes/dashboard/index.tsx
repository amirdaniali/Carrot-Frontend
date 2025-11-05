import { redirect, Link } from "react-router";
import type { Route } from "../+types/dashboard";
import { ScrollRestoration } from "react-router";
import { ThemeProvider } from "~/components/theme-provider";
import { ModeToggle } from "~/components/mode-toggle";
import { isAuthenticated, logout } from "~/lib/authentication_utils";

// Client-side loader - protect the route
export async function clientLoader({}: Route.ClientLoaderArgs) {
    if (!isAuthenticated()) {
        throw redirect("/");
    }
    return {};
}

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Dashboard - Carrot" },
        { name: "description", content: "Your Carrot dashboard." },
    ];
}

export default function Dashboard() {
    const handleLogout = () => {
        logout();
        window.location.href = "/";
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div className="space-x-4">
                        {/*<Link to="/skills" className="text-blue-500 hover:underline">Skills</Link>*/}
                        {/*<Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>*/}
                        {/*<Link to="/modules" className="text-blue-500 hover:underline">Modules</Link>*/}
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                </div>
                <p className="mt-4">Welcome to your dashboard!</p>
            </div>
            <ModeToggle />
            <ScrollRestoration />
        </ThemeProvider>
    );
}