import { Button } from "~/components/ui/button"

import type { Route } from "./+types/home"
import {ScrollRestoration} from "react-router";
import {ThemeProvider} from "~/components/theme-provider";
import {ModeToggle} from "~/components/mode-toggle";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ]
}

export default function Home() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Button>Click me</Button>
            <ModeToggle></ModeToggle>
        </ThemeProvider>
    )
}