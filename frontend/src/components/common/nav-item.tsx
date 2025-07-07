import Link from "next/link";
import type { FC } from "react";

interface NavItemProps {
  href: string;
  label: string;
}

export const NavItem: FC<NavItemProps> = ({ href, label }) => (
  <Link
    href={href}
    className="text-base font-medium hover:text-primary transition-colors"
  >
    {label}
  </Link>
);
