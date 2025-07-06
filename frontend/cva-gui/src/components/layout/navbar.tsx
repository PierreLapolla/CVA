"use client";
import {ChevronsDown, Github} from "lucide-react";
import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ToggleTheme} from "@/components/layout/toogle-theme";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/chat",
        label: "Chat",
    },
    {
        href: "/contact",
        label: "Contact",
    },
];

export const Navbar = () => {
    return (
        <header className="w-full sticky top-0 z-40 bg-card border-b border-secondary">
            <nav className="container mx-auto flex items-center justify-between py-3">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center font-bold text-xl gap-2">
                    <ChevronsDown className="w-8 h-8 text-primary"/>
                    Shadcn
                </Link>

                {/* Center: Navigation */}
                <div className="hidden md:flex gap-6 mx-auto">
                    {routeList.map(({href, label}) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-base font-medium hover:text-primary transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right: Theme toggle and GitHub */}
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="p-0 w-9 h-9 flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        <ToggleTheme/>
                    </Button>
                    <Button asChild size="sm" variant="ghost" aria-label="View on GitHub" className="p-0 w-9 h-9 flex items-center justify-center">
                        <Link
                            aria-label="View on GitHub"
                            href="https://github.com/PierreLapolla/CVA.git"
                            target="_blank"
                        >
                            <Github className="size-5"/>
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
};
