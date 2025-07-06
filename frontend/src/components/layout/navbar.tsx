"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleTheme } from "@/components/layout/toogle-theme";

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
        {/* Left: Logo as Button */}
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="w-auto h-9 flex items-center font-bold text-xl gap-2 px-3"
          aria-label="Home"
        >
          <Link href="/">
            Pierre Lapolla
          </Link>
        </Button>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-6 mx-auto">
          {routeList.map(({ href, label }) => (
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
            size="icon"
            variant="ghost"
            className="w-9 h-9 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            <ToggleTheme />
          </Button>
          <Button
            asChild
            size="icon"
            variant="ghost"
            aria-label="View on GitHub"
            className="w-9 h-9 flex items-center justify-center"
          >
            <Link
              aria-label="View on GitHub"
              href="https://github.com/PierreLapolla/CVA.git"
              target="_blank"
            >
              {/* Inline SVG from SimpleIcons for GitHub, styled to match theme toggle */}
              <svg className="size-5" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
