# Through the Fog — landing page

Static landing page for *Through the Fog: Your Companion for Rebuilding After
Betrayal, Infidelity, and the Separation Blindside* by K. D. Swartz
(Cedar North Educational Resources, Timmins, Ontario).

## Running it

No build step, no dependencies. Open `index.html`, or serve the folder:

```
python3 -m http.server 8000
```

Deployable as-is to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any
static host — upload the folder contents.

## Files

```
index.html    all markup, one page, five sections
styles.css    all styles; design tokens at the top as CSS custom properties
script.js     theme toggle + mobile menu (vanilla, ~50 lines)
assets/       book cover, Cedar North logo and banner
```

## Sections

`#top` hero · statement band · `#inside` five features · `#readers` reviews ·
`#buy` price + product details · `#author` bio · closing CTA · footer.

Nav and all in-page buttons are anchor links to those ids; smooth scrolling
comes from `html { scroll-behavior: smooth }` (disabled under
`prefers-reduced-motion`).

## Design system

Taken from the Cedar North brand materials (cream grounds, deep forest ink,
sage, warm copper) and the book cover.

| Token | Light | Dark |
| --- | --- | --- |
| `--bg` | `#F7F4EC` | `#10140F` |
| `--bg2` | `#EFEADD` | `#171D15` |
| `--surface` | `#FFFDF7` | `#1B221A` |
| `--ink` | `#1D271F` | `#F2EFE4` |
| `--ink2` | `#414D3D` | `#D6D9CC` |
| `--line` | `#DCD5C4` | `#2E3A2C` |
| `--accent` | `#8C6535` | `#D8AC76` |
| `--sage` | `#5C6D56` | `#A3B39B` |
| `--fog2` / `--fog3` | `#E6EAE4` / `#C8D4D1` | `#1A241D` / `#28352E` |

Type: **Cormorant Garamond** (headings, pull quotes, price) and **Karla**
(body, UI), loaded from Google Fonts. Two fonts only.

Dark mode is a `[data-theme="dark"]` block that re-declares the same tokens, so
nothing else in the CSS needs a dark variant. Theme choice persists in
`localStorage` under `ttf-theme`; light is the default.

## Behaviour notes

- **Burger menu** below 768px. The breakpoint lives in two places that must
  stay in sync: the `@media (max-width: 767px)` block in `styles.css` and the
  `window.innerWidth >= 768` check in `script.js`.
- **Hero buttons** are equal-width (`flex: 1 1 210px; max-width: 268px`), sit
  side-by-side while they fit, and centre once they stack under 640px.
- **Responsive layout** is intrinsic — `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`
  grids, no per-breakpoint layout rules.

## Content provenance

Body copy, the five feature bullets, and both reviews are verbatim from the
Amazon.ca listing (ASIN B0FMHNW2H8) and its customer reviews. Product details
are from the same listing. Price `$10.10 CAD` is hardcoded in two places
(hero button and the buy card) — update both.

## Placeholders to replace

- **Author photo**: `.photo-placeholder` in the author section is a striped
  stand-in. Swap it for a real `<img>`.
- **Author bio**: written from public information (Ontario educator, Cedar
  North, Timmins) plus the book's premise. Have K. D. Swartz approve or
  replace it.
- The footer crisis note is generic; add real local resources if wanted.

## Links used

- Amazon.ca: https://www.amazon.ca/dp/B0FMHNW2H8
- Etsy shop: https://www.etsy.com/shop/CedarNorthDesignCo
- Etsy printable journal: https://www.etsy.com/listing/4346515789/through-the-fog-divorce-and-betrayal
- Teachers Pay Teachers: https://www.teacherspayteachers.com/store/cedar-north-educational-resources
