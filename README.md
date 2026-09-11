# Portfolio | Software Engineer

A dark vCard-style React portfolio with a sticky profile sidebar, tabbed content panels, and compact portfolio sections. Built with Vite, TailwindCSS, Framer Motion, and Vitest.

## Features

- **Profile Sidebar**: Name, title, contact links, social links, and compact stats
- **Tabbed Shell**: About, Resume, Portfolio, and Contact panels
- **About Panel**: Intro copy, CTA buttons, work cues, and full stats
- **Resume Panel**: Experience timeline and tech stack
- **Portfolio Panel**: Project cards with images, tech tags, GitHub links, and live demo links
- **Contact Panel**: Contact links and a validated contact form

## Tech Stack

- React 19
- Vite
- TailwindCSS
- Framer Motion
- react-icons
- Vitest
- Testing Library

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Test

```bash
npm test
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── VCardPortfolio.jsx
├── App.test.jsx
├── setupTests.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Update your name, role, tagline, stats, project data, tech stack, experience entries, and contact links in `src/components/VCardPortfolio.jsx`.
- Keep design-token changes aligned with `DESIGN.md`.
