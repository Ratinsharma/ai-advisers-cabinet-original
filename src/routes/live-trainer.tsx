import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/live-trainer")({
  head: () => ({
    meta: [
      { title: "iMe Live Trainer · Training that answers back — AI Advisers" },
      {
        name: "description",
        content:
          "Interactive AI tutors built around your approved organisational knowledge: onboarding, policy, compliance and internal knowledge, in 32 languages.",
      },
    ],
  }),
  component: LiveTrainer,
});

const PROCESS: [string, string, string][] = [
  [
    "01",
    "Send material.",
    "Share the approved policies and training documents in scope.",
  ],
  [
    "02",
    "Review knowledge.",
    "We review the material with you and agree what the tutor may discuss.",
  ],
  [
    "03",
    "Build tutor.",
    "The tutor is built around the approved knowledge — and tested against its own rules.",
  ],
  [
    "04",
    "Client approval.",
    "The organisation reviews and approves before anything goes live.",
  ],
  [
    "05",
    "Deploy.",
    "Deploy to the environments your people already use.",
  ],
  [
    "06",
    "Train.",
    "Employees interact using natural voice, whenever they need to.",
  ],
];

function LiveTrainer() {
  return (
    <>
      <PageHero
        eyebrow="iMe Live Trainer"
        eyebrowTone="terracotta"
        title={
          <>
            Training{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              that answers back.
            </span>
          </>
        }
        lead="Interactive AI tutors built around your approved organisational knowledge. Your policies, your onboarding, your compliance — answered, audit-grade, in 32 languages."
        actions={
          <>
            <Cta to="/contact">Build a pilot</Cta>
            <Cta to="/ime" variant="secondary">
              See iMe
            </Cta>
          </>
        }
      />

      {/* Before/after */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="mono-label text-[var(--subtle)]">Static learning</p>
            <p className="mt-8 max-w-[46ch] text-[1.125rem] leading-relaxed text-[var(--subtle)] display-serif italic" style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}>
              A document is issued. It is read once, if at all. Questions go unanswered, and
              understanding is assumed rather than demonstrated.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mono-label text-[var(--terracotta)]">Interactive conversation</p>
            <p className="mt-8 max-w-[46ch] text-[1.125rem] leading-relaxed text-[var(--foreground)]">
              An employee asks a question in their own words and receives an answer drawn
              only from material the organisation has approved — at any hour, in their language.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      {/* What it covers */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Use cases</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                <span className="block">What it</span>
                <span className="block">
                  <span className="display-serif italic text-[var(--muted-foreground)]">answers.</span>
                </span>
              </h2>
            </div>
            <ul className="border-t border-[var(--border)] sm:grid sm:grid-cols-2">
              {["Onboarding", "Policy", "Compliance", "Internal knowledge"].map((u) => (
                <li
                  key={u}
                  className="border-b border-[var(--border)] py-8 pr-6 font-display text-[1.25rem]"
                  style={{ fontVariationSettings: '"opsz" 80' }}
                >
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      {/* Process */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <p className="mono-label text-[var(--terracotta)]">A managed implementation</p>
          <h2
            className="display-lg mt-6 max-w-[14ch]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
          >
            Six steps. Founder-led.
          </h2>
        </Reveal>
        <ol className="mt-16 grid gap-px border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map(([n, t, d]) => (
            <li key={n} className="border-b border-[var(--border)] px-1 py-10 sm:px-6">
              <span className="font-display text-[var(--terracotta)]" style={{ fontSize: "1.25rem", fontVariationSettings: '"opsz" 36' }}>
                {n}
              </span>
              <h3
                className="mt-6 font-display text-[1.25rem]"
                style={{ fontVariationSettings: '"opsz" 80' }}
              >
                {t}
              </h3>
              <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-[var(--muted-foreground)]">
                {d}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* CTA */}
      <SectionShell className="border-t border-[var(--border)] bg-[var(--surface-2)]">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal>
            <p className="mono-label text-[var(--terracotta)]">Send us one policy</p>
            <h2
              className="display-xl mt-8 max-w-[18ch] text-balance"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
            >
              <span className="block">Show us one</span>
              <span className="block">
                <span className="display-serif italic text-[var(--terracotta)]">document.</span>
              </span>
            </h2>
            <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
              We will build a working tutor from a single approved policy or training
              document. You keep the result.
            </p>
            <div className="mt-10">
              <Cta to="/contact" variant="terracotta">
                Build a pilot
              </Cta>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="mono-label text-[var(--subtle)]">A note</p>
            <p
              className="display-serif italic mt-6 text-[1.1875rem] leading-relaxed text-[var(--foreground)]"
              style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}
            >
              The point of a tutor is not to replace human trainers. It is to give every employee the answer they actually asked — at the moment they ask it, in the language they think in.
            </p>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
