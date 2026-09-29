import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/**
 * v3 Header — restraint as identity.
 * Wordmark left, three primary nav items, single CTA. No nav clutter.
 * (Vignelli: grid is freedom; Stripe: less is more.)
 */

const NAV = [
  { label: "iMe", to: "/ime" },
  { label: "Studio", to: "/studio" },
  { label: "Founder", to: "/founder" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        {/* Wordmark — Fraunces serif "AA" mark + wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full border border-[var(--foreground)] text-[var(--foreground)] font-display text-[0.95rem] font-medium"
          >
            <span style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>A</span>
          </span>
          <span className="font-display text-[1.0625rem] tracking-[-0.02em] text-[var(--foreground)]">
            AI Advisers
          </span>
        </Link>

        {/* Desktop nav — three items only */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-1.5 text-[0.9rem] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
              activeProps={{ className: "text-[var(--foreground)]" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/private-ai"
            className="rounded-full px-3.5 py-1.5 text-[0.9rem] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Private AI
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/contact"
            className="mono-label text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            EU AI Act →
          </Link>
          <span aria-hidden className="h-3 w-px bg-[var(--border)]" />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)] px-4 py-2 text-[0.9rem] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
          >
            Begin
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 block h-px w-4 bg-[var(--foreground)] transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 block h-px w-4 bg-[var(--foreground)] transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
            {[...NAV, { label: "Private AI", to: "/private-ai" }, { label: "Advisory", to: "/advisory" }, { label: "Live Trainer", to: "/live-trainer" }, { label: "About", to: "/about" }].map(
              (item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--border)] py-4 text-base text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-3 text-base font-medium text-[var(--background)]"
            >
              Begin
              <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
