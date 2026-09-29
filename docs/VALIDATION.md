# Historical snapshot validation

Checked 29 September 2026 with Bun 1.4.2 and the frozen dependency lockfile.

- Dependency installation: passed.
- TypeScript: fails at `src/components/site/CapabilityScroller.tsx:165`. The component passes a `variant` prop that `MediaPlaceholder` does not accept. Its declared option is `tone`. This is an inherited source issue, not a regression introduced by export packaging.
- Production bundle: passed (client, SSR and Nitro output). A bundler success does not mean TypeScript passes.
- Lint, current legal/product claims and current production behaviour were not revalidated for this historical snapshot.

The snapshot preserves application behaviour. Use the latest training-led repository for continued development.
