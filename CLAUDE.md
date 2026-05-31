# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio site built with **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4**, statically exported and deployed to GitHub Pages at `https://shalithadeshan.github.io/portfolio-V3/`.

> History: this was migrated from a Create React App + CRACO + Tailwind v2/v3 setup (see git history on `main`/`new-update-2023`). The migration lives on the `migrate-nextjs` branch.

## Commands

- `npm run dev` — dev server at http://localhost:3000 (Turbopack). Served from the root (no base path) in dev.
- `npm run build` — production build + **static export** to `out/` (the project sets `output: 'export'`).
- `npm run lint` — ESLint (flat config, `eslint-config-next`). Pinned to ESLint 9; ESLint 10 breaks `eslint-config-next`'s config shim.
- `npm run deploy` — builds and publishes `out/` to the `gh-pages` branch (`gh-pages -d out -t true`; `-t` includes dotfiles so `.nojekyll` ships).

There is no test setup.

## Architecture

- **App Router, single page**: [app/page.tsx](app/page.tsx) composes all sections into one scrolling page; [app/layout.tsx](app/layout.tsx) is the root layout (fonts, icons, metadata). There are no other routes.
- **Section anchors + scroll nav**: each section is wrapped in `<section id="...">` (`home`, `about`, `experience`, `work`, `contact`). Navigation uses plain anchor links (`href="#about"`) — [components/Header.tsx](components/Header.tsx) (desktop) and [components/MobileTabs.tsx](components/MobileTabs.tsx) (mobile bottom bar). Smooth scrolling is native CSS (`scroll-behavior: smooth` + `scroll-padding-top` in [app/globals.css](app/globals.css)) — there is no scroll library. **When adding/renaming a section, keep the `id` in page.tsx and the `href` in both Header and MobileTabs in sync.**
- **Server vs client components**: most components are server components. Only [components/Home.tsx](components/Home.tsx) (typewriter effect) and [components/Experience.tsx](components/Experience.tsx) (custom responsive tabs) and [components/Footer.tsx](components/Footer.tsx) (fetches GitHub stars) are `"use client"`.
- **Responsive split**: desktop/mobile chrome is toggled with Tailwind visibility classes in page.tsx (`invisible md:visible` for Header/LeftSide/RightSide; `visible md:invisible` for the fixed-bottom MobileTabs).

## Static export & GitHub Pages (important constraints)

- [next.config.mjs](next.config.mjs): `output: 'export'`, `images.unoptimized: true` (no image server in a static export), and `basePath: '/portfolio-V3'` **in production only** (dev uses root). `NEXT_PUBLIC_BASE_PATH` is exposed for any raw asset URLs.
- `public/.nojekyll` must exist — GitHub Pages' Jekyll otherwise strips the `_next/` directory.
- Because of the base path, **use `next/image` with static imports and `next/link`** rather than hand-written `<img src="/...">` / `<a href="/...">`, so the base path is applied automatically. Raw absolute URLs will 404 in production.

## Styling (Tailwind v4)

- Tailwind v4 is configured **CSS-first** in [app/globals.css](app/globals.css) via `@import "tailwindcss"` + an `@theme { ... }` block — there is **no `tailwind.config.js`**. Custom tokens are declared as CSS variables: colors as `--color-*` (`--color-primary-color`, `--color-secondary-color`, `--color-light-color`, `--color-dark-color`, `--color-darkest-color`, `--color-primary-color-100`) and fonts as `--font-*`. Each automatically generates the matching utilities (`bg-primary-color`, `text-secondary-color`, `font-cursive`, etc.). Add new design tokens here, not in a JS config.
- **Fonts** are self-hosted via `next/font/google` in layout.tsx (Nunito, Space Mono, Shalimar); each exposes a CSS variable that the `@theme` `--font-*` tokens reference. Don't re-add a Google Fonts `<link>`.
- Icons are Line Awesome classes (`las`/`lar`/`lab la-*`), loaded from a CDN `<link>` in layout.tsx.
