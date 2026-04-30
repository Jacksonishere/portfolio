# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server on port 3001
npm run build     # Production build
npm run preview   # Preview production build locally
```

There is no linter or test suite configured.

## Stack

- **React 18 + Vite** — JSX, no TypeScript in source files
- **Tailwind CSS** — utility-first styling; custom config in `tailwind.config.cjs`
- **Framer Motion** — all animations (scroll reveals, staggered entrances, tab transitions, carousels)
- **Locomotive Scroll** — smooth momentum scrolling via `react-locomotive-scroll`; the provider wraps the entire app in `App.jsx`
- **Vercel Analytics** — page-view tracking via `<Analytics />` in `App.jsx`
- Deployed on Vercel

## Architecture

```
src/
├── App.jsx              # Root — LocomotiveScrollProvider wraps all sections
├── main.jsx             # ReactDOM.createRoot entry point
├── index.css            # Global styles, Tailwind directives, @font-face declarations
├── scroll.css           # Locomotive Scroll base styles
└── components/
    ├── IntroSection.jsx  # Hero: animated greeting, floating contact icons, NavBar
    ├── NavBar.jsx        # Top nav with mobile hamburger menu
    ├── About.jsx         # Experience timeline with sticky image
    ├── ToolSection.jsx   # Tabbed skills display (Languages / Frameworks / Tools)
    └── MyWork.jsx        # Project cards with Framer Motion image carousel
```

All content (experience, projects, skills, contact links) is **hardcoded** in components — there is no CMS or data layer. To update portfolio content, edit the relevant component directly.

## Responsive Breakpoints (Tailwind)

Custom breakpoints defined in `tailwind.config.cjs`:

| Name | Min-width |
|------|-----------|
| sm   | 0px       |
| md   | 803px     |
| lg   | 1080px    |
| xl   | 1440px    |

## Custom Fonts

PP Neue-Montreal and Satoshi are self-hosted under `src/assets/fonts/` and declared via `@font-face` in `index.css`. Use `font-neue` and `font-satoshi` Tailwind classes to apply them.

## Locomotive Scroll + Framer Motion

Scroll-linked animations use `data-scroll` attributes for Locomotive and Framer Motion's `useInView` / `whileInView` for trigger-on-scroll reveals. Section anchor targets use `data-scroll-id` for in-page navigation from the navbar.
