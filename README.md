# Portfolio | Software Engineer

A modern, light-themed React portfolio website with professional SaaS-style landing page animations. Built with Vite, TailwindCSS, and Framer Motion.

## Features

- **Hero Section**: Large headline, tagline, CTA buttons, and floating UI elements with parallax
- **Stats Section**: Animated metric cards (Years Experience, Projects, Technologies, Clients)
- **Projects Section**: Grid of portfolio projects with images, tech stack, and links
- **Tech Stack Section**: Animated technology icons (React, Flutter, Node.js, Firebase, Docker, AWS, Python)
- **Experience Section**: Timeline layout with animated reveal
- **Contact Section**: Contact info and form with validation

## Tech Stack

- React 19
- Vite
- TailwindCSS
- Framer Motion
- react-icons

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

- Update your name, role, and tagline in `src/components/Hero.jsx`
- Replace placeholder project data in `src/components/Projects.jsx`
- Update experience entries in `src/components/Experience.jsx`
- Add your email and social links in `src/components/Contact.jsx` and `src/components/Footer.jsx`
