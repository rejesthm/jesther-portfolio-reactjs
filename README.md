# Portfolio | Software Engineer

A modern, light-themed React portfolio website with professional SaaS-style landing page animations. Built with Vite, TailwindCSS, and Framer Motion.

## Features

- **Hero Section** – Floating UI elements, parallax effects, phone mockup
- **Stats** – Years of experience, projects, technologies, clients
- **Projects** – Grid of portfolio projects with lazy-loaded images
- **Tech Stack** – Animated technology cards (React, Flutter, Node.js, etc.)
- **Experience** – Timeline layout with animated reveal
- **Contact** – Form and social links
- **Responsive** – Mobile, tablet, and desktop
- **Accessibility** – Respects `prefers-reduced-motion` for users who prefer less animation

## Tech Stack

- React 19
- Vite 7
- TailwindCSS 4
- Framer Motion
- Lucide React
- React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FloatingElements.jsx
│   ├── Stats.jsx
│   ├── Projects.jsx
│   ├── TechStack.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- **Name & Role** – Edit `Hero.jsx` to update your name and tagline
- **Stats** – Update values in `Stats.jsx`
- **Projects** – Replace placeholder data in `Projects.jsx`
- **Experience** – Edit the `experiences` array in `Experience.jsx`
- **Contact** – Update email and social links in `Contact.jsx` and `Footer.jsx`
- **Colors** – Accent color is `#3B82F6`; adjust in Tailwind classes or `index.css`

## License

MIT
