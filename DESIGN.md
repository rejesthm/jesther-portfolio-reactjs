# Design

> Auto-generated and maintained by frontend-god-mode.
> Source of truth for typography, color, motion, layout, and component tokens.
> Read this BEFORE touching the UI in any subsequent session.

## Aesthetic direction

Dark vCard portfolio — compact personal operating card, warm amber accents, glossy onyx panels, and quiet motion.

## Dials

- DESIGN_VARIANCE: 8 / 10
- MOTION_INTENSITY: 6 / 10
- VISUAL_DENSITY: 4 / 10

## Type stack

- Display: Poppins
- Body: Poppins
- Mono: browser monospace for metric numerals only
- Loaded via: Google Fonts import in `src/index.css`
- Banned in this project: Inter, Roboto, Arial, system-ui as primary UI choices.

## Color tokens

```css
:root {
  --page-bg: oklch(0.13 0.008 82);
  --surface: oklch(0.18 0.006 82);
  --surface-soft: oklch(0.21 0.006 82);
  --surface-raised: oklch(0.24 0.008 82);
  --text-strong: oklch(0.96 0.006 82);
  --text: oklch(0.79 0.01 82);
  --text-muted: oklch(0.62 0.01 82);
  --border: oklch(0.31 0.006 82);
  --accent: oklch(0.78 0.14 82);
}
```

Banned in this project:
- Pure black and pure white as page tokens.
- Purple-to-blue gradients.
- More than one dominant accent.

## Motion

- Default panel spring: `{ type: "spring", stiffness: 100, damping: 22 }`
- Animate only opacity and transform.
- Respect `prefers-reduced-motion` through Framer Motion and CSS.
- Banned: bounce, elastic easing, width/height animation.

## Layout

- Main shell: `max-w-[1200px]`, profile sidebar plus active panel on desktop.
- Sidebar: sticky on desktop, collapsible contact details on mobile.
- Navigation: semantic tablist with one active panel at a time.
- Cards: single-depth vCard panels, 20px outer radius, 16px internal cards.
- Mobile: one-column flow with profile card, tab bar, active panel.

## Component inventory

- Custom: `VCardPortfolio`, `ProfileSidebar`, `TabNavigation`, `AboutPanel`, `ResumePanel`, `PortfolioPanel`, `ContactPanel`.
- Icons: `react-icons` only.
- Forms: native labels, validation text, `aria-invalid`, and `aria-describedby`.

## Project-specific bans

- Do not replace existing portfolio content without explicit direction.
- No emoji-only floating decorations.
- No one-scroll landing-page rebuild unless the design direction changes.
- No nested card depth beyond one level.

## Brand voice

- Preserve the current content text exactly until the owner supplies real personal details.
- UI labels should stay direct and short.

## Accessibility floor

- WCAG AA contrast for body copy.
- Focus-visible rings on all interactive elements.
- Touch targets at least 44px on mobile.
- Sequential heading structure inside each active panel.

## Last updated

2026-09-11 by vCard portfolio redesign.
