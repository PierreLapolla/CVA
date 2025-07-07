import Link from "next/link";
import type { FC, ComponentType, SVGProps } from "react";

interface SocialLinkProps {
  href: string;
  /** Pass the icon component itself, e.g. Github or Linkedin from lucide-react */
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Optional text label; if omitted, only the icon is rendered */
  label?: string;
  /**
   * If you render with no label, supply ariaLabel for screen readers.
   * Otherwise it defaults to the label prop.
   */
  ariaLabel?: string;
}

export const SocialLink: FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
  ariaLabel,
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel ?? label}
    className="group flex items-center gap-3 px-2 py-1 rounded-md hover:bg-muted"
  >
    <Icon className="w-6 h-6 group-hover:text-primary" aria-hidden="true" />
    {label && (
      <span className="text-base font-medium group-hover:text-primary">
        {label}
      </span>
    )}
  </Link>
);
