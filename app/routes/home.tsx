import type { Route } from "./+types/home";
import { isAuthenticated } from "~/lib/authentication_utils";
import LandingRoute from "./landing/index";
import Dashboard from "./dashboard/index";

// Client-side loader
export async function clientLoader({}: Route.ClientLoaderArgs) {
    return { isAuth: isAuthenticated() };
}

// Render either landing or dashboard based on auth
export default function Home({ loaderData }: Route.ComponentProps) {
    return loaderData.isAuth ? <Dashboard /> : <LandingRoute />;
}
