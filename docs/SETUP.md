# SNS Website — Setup & Deploy

## Prerequisites

- Node.js 18+
- npm 9+

## Local development

```bash
npm install
npm run dev
```

Default URL: http://localhost:5173

## Build

```bash
npm run build
```

Output: `dist/` — static files ready for any static host.

Preview locally:

```bash
npm run preview
```

## Deploy

### Vercel (recommended)

1. Import `yashdark01/sns-website` from GitHub
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

Live: https://sns-website-nine.vercel.app/

### Netlify

`netlify.toml` is included:

- Build: `npm run build`
- Publish: `dist`
- SPA fallback: all routes → `index.html`

## Section navigation

Header links scroll to section IDs on the home page:

| Nav item | Section ID |
|----------|------------|
| Home | `heroSection` |
| About Us | `aboutSection` |
| Services | `servicesSection` |
| Solution | `solutions` |
| Our Client | `valuedClients` |
| Contact / Careers / Blogs | `letsConnect` |

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Blank page after deploy | Ensure host rewrites all routes to `index.html` |
| Animations not firing | AOS initializes on mount in `App.jsx` — check console for JS errors |
| Fonts not loading | Dubai font loaded via Google Fonts in `index.html` |
| Lint errors | Run `npm run lint` — `node_modules` is excluded from ESLint |

## Environment variables

No `.env` required — fully static frontend.
