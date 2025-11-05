// Client-side authentication utility functions

// Check if user is authenticated (client-side only)
export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }
    return !!localStorage.getItem("authToken");
}

// Get auth token
export function getAuthToken(): string | null {
    if (typeof window === 'undefined') {
        return null;
    }
    return localStorage.getItem("authToken");
}

// Login function - stores token in localStorage
export function login(token: string) {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.setItem("authToken", token);
}

// Logout function - removes token from localStorage
export function logout() {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.removeItem("authToken");
}

// Get user data from localStorage (if you store user info)
export function getUserData(): any | null {
    if (typeof window === 'undefined') {
        return null;
    }
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
}

// Store user data
export function setUserData(data: any) {
    if (typeof window === 'undefined') {
        return;
    }
    localStorage.setItem("userData", JSON.stringify(data));
}