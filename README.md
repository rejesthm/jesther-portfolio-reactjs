# Portfolio - Software Engineer

A modern React portfolio website with professional landing page animations, custom cursor, and SaaS-style design.

## Tech Stack

- **React 19** with Vite
- **TailwindCSS 4** for styling
- **Framer Motion** for animations
- **React Icons** for icons

## Features

- Custom spring-physics cursor with hover scale and click ripple
- Hero section with floating UI elements and parallax effects
- Scroll-triggered section animations
- Responsive design (mobile, tablet, desktop)
- Accessibility: reduced motion support, aria-hidden on decorative elements
- Dark mode professional palette

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.jsx           # App entry point
├── App.jsx            # Root layout with CustomCursor, Navbar
├── index.css          # Global styles, Tailwind
├── components/
│   ├── CustomCursor.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FloatingElements.jsx
│   ├── Stats.jsx
│   ├── Projects.jsx
│   ├── TechStack.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── pages/
    └── Home.jsx
```

## Customization

- Update your name and content in `Hero.jsx`, `Footer.jsx`, and `Contact.jsx`
- Replace placeholder project data in `Projects.jsx`
- Update experience entries in `Experience.jsx`
- Modify theme colors in `src/index.css` (`@theme` block)
