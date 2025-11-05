import { Link } from "react-router";
import { Github } from "lucide-react";

export function Footer() {

    return (
        <footer className="border-t border-border/40 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                {/*<div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">*/}
                {/*    /!* Product Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Product</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Features*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Pricing*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Security*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/enterprise" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Enterprise*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Changelog*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    /!* Platform Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Platform</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/skills" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Skills*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Projects*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/modules" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Modules*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/workspace" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Workspace*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Tools*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    /!* Support Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Support</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Documentation*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/guides" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Guides*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Help Center*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Contact Us*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/status" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Status*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    /!* Company Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Company</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    About*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Blog*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Careers*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/press" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Press*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/partners" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Partners*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    /!* Resources Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Resources</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Community*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Events*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Newsletter*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/api" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    API*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/developers" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Developers*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}

                {/*    /!* Legal Column *!/*/}
                {/*    <div>*/}
                {/*        <h3 className="text-sm font-semibold mb-3">Legal</h3>*/}
                {/*        <ul className="space-y-2">*/}
                {/*            <li>*/}
                {/*                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Privacy*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Terms*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Cookies*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/licenses" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Licenses*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to="/compliance" className="text-sm text-muted-foreground hover:text-foreground">*/}
                {/*                    Compliance*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Bottom Bar */}
                <div className="border-t border-border/40 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Logo and Copyright */}
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center space-x-2">
                                <img 
                                    src="/photes-icon-1.svg" 
                                    alt="Carrot Logo" 
                                    className="h-6 w-6"
                                />
                                <span className="font-semibold text-sm">Carrot</span>
                            </Link>
                            <span className="text-sm text-muted-foreground">
                                Made by {" "}
                                <Link to={'https://AmirDaniali.com'} className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">
                                    Amir Daniali
                                </Link>.
                                The source code is available on {" "}
                                <Link className="text-muted-foreground hover:text-foreground transition-colors underline-offset-4" to={'https://github.com/amirdaniali/Carrot-Frontend'}>
                                    GitHub
                                </Link>.
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/amirdaniali/Carrot-Frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            {/*<a*/}
                            {/*    href="https://twitter.com/yourcompany"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="text-muted-foreground hover:text-foreground transition-colors"*/}
                            {/*    aria-label="Twitter"*/}
                            {/*>*/}
                            {/*    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">*/}
                            {/*        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />*/}
                            {/*    </svg>*/}
                            {/*</a>*/}
                            <a
                                href="https://linkedin.com/in/amirdaniali"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            {/*<a*/}
                            {/*    href="https://youtube.com/yourcompany"*/}
                            {/*    target="_blank"*/}
                            {/*    rel="noopener noreferrer"*/}
                            {/*    className="text-muted-foreground hover:text-foreground transition-colors"*/}
                            {/*    aria-label="YouTube"*/}
                            {/*>*/}
                            {/*    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">*/}
                            {/*        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;