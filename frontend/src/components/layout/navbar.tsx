"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/common/social-link";
import { Github, Linkedin, Home, MessageSquare, Mail } from "lucide-react";
import { ToggleTheme } from "@/components/layout/toogle-theme";

export const Navbar = () => {
  // Define your nav items with icons
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Construction warning banner */}
      <div className="w-full bg-yellow-300 text-yellow-900 text-center py-1 text-sm font-medium">
        🚧 This site is under construction. Features may change or be incomplete. 🚧
      </div>

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

          {/* Centered nav links with icons (in-app navigation, same tab) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-4">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="group flex items-center gap-3 px-2 py-1 rounded-md hover:bg-muted"
              >
                <Icon className="w-6 h-6 group-hover:text-primary" aria-hidden="true" />
                <span className="text-base font-medium group-hover:text-primary">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right-side external icons */}
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
    </>
  );
};
