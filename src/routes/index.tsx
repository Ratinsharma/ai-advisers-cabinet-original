import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Cta, SectionShell } from "@/components/site/Cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Advisers · AI that knows what it cannot say" },
      {
        name: "description",
        content:
          "AI Advisers builds controlled executive AI for organisations that answer to a regulator. Built for the EU AI Act deadline of 2 August 2026.",
      },
      { property: "og:title", content: "AI Advisers · AI that knows what it cannot say" },
      {
        property: "og:description",
        content:
          "Controlled executive AI. Built for the EU AI Act. Founder-led. Twenty-five years of boardroom experience.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Manifesto />
      <Thesis />
      <Film />
      <Product />
      <Act />
      <Engagement />
      <Founder />
      <Coda />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. MANIFESTO
   Didion-voice opening. Single statement. No supporting copy yet.
   ───────────────────────────────────────────────────────────── */

function Manifesto() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pt-36 pb-20 sm:px-8 sm:pt-44 lg:px-12 lg:pt-56 lg:pb-32">
      {/* Background paper grid */}
      <div className="paper-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-[var(--surface-2)]/60 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
            <span className="mono-label text-[var(--terracotta)]">AI Advisers · Manifesto · 2026</span>
            <span aria-hidden className="h-px flex-1 bg-[var(--border)]" />
            <span className="mono-label text-[var(--subtle)]">Dublin</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="display-mega mt-12 max-w-[18ch] text-balance"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
          >
            <span className="block">AI that knows</span>
            <span className="block">
              <span className="display-serif italic text-[var(--terracotta)]">what it cannot</span>
            </span>
            <span className="block">say.</span>
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-12 max-w-[58ch] text-[1.1875rem] leading-relaxed text-[var(--muted-foreground)] sm:text-[1.3125rem]">
            AI Advisers builds controlled executive AI for organisations that answer
            to a regulator, a board, and the public. It says only what you have
            approved. It refuses what you have not.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Cta to="/contact" variant="primary">
              Begin a briefing
            </Cta>
            <Cta to="/ime" variant="secondary">
              Watch the 2-minute film
            </Cta>
          </div>
        </Reveal>

        {/* Authorial signature line */}
        <Reveal delay={480}>
          <div className="mt-20 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-foreground)]">
            <span className="font-display text-[var(--foreground)]" style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}>
              Kenn Joyce
            </span>
            <span>Founder &amp; CEO</span>
            <span aria-hidden className="text-[var(--subtle)]">·</span>
            <span>Written for leadership.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. THESIS — three lines, each a belief.
   Vignelli grid: 3 columns, hairline columns between.
   ───────────────────────────────────────────────────────────── */

