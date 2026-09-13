# Design

> Auto-generated and maintained by frontend-god-mode.
> Source of truth for typography, color, motion, layout, and component tokens.
> Read this BEFORE touching the UI in any subsequent session.

## Aesthetic direction

Dark vCard portfolio: graphite panels, warm amber accents, compact software-engineer density, inspired by `codewithsadee/vcard-personal-portfolio` without copying its placeholder content.

## Dials

- DESIGN_VARIANCE: 6 / 10
- MOTION_INTENSITY: 4 / 10
- VISUAL_DENSITY: 6 / 10

## Type stack

- Display: Poppins, weights 300-600
- Body: Poppins
- Loaded via: Google Fonts import in `src/index.css`
- Banned in this project: Inter, Roboto, Arial, generic one-scroll SaaS hero styling

## Color tokens

```css
:root {
  --color-smoky: #111111;
  --color-eerie-1: #202022;
  --color-eerie-2: #1d1d1f;
  --color-onyx: #2b2b2d;
  --color-jet: #383838;
  --color-border: #3a3a3d;
  --color-accent: #ffd66b;
  --color-accent-2: #ffb85c;
  --color-light-gray: #d6d6d6;
  --color-muted: #a8a8ad;
}
```

Banned in this project:
- Purple-to-blue gradients
- Large decorative orbs or starfield-dominant backgrounds
- Reference-template placeholder content

## Motion

- Library: Framer Motion
- Use short opacity/transform transitions for tab changes and card reveals
- Respect `MotionConfig reducedMotion="user"`
- Banned: bounce, elastic, custom cursor, animating width/height

## Layout

- Desktop: two-column vCard shell, sticky profile sidebar, rounded main article card
- Mobile: stacked profile card plus horizontal tab navigation
- Profile image: use `/assets/images/profile/jesther-jordan-minor.jpg` inside the vCard avatar frame
- Reading width: cap prose at `max-w-[65ch]`
- Touch targets: 44px minimum for tabs, links, and form controls

## Component inventory

- `Home`: owns vCard shell and active tab state
- `Navbar`: compact tab navigation
- `Hero` + `Stats`: About panel
- `Projects` + `ProjectModal` + `ProjectImageCarousel`: Portfolio panel
- Portfolio filters: `All`, `Mobile`, `Website`, `Automation`
- Mobile projects use phone frames; website and automation projects use browser frames so full-page screenshots and workflow diagrams stay readable.
- Automation projects can include `roles`, displayed in the modal as Automation Roles badges.
- `TechStack`: Skills section inside Experiences
- `Experience`: Timeline section inside Experiences
- `Contact`: contact links and client-side form validation

## Project-specific bans

- Do not remove existing portfolio content, project copy, project images, tech tags, stats, experience entries, email, GitHub, or LinkedIn.
- Do not add the reference repo's Blog, Testimonials, Clients, Education, Birthday, Phone, or Location sections.
- Do not reintroduce the previous purple/indigo gradient theme.

## Brand voice

- Direct, technical, portfolio-focused.
- Avoid filler words such as elevate, unleash, next-gen, and game-changing.
- Keep section copy short and grounded in shipped software work.

## Accessibility floor

- WCAG AA contrast for body text
- Focus-visible rings on every interactive element
- Real labels for form fields
- Reduced motion respected by Framer Motion

## Last updated

2026-09-13 by Codex: created vCard redesign system for portfolio refresh.
2026-09-13 by Codex: upgraded Portfolio cards to premium mobile-device showcases.
2026-09-13 by Codex: replaced initials avatar with the real profile portrait.
2026-09-13 by Codex: restored complete Portfolio coverage by adding the missing HFG project and data coverage tests.
2026-09-13 by Codex: restored BallsApp to Portfolio with a designed screenshots-pending phone placeholder.
2026-09-13 by Codex: imported BallsApp screenshots/video and project details from the previous live Firebase portfolio.
2026-09-13 by Codex: simplified Portfolio cards by moving category, media count, and tech badges into the project modal.
2026-09-13 by Codex: enlarged desktop Portfolio phone mockups so device frames dominate the card preview area.
2026-09-13 by Codex: flattened Portfolio phone frames with slimmer bezels, lighter shadow, and a smaller speaker for a more modern device preview.
2026-09-13 by Codex: redesigned vCard navigation as an icon-led segmented rail with a sliding active pill, sticky mobile behavior, and 44px tab targets.
2026-09-13 by Codex: aligned article titles and tab navigation inside one shared header row.
2026-09-13 by Codex: changed Resume experience into a responsive two-column grid while preserving latest-to-oldest order.
2026-09-13 by Codex: revised Resume into two connected timeline lanes labeled Timeline and Earlier.
2026-09-13 by Codex: merged Skills and Resume into Experiences, with Timeline first and Skills second.
2026-09-13 by Codex: added website portfolio projects and simplified Portfolio filters to All, Mobile, and Website.
2026-09-13 by Codex: added Automation as a Portfolio filter with workflow project descriptions and modal role badges.
