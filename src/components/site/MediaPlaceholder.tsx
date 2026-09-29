/**
 * v3 MediaPlaceholder — a quiet frame, never a busy canvas.
 * Hairline border, single dot in corner, label only. No busy SVG, no "PLACEHOLDER" tag.
 */
export function MediaPlaceholder({
  label,
  ratio = "4 / 5",
  tone = "ink",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "ink" | "gold" | "cyan";
  className?: string;
}) {
  return (
    <figure
      style={{ aspectRatio: ratio }}
      className={`group relative w-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] ${className}`}
    >
      {/* Subtle inner texture */}
      <div className="field-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--surface-2)]/40" />

      {/* Corner mark */}
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="block h-1.5 w-1.5 rounded-full bg-[var(--foreground)]" />
        <span className="mono-label text-[var(--subtle)]">Media</span>
      </div>

      {/* Label */}
      <figcaption className="absolute inset-x-5 bottom-5 flex items-end gap-4">
        <p className="max-w-[44ch] text-[0.95rem] leading-relaxed text-[var(--muted-foreground)]">
          {label}
        </p>
      </figcaption>
    </figure>
  );
}
