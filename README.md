# Elixir — The Metropolitan Grand Hotel

An **editorial grid-magazine** demo site for [Summit Sites](https://github.com/summitsites-agency).
A fictional metropolitan grand hotel, built to showcase design range.

- **Stack:** Vite 6 + React 19, design-token CSS (no framework), [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll, Vitest.
- **Look:** *Ink & Amber* — Playfair Display + Archivo + JetBrains Mono on a 12-column magazine
  grid: oversized department titles, mono running-head/folios, drop-caps, pull-quotes that break
  the grid, captioned media plates, and a dark "The Bar" spread for contrast.

## Develop

```bash
npm install
npm run dev
```

The site ships with everything it needs already committed (compressed clips in `public/videos`,
stills in `public/images`), so `npm run dev` works straight from a clone.

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm test` | Run the Vitest suite |
| `npm run prepare-media` | (Re)generate web videos + posters from `media-src/` and any **missing** placeholder stills |

## Media

- **Video** — compressed 720p H.264 loops + posters in `public/videos/`. Raw 4K/portrait source
  clips live in `media-src/` (gitignored); `npm run prepare-media` regenerates the web copies.
- **Stills** — license-free Pexels photos in `public/images/`.

See [`public/CREDITS.md`](public/CREDITS.md) for sources and licenses.

---

A fictional brand, set in type for demonstration.
