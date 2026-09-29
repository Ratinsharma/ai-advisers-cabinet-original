import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * v3 Cta — pill buttons (Stripe-style), generous padding, terracotta reserved for the one
 * moment we want the visitor to notice.
 */

type Variant = "primary" | "terracotta" | "secondary" | "ghost" | "text";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2.5 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-[0.95rem] font-medium text-[var(--background)] transition-opacity duration-300 hover:opacity-85",
  terracotta:
    "inline-flex items-center gap-2.5 rounded-full bg-[var(--terracotta)] px-6 py-3.5 text-[0.95rem] font-medium text-[#FBF8EF] transition-opacity duration-300 hover:opacity-90",
  secondary:
    "inline-flex items-center gap-2.5 rounded-full border border-[var(--foreground)] px-6 py-3.5 text-[0.95rem] font-medium text-[var(--foreground)] transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--foreground)_5%,transparent)]",
  ghost:
    "inline-flex items-center gap-2 px-1 py-1 text-[0.95rem] font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--terracotta)]",
  text:
    "inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--terracotta)]",
};

export function Cta({
  to,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `group ${styles[variant]} ${className}`;
  const arrow = (
    <span
      aria-hidden
      className="inline-block transition-transform duration-300 ease-[var(--ease-cinema)] group-hover:translate-x-0.5"
    >
      →
    </span>
  );

  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {arrow}
      </a>
    );
  }

  return (
    <Link to={to} className={cls}>
      <span>{children}</span>
      {arrow}
    </Link>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36 ${className}`}
    >
      <div className={`mx-auto ${narrow ? "max-w-[920px]" : "max-w-[1440px]"}`}>
        {children}
      </div>
    </section>
  );
}
