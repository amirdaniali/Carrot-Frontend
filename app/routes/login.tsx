import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/login";
import { ThemeProvider } from "~/components/theme-provider";
import { login } from "~/lib/authentication_utils";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Login - Carrot" },
        { name: "description", content: "Login to Carrot" },
    ];
}

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Your login logic here (e.g., API call)
        // For demo purposes, just store a mock token
        const mockToken = "your-auth-token-here";
        login(mockToken);
        
        // Redirect to dashboard
        navigate("/");
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen flex items-center justify-center p-8">
                <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
                    <h1 className="text-3xl font-bold mb-6">Login</h1>
                    <div>
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </ThemeProvider>
    );
}