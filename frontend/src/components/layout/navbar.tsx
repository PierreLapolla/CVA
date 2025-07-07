"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/common/nav-item";
import { SocialLink } from "@/components/common/social-link";
import { Github, Linkedin } from "lucide-react";
import { ToggleTheme } from "@/components/layout/toogle-theme";

export const Navbar = () => {
  const routeList = [
    { href: "/", label: "Home" },
    { href: "/chat", label: "Chat" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full sticky top-0 bg-card z-50 border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Button
          asChild
          size="icon"
          variant="ghost"
          className="w-auto h-12 flex items-center font-bold text-xl gap-2 px-2 transition-colors hover:text-primary focus:text-primary"
          aria-label="Home"
        >
          <Link href="/">
            <span style={{ fontSize: 32, letterSpacing: 2 }}>
              Pierre Lapolla
            </span>
          </Link>
        </Button>

        {/* Centered nav links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6">
          {routeList.map((route) => (
            <NavItem key={route.label} {...route} />
          ))}
        </div>

        {/* Right-side icons */}
        <div className="flex items-center gap-2">
          <SocialLink
            href="https://github.com/PierreLapolla/CVA"
            icon={Github}
            ariaLabel="View on GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/pierrelapolla"
            icon={Linkedin}
            ariaLabel="View on LinkedIn"
          />
          <Button
            size="icon"
            variant="ghost"
            className="w-9 h-9 flex items-center justify-center hover:bg-accent"
            aria-label="Toggle theme"
          >
            <ToggleTheme />
          </Button>
        </div>
      </nav>
    </header>
  );
};
