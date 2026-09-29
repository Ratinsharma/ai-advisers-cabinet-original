import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "AI Advisers Studio · Broadcast-grade AI production" },
      {
        name: "description",
        content:
          "In-house broadcast, video, photography and audio production. The standard of the output is never outsourced.",
      },
    ],
  }),
  component: Studio,
});

const CAPABILITIES = [
  "Podcast production",
  "TV and video",
  "AI video and avatars",
  "Executive photography",
  "Branding",
  "Communications",
  "Voiceover and audio",
];

function Studio() {
  return (
    <>
      <PageHero
        eyebrow="AI Advisers Studio"
        eyebrowTone="terracotta"
        title={
          <>
            The technology is AI.{" "}
            <span className="display-serif italic text-[var(--muted-foreground)]">
              The standard is broadcast.
            </span>
          </>
        }
        lead="In-house production capability for everything an executive AI programme requires — from brand to broadcast. The standard of the output is never outsourced."
        actions={<Cta to="/contact">Brief us on a project</Cta>}
      />

      {/* Wide shot + details */}
      <SectionShell className="border-b border-[var(--border)]">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <MediaPlaceholder
              label="Approved AI Advisers studio wide shot"
              ratio="16 / 10"
            />
            <div className="grid gap-6">
              <MediaPlaceholder
                label="Approved microphone and recording detail"
                ratio="16 / 9"
              />
              <MediaPlaceholder
                label="Approved camera and lighting rig photography"
                ratio="16 / 9"
              />
            </div>
          </div>
        </Reveal>
      </SectionShell>

      {/* Capabilities */}
      <SectionShell className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="mono-label text-[var(--terracotta)]">Capabilities</p>
              <h2
                className="display-lg mt-6 max-w-[14ch]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Seven practices.{" "}
                <span className="display-serif italic text-[var(--muted-foreground)]">
                  One roof.
                </span>
              </h2>
            </div>
            <ul className="border-t border-[var(--border)] sm:grid sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="border-b border-[var(--border)] py-6 pr-6 font-display text-[1.125rem]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </SectionShell>

      {/* Why in-house */}
      <SectionShell className="border-t border-[var(--border)]">
        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mono-label text-[var(--terracotta)]">Why in-house</p>
            <p
              className="display-serif italic mt-8 text-[1.75rem] leading-snug text-[var(--foreground)] sm:text-[2.25rem]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
            >
              &ldquo;Production capability in-house means the standard of the output
              is never outsourced.&rdquo;
            </p>
            <p className="mono-label mt-8 text-[var(--subtle)]">Kenn Joyce · Founder</p>
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
