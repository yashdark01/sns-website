# SNS Website

[![CI](https://github.com/yashdark01/sns-website/actions/workflows/ci.yml/badge.svg)](https://github.com/yashdark01/sns-website/actions/workflows/ci.yml)

Corporate marketing website for **SNS** — SAP digital transformation, ERP solutions, and enterprise consulting. Built with React, Vite, Tailwind CSS, AOS scroll animations, and responsive single-page sections.

**Live:** [sns-website-nine.vercel.app](https://sns-website-nine.vercel.app/)  
**Author:** [Yash Patidar](https://yashpatidar.vercel.app)  
**Repository:** [github.com/yashdark01/sns-website](https://github.com/yashdark01/sns-website)

---

## Features

| Area | Details |
|------|---------|
| **Landing page** | Hero, about, features, services, solutions, national objectives, clients |
| **Animations** | AOS scroll reveals + Tailwind animate utilities on section triggers |
| **Navigation** | Sticky header with smooth scroll (`react-scroll`) |
| **Responsive** | Custom breakpoints from mobile (300px) to 4K |
| **Contact CTA** | Email capture section with gradient card UI |

---

## Tech stack

| Layer | Technologies |
|-------|----------------|
| **Frontend** | React 18, Vite 5, React Router 6 |
| **Styling** | Tailwind CSS 3, tailwindcss-animate |
| **Motion** | AOS, react-intersection-observer, react-slick |
| **Deploy** | Vercel / Netlify (SPA redirects configured) |

---

## Quick start

```bash
git clone https://github.com/yashdark01/sns-website.git
cd sns-website
npm install
npm run dev
```

Open **http://localhost:5173**

### Production build

```bash
npm run build
npm run preview
```

---

## Project structure

```
sns-website/
├── public/           # Static assets (logo, hero images)
├── src/
│   ├── Components/   # Header, Footer, Button
│   ├── Pages/        # Home + section components
│   └── context/      # Scroll-trigger animation state
├── docs/
│   └── SETUP.md      # Detailed setup & deploy guide
├── netlify.toml      # Netlify SPA redirect
└── vite.config.js
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

---

## Documentation

- [docs/SETUP.md](./docs/SETUP.md) — local setup, deploy, troubleshooting

---

## Related links

- [Portfolio](https://yashpatidar.vercel.app)
- [Live demo](https://sns-website-nine.vercel.app/)
- [GitHub](https://github.com/yashdark01/sns-website)
