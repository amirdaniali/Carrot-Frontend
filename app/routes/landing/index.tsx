import type { Route } from "../+types/home";

import {ThemeProvider} from "~/components/theme-provider";

import {Navbar} from "./navbar";
import {FAQ} from "./faq";
import {FeatureSection} from "./feature-section";
import {HowItWorks} from "./work-procedure";
import {HeroSection} from "./hero-section";
import Footer from "./footer";
import { ScrollRestoration } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Carrot" },
        { name: "description", content: "Carrot is Awesome." },
    ];
}

export default function LandingRoute() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <HowItWorks />
            <FAQ />
            <Footer/>
            <ScrollRestoration />
        </ThemeProvider>
    );
}


