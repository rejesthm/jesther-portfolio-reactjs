# Portfolio Website Prompt — Video-Inspired SaaS Animation Style

> **Note:** The reference video (`Landing-Page-Animation-pinterest-video-downloader.mp4`) could not be analyzed directly. This prompt is based on common SaaS landing page animation patterns from Pinterest, Aceternity UI, and 2024–2026 design trends. If your video shows different behaviors, add or adjust the sections below.

---

## Project Overview

Create a **light-themed** React portfolio website with **professional landing page animations** similar to modern SaaS product pages (e.g., Managie, Crayo AI, Aceternity UI hero parallax). The design should feel premium, minimal, and suitable for a **software engineer portfolio**.

---

## Tech Stack

- **React** (Vite preferred)
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- Responsive design (mobile, tablet, desktop)
- Clean modular component structure

---

## Project Structure

```
/src
  /components
    Navbar.jsx
    Hero.jsx
    FloatingElements.jsx
    Stats.jsx
    Projects.jsx
    TechStack.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
  /pages
    Home.jsx
  /assets
  /styles
```

---

## Design Style (Light Theme)

- **Minimal and modern**
- **Large bold typography** (headlines 5xl–7xl)
- **Light palette**: Off-white (#FAFAFA), cream gradients, soft shadows
- **Text**: Dark charcoal (#1A1A1A), muted gray for secondary
- **Accent**: Single accent (e.g., blue #3B82F6 or teal #0D9488) for CTAs
- **Smooth gradients** (subtle, not overwhelming)
- **Floating cards and icons** with depth
- **Phone or UI mockup** in hero section
- **Subtle shadows** (shadow-sm, shadow-md, shadow-xl for floating elements)
- **Smooth scroll animations**

---

## Hero Section (Primary Focus)

Replicate the behavior of modern SaaS landing pages:

### Left Side

- **Large headline** introducing the developer
- **Short tagline**
- **Call-to-action buttons**:
  - "View Projects" (primary)
  - "Contact Me" (secondary outline)

### Right Side

- **Floating UI elements** that:
  - **Float slowly** in a continuous loop (vertical bob: `y: [0, -15, 0]` over 3–5s)
  - **Parallax on scroll**: Elements move at different speeds based on scroll position (`useScroll` + `useTransform`)
  - **Optional: Mouse parallax** — 3D-like depth, elements respond to cursor position
  - **Rotation, translation, opacity** tied to scroll (Aceternity UI Hero Parallax style)
- **Animated cards or mockups** — product cards, code snippets, tech icons
- **Phone or UI mockup** — centered frame with gradient border, screenshot placeholder inside
- **Staggered entrance** — elements appear one after another with delay

### Animations to Include

| Animation | Implementation |
|-----------|----------------|
| **Floating loop** | `animate` with `y`, `rotate`, `repeat: Infinity`, `duration` 3–5s |
| **Parallax scroll** | `useScroll` + `useTransform` mapping `scrollYProgress` to `y`, `opacity`, `rotate` |
| **Mouse parallax** | `useMotionValue` + `useSpring` for cursor-based x/y offset |
| **Fade-in sections** | `whileInView` with `initial`/`animate` variants |
| **Smooth entrance** | Staggered `delayChildren` for hero content |
| **Hover** | `whileHover` with `scale(1.02)`, `y: -2` |
| **Staggered reveal** | `staggerChildren` in parent `variants` |

---

## Portfolio Content Sections

### Hero

- Name
- Role: Software Engineer
- Short description
- CTA buttons

### Stats Section

Display metrics:

- Years Experience
- Projects Built
- Technologies Used
- Clients / Users

### Projects Section

Grid of portfolio projects:

- Image preview
- Project description
- Tech stack
- GitHub link
- Live demo link

### Tech Stack Section

Animated cards/icons for:

- React, Flutter, Node.js, Firebase, Docker, AWS, Python

### Experience Section

Timeline layout with animated reveal

### Contact Section

- Email
- GitHub
- LinkedIn
- Contact form

---

## Animation Requirements (Framer Motion)

1. **Floating animation loop** — Continuous vertical/rotation motion on hero elements
2. **Staggered reveal** — Parent `variants` with `staggerChildren` and `delayChildren`
3. **Scroll-triggered** — `whileInView` with `viewport={{ once: true }}` for sections
4. **Hover interactions** — `whileHover` on buttons, cards, links
5. **Parallax** — `useScroll` + `useTransform` for scroll-linked motion
6. **Smooth page transitions** — Optional: AnimatePresence for route changes

---

## Performance

- Lazy load images (`loading="lazy"`)
- Optimized animations (prefer `transform` and `opacity`)
- Responsive for mobile, tablet, desktop
- `prefers-reduced-motion: media` — reduce or disable animations when user prefers

---

## Output

- Full React project structure
- Clean reusable components
- Framer Motion animations implemented
- Tailwind styling
- Sample portfolio content placeholders
- Instructions to run locally (`npm install && npm run dev`)

---

## If Your Video Shows Different Behaviors

Add or adjust these sections with specifics:

- **Exact floating motion**: e.g., "Cards move in a figure-8 pattern" or "Elements rotate 360° on hover"
- **Background effects**: e.g., "Animated gradient mesh", "Wavy background", "Grid pattern"
- **Layout**: e.g., "Bento grid", "Single centered mockup", "Multiple overlapping cards"
- **Timing**: e.g., "Very slow (8s duration)", "Fast (1s) stagger"
- **Color palette**: e.g., "Purple accents", "Gradient text"
