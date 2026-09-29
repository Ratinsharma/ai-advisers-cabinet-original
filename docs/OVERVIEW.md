# Version overview

The preserved earlier Cabinet website served by the original port 8080 project. Its homepage leads with controlled executive AI and a manifesto, followed by thesis, film, product, regulatory copy, engagement and founder sections. This is a historical baseline for comparison with the new training-led website.

## Page map

- `/`
- `/ime`
- `/live-trainer`
- `/advisory`
- `/private-ai`
- `/studio`
- `/about`
- `/founder`
- `/contact`

## Source guide

| Location | Purpose |
|---|---|
| `src/routes` | TanStack routes and page copy |
| `src/components/site` | Shared marketing layout and navigation |
| `src/styles.css` | Typography, palette and responsive styling |
| `public` | Existing public images and media posters |
| `vite.config.ts` | TanStack/Vite build configuration |
| `bun.lock` | Reproducible dependency versions |

React, TypeScript, TanStack Start/Router, Tailwind CSS and Vite power the application. The inherited build produces server output; it must not be assumed to work as a plain static GitHub Pages upload. No deployment workflow is included.

## Version comparison

| Version | Leading idea | Source availability |
|---|---|---|
| Enterprise Light | Enterprise service presentation; pearl/gold | Complete app |
| Portrait First | Founder portrait transition | Notes only |
| Original Cabinet | Editorial executive-first manifesto; parchment/terracotta | Complete app |
| Cabinet iMe training | AI literacy, onboarding and team training first | Complete app, latest |