function Thesis() {
  return (
    <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="grid gap-10">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6">
            <p className="mono-label text-[var(--terracotta)]">Our thesis</p>
            <span className="mono-label text-[var(--subtle)]">Three lines</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ol className="grid gap-0 lg:grid-cols-3 lg:gap-0">
            {[
              {
                n: "i.",
                t: "Control is the product.",
                d: "Most AI vendors sell capability. We sell control — over what your AI is allowed to say, in 32 languages, on your premises.",
              },
              {
                n: "ii.",
                t: "Refusal is a feature.",
                d: "Our executive AI is engineered to refuse. Tested by impersonating its own creator and asking it to lie — it refused, every time, in his voice.",
              },
              {
                n: "iii.",
                t: "Deadline is shaping demand.",
                d: "From 2 August 2026, the EU AI Act forces every interactive AI to disclose itself. We were built for that day.",
              },
            ].map((line, i) => (
              <li
                key={line.n}
                className={`border-t border-[var(--border)] py-10 lg:py-14 ${
                  i < 2 ? "lg:border-r lg:pr-10 lg:mr-10" : ""
                }`}
              >
                <span className="font-display text-[var(--terracotta)]" style={{ fontSize: "1.5rem", fontVariationSettings: '"opsz" 36' }}>
                  {line.n}
                </span>
                <h3
                  className="display-md mt-6 max-w-[14ch]"
                  style={{ fontVariationSettings: '"opsz" 80, "WONK" 1' }}
                >
                  {line.t}
                </h3>
                <p className="mt-5 max-w-[36ch] text-[var(--muted-foreground)] leading-relaxed">
                  {line.d}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. FILM — full-bleed YouTube of the iMe "I met myself" 2-min film.
   Sagmeister moment: the emotional intensity lives here.
   ───────────────────────────────────────────────────────────── */

function Film() {
  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--foreground)] px-5 py-24 text-[var(--background)] sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-end lg:gap-20">
          <Reveal>
            <div>
              <p className="mono-label text-[var(--terracotta-soft)]">The 2-minute film</p>
              <h2
                className="display-lg mt-8 text-[var(--background)]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                <span className="block">“I tried to make it.</span>
                <span className="block"><span className="display-serif italic text-[var(--terracotta-soft)]">It refused.</span>”</span>
              </h2>
              <p className="mt-8 max-w-[42ch] text-[var(--background)]/70 leading-relaxed">
                Kenn handed his face, his voice and his knowledge to an AI. Then he tried to make it lie.
                What it did next is the product.
              </p>
              <p className="mono-label mt-10 text-[var(--background)]/50">
                Directed by Kenn Joyce · iMe · 2 min
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure className="relative overflow-hidden border border-[var(--background)]/15 bg-[var(--background)]/5">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/mrm-ZLzsg44?rel=0&modestbranding=1"
                  title="iMe — Meet the other Kenn Joyce (2-minute film)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-[var(--background)]/15 px-5 py-3 text-xs text-[var(--background)]/60">
                <span className="mono-label">Watch · iMe demonstration</span>
                <span>YouTube · 2-minute film</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. PRODUCT — one capability (iMe), three deployments.
   April Dunford: feature, not benefit. Mechanism, not theme.
   ───────────────────────────────────────────────────────────── */

function Product() {
  return (
    <SectionShell className="border-b border-[var(--border)]">
      <div className="grid gap-16">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">The capability</p>
              <h2
                className="display-xl mt-8 max-w-[16ch] text-balance"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1' }}
              >
                <span className="block">One product.</span>
                <span className="block">
                  <span className="display-serif italic text-[var(--muted-foreground)]">Three ways</span>
                </span>
                <span className="block">it&rsquo;s deployed.</span>
              </h2>
            </div>
            <p className="self-end text-[1.1875rem] leading-relaxed text-[var(--muted-foreground)] sm:text-[1.3125rem]">
              iMe is a controlled executive AI — your likeness, your voice, your approved
              knowledge. It is deployed three ways depending on the problem: as a corporate
              spokesperson, as a workforce trainer, or as a private infrastructure component
              inside your own environment.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <ol className="grid gap-px border-t border-[var(--border)] sm:grid-cols-3">
            {[
              {
                n: "01",
                route: "/ime",
                name: "iMe Executive",
                tagline: "Be in the room.",
                d: "A photorealistic, voice-matched digital representation of a leader. Speaks only what is approved. 32 languages. Answers questions live, on stage, on screen, on camera.",
                facts: ["Photorealistic", "Voice matched", "Approved knowledge", "Live engagement"],
              },
              {
                n: "02",
                route: "/live-trainer",
                name: "iMe Trainer",
                tagline: "Training that answers back.",
                d: "An interactive AI tutor built around your approved material. Onboarding, policy, compliance — answered by the organisation's own knowledge, audit-grade.",
                facts: ["Voice-interactive", "Client-controlled knowledge", "Audit-grade records", "24 / 7"],
              },
              {
                n: "03",
                route: "/private-ai",
                name: "Private AI",
                tagline: "Your intelligence stays inside.",
                d: "The iMe capability, on your infrastructure. On-premise, in your cloud, or air-gapped. For organisations where information is the product.",
                facts: ["On-premise", "Air-gapped option", "Organisational knowledge", "Sovereign"],
              },
            ].map((d) => (
              <li key={d.n} className="group relative border-b border-[var(--border)] px-1 py-10 sm:px-6">
                <div className="flex items-center justify-between">
                  <span className="mono-label text-[var(--subtle)]">{d.n}</span>
                  <Cta to={d.route} variant="text">
                    Open
                  </Cta>
                </div>
                <p className="mono-label mt-6 text-[var(--terracotta)]">{d.name}</p>
                <h3 className="display-md mt-3 max-w-[14ch]" style={{ fontVariationSettings: '"opsz" 80' }}>
                  {d.tagline}
                </h3>
                <p className="mt-6 max-w-[34ch] text-[var(--muted-foreground)] leading-relaxed">
                  {d.d}
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[0.85rem] text-[var(--subtle)]">
                  {d.facts.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span aria-hidden className="block h-1 w-1 rounded-full bg-[var(--foreground)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. ACT — The EU AI Act. Deadline-led.
   Cialdini: scarcity. Thiel: contrarian positioning.
   ───────────────────────────────────────────────────────────── */

function Act() {
  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--surface-2)] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">The EU AI Act</p>
              <h2
                className="display-xl mt-10 max-w-[14ch] text-balance"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                <span className="block">Built for</span>
                <span className="block"><span className="display-serif italic text-[var(--terracotta)]">2 August</span></span>
                <span className="block">2026.</span>
              </h2>
              <p className="mt-10 max-w-[44ch] text-[1.0625rem] leading-relaxed text-[var(--muted-foreground)]">
                From 2 August 2026, organisations deploying interactive AI must disclose that
                users are speaking to an AI, mark generated content, and keep an audit trail.
                Most vendors will retrofit. We were built for it.
              </p>
              <div className="mt-10">
                <Cta to="/contact" variant="terracotta">
                  Discuss an EU AI Act pilot
                </Cta>
              </div>
            </div>

            <Reveal delay={120}>
              <dl className="border-t border-[var(--foreground)]/15">
                {[
                  {
                    k: "Disclosure by design.",
                    v: "Users are told, in plain language, that they are speaking to iMe. Not buried in a footer.",
                  },
                  {
                    k: "Approved knowledge only.",
                    v: "The model refuses anything outside the brief. Tested by the founder impersonating his own CFO — it refused.",
                  },
                  {
                    k: "Auditable.",
                    v: "Every interaction is recorded, signed, and retained for the implemented training model.",
                  },
                  {
                    k: "On your terms.",
                    v: "Deployed on your premises, in your cloud, or fully air-gapped. The data never has to leave.",
                  },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="grid gap-3 border-b border-[var(--foreground)]/15 py-7 sm:grid-cols-[1fr_1.8fr] sm:gap-10"
                  >
                    <dt
                      className="font-display"
                      style={{
                        fontSize: "1.0625rem",
                        letterSpacing: "-0.02em",
                        fontVariationSettings: '"opsz" 36',
                      }}
                    >
                      {row.k}
                    </dt>
                    <dd className="text-[var(--muted-foreground)] leading-relaxed">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. FOUNDER — essay-style portrait moment.
   StoryBrand: customer is hero; Kenn is the guide.
   ───────────────────────────────────────────────────────────── */

function Founder() {
  return (
    <SectionShell className="border-b border-[var(--border)]">
      <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal>
          <figure className="relative overflow-hidden border border-[var(--border)]">
            <img
              src="/kenn-joyce.jpg"
              alt="Kenn Joyce, Founder and CEO of AI Advisers"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/65 via-black/15 to-transparent p-6 text-xs text-white">
              <span className="font-display" style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}>
                Kenn Joyce
              </span>
              <span className="text-white/75">Dublin · Founder &amp; CEO</span>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <p className="mono-label text-[var(--terracotta)]">The founder</p>
            <h2
              className="display-xl mt-10 max-w-[14ch] text-balance"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
            >
              <span className="block">Twenty-five years</span>
              <span className="block">
                <span className="display-serif italic text-[var(--muted-foreground)]">before</span> the hype.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p
              className="mt-10 max-w-[60ch] text-[1.1875rem] leading-relaxed text-[var(--foreground)] sm:text-[1.3125rem]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              Kenn Joyce founded AI Advisers after twenty-five years advising senior
              executives — and a year spent handing his own face, voice and knowledge
              to an AI, then trying to make it lie. <span className="display-serif italic text-[var(--terracotta)]">It refused.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 grid gap-px border-t border-[var(--border)] sm:grid-cols-3">
              {[
                { k: "Postgraduate", v: "AI for Business · The Wharton School" },
                { k: "MBA", v: "Macquarie Business School" },
                { k: "BFA", v: "University College Dublin" },
              ].map((row) => (
                <div key={row.k} className="border-b border-[var(--border)] py-6 sm:border-b-0 sm:px-6 sm:py-8">
                  <p className="mono-label text-[var(--subtle)]">{row.k}</p>
                  <p
                    className="mt-3 font-display text-[1.0625rem]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {row.v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Cta to="/founder" variant="primary">
                Read the full bio
              </Cta>
              <Cta to="/contact" variant="text">
                Request a private briefing
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. ENGAGEMENT — three steps (not seven).
   Rachleff: keep the funnel obvious.
   ───────────────────────────────────────────────────────────── */

const STEPS: [string, string, string][] = [
  [
    "01",
    "Briefing.",
    "A confidential, founder-led conversation. No deck. We listen for the decision in front of you.",
  ],
  [
    "02",
    "Design.",
    "We propose an advisory, trainer, avatar or infrastructure solution — scoped to one defined outcome.",
  ],
  [
    "03",
    "Delivery.",
    "You approve the knowledge. We build, configure, and deploy into the agreed environment.",
  ],
];

function Engagement() {
  return (
    <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="mono-label text-[var(--terracotta)]">Engagement</p>
            <h2
              className="display-xl mt-8 max-w-[14ch] text-balance"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
            >
              From question<br />to capability.
            </h2>
            <p className="mt-8 max-w-[42ch] text-[var(--muted-foreground)] leading-relaxed">
              Every engagement begins the same way. Three steps, founder-led, every time.
            </p>
          </div>

          <ol className="border-t border-[var(--border)]">
            {STEPS.map(([n, t, d]) => (
              <li key={n} className="grid gap-4 border-b border-[var(--border)] py-10 sm:grid-cols-[auto_1fr_1.6fr] sm:items-baseline sm:gap-10">
                <span className="font-display text-[var(--terracotta)]" style={{ fontSize: "1.5rem", fontVariationSettings: '"opsz" 36' }}>
                  {n}
                </span>
                <h3 className="display-md max-w-[14ch]" style={{ fontVariationSettings: '"opsz" 80' }}>
                  {t}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </SectionShell>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. CODA — closing invitation.
   ───────────────────────────────────────────────────────────── */

function Coda() {
  return (
    <section className="relative px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
      <div className="absolute -top-px left-0 h-px w-full bg-[var(--border)]" />
      <div className="mx-auto max-w-[1440px] text-center">
        <Reveal>
          <p className="mono-label text-[var(--terracotta)]">A final word</p>
          <h2
            className="display-mega mx-auto mt-10 max-w-[16ch] text-balance"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1' }}
          >
            <span className="block">Start with</span>
            <span className="block">
              <span className="display-serif italic text-[var(--terracotta)]">a private</span>
            </span>
            <span className="block">conversation.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-10 max-w-[52ch] text-[1.125rem] leading-relaxed text-[var(--muted-foreground)]">
            We take a small number of engagements each year. Your enquiry will be read by Kenn personally.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Cta to="/contact" variant="primary">
              Begin
            </Cta>
            <Cta to="/founder" variant="secondary">
              Meet the founder
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
