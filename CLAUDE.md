# Working on this project

Static, single-page marketing site. Vanilla HTML + CSS + JS, no build step, no
dependencies, no framework. Read `README.md` first — it has the full token
table, section map, and the list of placeholders.

## Conventions to follow

- **No build tooling.** Do not add npm, a bundler, Tailwind, or a framework.
  If something needs JS, add it to `script.js` in the same plain-IIFE style.
- **Colors come from CSS custom properties only.** Never hardcode a hex value
  in a rule; use `var(--ink)`, `var(--accent)`, etc. Any new color must be
  added as a token in **both** `:root` and `[data-theme="dark"]`, or dark mode
  will break.
- **Two fonts.** `var(--serif)` (Cormorant Garamond) for headings, quotes, and
  the price; `var(--sans)` (Karla) for everything else. Don't introduce a third.
- **Responsive by intrinsic layout,** not breakpoints: grids use
  `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` and flex items wrap. There
  are only two media queries on purpose — the 767px nav breakpoint and the
  640px hero-button centering. Prefer solving layout without adding more.
- **Spacing** uses `clamp()` on section padding; match the existing scale
  rather than inventing values.
- **Accessibility:** keep the `aria-expanded` wiring on the burger, keep tap
  targets in the mobile menu at 48px, and keep body text at or above 15.5px.
- **Copy is the author's.** Body copy and reviews are verbatim from the Amazon
  listing. Don't rewrite marketing copy or review text without being asked.

## Gotchas

- The 768px breakpoint exists in both `styles.css` and `script.js`. Change both.
- The `$10.10` price appears twice in `index.html`.
- `.theme-toggle` markup is duplicated (desktop header + mobile menu); the
  script updates the icon in both via `querySelectorAll`.
- Theme is stored in `localStorage` as `ttf-theme` and applied as a
  `data-theme` attribute on `<html>`.
