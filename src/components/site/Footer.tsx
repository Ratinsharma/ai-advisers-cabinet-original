import { Link } from "@tanstack/react-router";

/**
 * v3 Footer — a closing manifesto, not a sitemap dump.
 * Big serif statement, hairline columns, contact info on the right.
 */

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* Big serif closing statement */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div>
            <p className="mono-label text-[var(--terracotta)]">AI Advisers · Dublin</p>
            <h2 className="display-lg mt-8 max-w-[20ch]">
              <span className="block">Begin a private</span>
              <span className="block">conversation.</span>
            </h2>
            <p className="mt-8 max-w-[42ch] text-base leading-relaxed text-[var(--muted-foreground)]">
              We work with a small number of organisations each year. Every engagement begins the same way — a confidential conversation with the founder.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Request a briefing
                <span aria-hidden>→</span>
              </Link>
              <Link to="/founder" className="btn-ghost">
                Meet the founder
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 self-end">
            <FooterCol
              eyebrow="Practice"
              links={[
                { label: "iMe Executive AI", to: "/ime" },
                { label: "iMe Live Trainer", to: "/live-trainer" },
                { label: "Boardroom Advisory", to: "/advisory" },
                { label: "Private AI", to: "/private-ai" },
                { label: "Studio", to: "/studio" },
              ]}
            />
            <FooterCol
              eyebrow="Company"
              links={[
                { label: "About", to: "/about" },
                { label: "Kenn Joyce", to: "/founder" },
                { label: "Engagement", to: "/contact" },
                { label: "Press & speaking", to: "/contact" },
              ]}
            />
          </div>
        </div>

        {/* Hairline + base row */}
        <div className="mt-20 grid gap-6 border-t border-[var(--border)] pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid gap-2 text-sm text-[var(--muted-foreground)] sm:grid-cols-3">
            <span>kenn.joyce@aiadvisers.io</span>
            <span>+353 86 326 2239</span>
            <span>Dublin, Ireland</span>
          </div>
          <div className="mono-label flex flex-wrap items-center gap-x-6 gap-y-2 text-[var(--subtle)]">
            <span>© {new Date().getFullYear()} AI Advisers</span>
            <span aria-hidden className="h-3 w-px bg-[var(--border)]" />
            <span>Founded 2016</span>
            <span aria-hidden className="h-3 w-px bg-[var(--border)]" />
            <span>Founder-led</span>
          </div>
        </div>

        {/* Bottom wordmark — typography as signature */}
        <div className="mt-16 overflow-hidden">
          <p
            className="font-display text-[var(--foreground)]"
            style={{
              fontSize: "clamp(4rem, 18vw, 18rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.06em",
              fontWeight: 320,
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1',
              opacity: 0.94,
            }}
          >
            AI Advisers
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  eyebrow,
  links,
}: {
  eyebrow: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="mono-label text-[var(--subtle)]">{eyebrow}</p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link
              to={l.to}
              className="text-[0.95rem] text-[var(--foreground)] transition-colors hover:text-[var(--terracotta)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
