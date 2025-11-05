import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Sun, Moon, Monitor, Languages } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = (selectedTheme: "light" | "dark" | "system") => {
      setTheme(selectedTheme); 
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="mr-2 flex items-center space-x-1">
          {/*<img src="/" alt="Logo" className="h-8 w-8" />*/}
          <span className="hidden font-bold sm:inline-block">Carrot</span>
        </Link>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                {/*<Link to="/pricing" className="w-full">*/}
                {/*  Pricing*/}
                {/*</Link>*/}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        <div className="mr-4 space-x-1 hidden lg:flex">
          {/*<nav className="flex items-center space-x-1 text-sm">*/}
          {/*  <Link to="/pricing" className="hover:bg-secondary rounded-md p-2">Pricing</Link>*/}
          {/*</nav>*/}
        </div>
        <div className="flex flex-1 items-center space-x-1 justify-end">

          {/*<button*/}
          {/*  aria-label="Change Language"*/}
          {/*  className="w-4 h-4 flex items-center justify-center hover:bg-secondary rounded-md"*/}
          {/*>*/}
          {/*  <Languages className="h-4 w-4" />*/}
          {/*</button>*/}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle theme">
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : theme === "light" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Monitor className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                <Monitor className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            <Link to={"/login"}>
                <Button variant="outline">Login</Button>
            </Link>
            <Link to={"/register"}>
                <Button variant="outline">Sign Up</Button>
            </Link>
        </div>
      </div>
    </header>
  );
}
