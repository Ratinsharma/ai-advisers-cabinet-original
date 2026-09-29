import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Begin a private briefing — AI Advisers" },
      {
        name: "description",
        content:
          "Begin a private briefing with AI Advisers. Kenn Joyce reads every enquiry personally. Confidential. Replied to within one business day.",
      },
    ],
  }),
  component: Contact,
});

const INTERESTS = [
  "iMe Executive AI",
  "iMe Live Trainer",
  "Boardroom Advisory",
  "Private AI",
  "EU AI Act readiness",
  "Studio production",
  "Other",
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Begin"
        eyebrowTone="terracotta"
        title={
          <>
            Start with a{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              private conversation.
            </span>
          </>
        }
        lead="Kenn Joyce reads every enquiry personally. Your message is treated confidentially and replied to within one business day."
      />

      <SectionShell className="border-b border-[var(--border)]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left — contact info */}
          <Reveal>
            <div>
              <p className="mono-label text-[var(--terracotta)]">Contact</p>
              <dl className="mt-10 space-y-6">
                <ContactRow k="Email" v={<a href="mailto:kenn.joyce@aiadvisers.io" className="link-underline text-[var(--foreground)]">kenn.joyce@aiadvisers.io</a>} />
                <ContactRow k="Phone" v={<a href="tel:+353863262239" className="link-underline text-[var(--foreground)]">+353 86 326 2239</a>} />
                <ContactRow k="Office" v={<span>Dublin, Ireland</span>} />
                <ContactRow k="Hours" v={<span>UK &amp; Ireland business hours, GMT</span>} />
                <ContactRow k="Direct" v={<span>Kenn Joyce — Founder &amp; CEO</span>} />
              </dl>

              <div className="mt-12 border-t border-[var(--border)] pt-6">
                <p className="mono-label text-[var(--subtle)]">A note</p>
                <p
                  className="display-serif italic mt-4 text-[1.125rem] leading-snug text-[var(--foreground)]"
                  style={{ fontVariationSettings: '"opsz" 36, "WONK" 1' }}
                >
                  We take a small number of engagements each year. Every enquiry is treated as confidential.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={120}>
            <form className="border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10" onSubmit={(e) => e.preventDefault()}>
              <p className="mono-label text-[var(--terracotta)]">Request a briefing</p>
              <div className="mt-8 grid gap-6">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Title" name="title" optional />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" optional />

                <div>
                  <label htmlFor="interest" className="mono-label block text-[var(--subtle)]">Area of interest</label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue={INTERESTS[0]}
                    className="mt-2 block w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-base text-[var(--foreground)] focus:border-[var(--foreground)] focus:outline-none"
                  >
                    {INTERESTS.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mono-label block text-[var(--subtle)]">What are you trying to achieve?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="A few sentences. The decision in front of you, if you can share it."
                    className="mt-2 block w-full resize-none border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-base text-[var(--foreground)] placeholder:text-[var(--subtle)] focus:border-[var(--foreground)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Cta to="/contact" variant="primary">
                    Request a private briefing
                  </Cta>
                  <span className="mono-label text-[var(--subtle)]">Replied within one business day.</span>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mono-label flex items-baseline gap-2 text-[var(--subtle)]">
        {label}
        {optional && <span className="text-[var(--subtle)]">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-base text-[var(--foreground)] placeholder:text-[var(--subtle)] focus:border-[var(--foreground)] focus:outline-none"
      />
    </div>
  );
}

function ContactRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] items-baseline gap-6 border-t border-[var(--border)] pt-5">
      <dt className="mono-label text-[var(--subtle)]">{k}</dt>
      <dd className="text-base text-[var(--foreground)]">{v}</dd>
    </div>
  );
}
