# Ridons website: source code

This is the full source of the Ridons landing page. It is plain HTML, CSS and JavaScript:
no build step, no frameworks, and nothing to install.

## Preview it

**Quickest:** double-click `index.html` to open it in your browser.

**Recommended (so everything works, including `business.json`):** run a small local server
from this folder, then open http://localhost:8000.

- Mac or Linux: `python3 -m http.server 8000`
- VS Code: install the **Live Server** extension, then right-click `index.html` → *Open with Live Server*.
  The page reloads every time you save.

## What's where

| File | What it controls |
|---|---|
| `index.html` | The landing page content and section order |
| `css/styles.css` | All styling. **Brand tokens** (colours, font, widths) are the CSS variables at the top in `:root` |
| `js/main.js` | Store buttons, mobile menu, FAQ "More questions", and the interactive price demo |
| `business.json` | Company details, store links and social links. Edit here, not in the HTML. Empty values stay hidden |
| `privacy.html`, `terms.html`, `cookies.html`, `refunds.html` | Policy pages (share `legal.css`) |
| `assets/` | Logo, icon and favicon as vector SVGs, and the motari photo (`motari.jpg`) |
| `404.html` | "Page not found" page for hosting |

## Page sections (in order, in `index.html`)

1. Header
2. Hero ("Agree the price. Ride. Build a record.")
3. How it works (five steps + interactive demo phone)
4. Safety
5. Mission ("Every trip builds a record. Every record opens a door.") with key numbers and the "one record, many doors" diagram
6. For motari (with the motari photo)
7. Become a Ridons motari
8. Partners ("Others sell rides. We build records.") with the five-phase plan and what we ask of partners
9. FAQ
10. Footer

Each section starts with an HTML comment such as `<!-- SAFETY -->`, so they're easy to find.

## Brand

- **Colours:** red `#D0202A`, dark red `#A9121B`, soft red `#FDEDEE`, text `#111827`, muted text `#5B6474`
- **Font:** Noto Sans (loaded from Google Fonts)
- **Accessibility:** all text meets WCAG AA contrast (4.5:1). Please keep it that way when changing colours.
  The page also respects "reduce motion" settings.

## Before going live

- Add the real store links, company legal name, RDB code, TIN and social links in `business.json`.
- Swap the store buttons for the official Apple and Google badges once the store links are live.
- Have the policy pages reviewed by a Rwandan lawyer.

## Publishing

Upload this whole folder to any static host (Netlify, Vercel, GitHub Pages, cPanel). No build is needed.
