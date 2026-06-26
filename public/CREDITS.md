# Media credits

**Elixir — The Metropolitan Grand Hotel** is a fictional brand built as an editorial
demo for Summit Sites.

## Video

The four films are processed from raw clips in `media-src/` by `npm run prepare-media`
(`scripts/prepare-media.mjs`), which transcodes each to a web-light 720px H.264 loop and
extracts a poster frame. The raw clips are portrait (1080×1920) stock footage supplied for
this demo.

| Output | From | Used as |
|--------|------|---------|
| `videos/hero.mp4` + `-poster.jpg` | `media-src/homepage_vid.mp4` | Cover plate (Masthead) |
| `videos/clip-1.mp4` + `-poster.jpg` | `media-src/14776806_…mp4` | Dining — Vermillion |
| `videos/clip-2.mp4` + `-poster.jpg` | `media-src/14776929_…mp4` | The Bar — Elixir |
| `videos/clip-3.mp4` + `-poster.jpg` | `media-src/14776940_…mp4` | The City |

## Stills

The figure images are **license-free stock photos from Pexels** ([Pexels License](https://www.pexels.com/license/):
free for commercial use, no attribution required). They are fetched at fixed crops and paths,
so any can be swapped in place. `npm run prepare-media` only generates an Ink & Amber placeholder
fill for a path that is **missing**, so it never clobbers these.

| Path | Aspect | Subject | Source (Pexels) |
|------|--------|---------|-----------------|
| `images/hotel-lobby.jpg` | 16:10 | Lobby — vintage grand staircase | [photo 34120528](https://www.pexels.com/photo/elegant-vintage-interior-of-istanbul-hotel-lobby-34120528/) |
| `images/room-atelier.jpg` | 4:3 | The Atelier King — warm room | [photo 34672504](https://www.pexels.com/photo/luxury-hotel-room-with-modern-interior-design-34672504/) |
| `images/room-meridian.jpg` | 4:3 | The Meridian Suite — seating + window | [photo 8082235](https://www.pexels.com/photo/furniture-in-hotel-room-8082235/) |
| `images/room-apothecary.jpg` | 4:3 | The Apothecary Suite — ornate vintage | [photo 18285946](https://www.pexels.com/photo/decorated-interior-of-hotel-room-18285946/) |
| `images/room-tower.jpg` | 4:3 | The Tower Loft — skyline at dusk | [photo 20021123](https://www.pexels.com/photo/skyscraper-behind-window-of-hotel-bedroom-20021123/) |

### Swapping sourcing later
- **AI-generated** via the Higgsfield MCP (`generate_image`) — the signature approach (needs credits).
- **Other license-free stock** from Unsplash / Coverr / Mixkit.

| File | Source | License |
|------|--------|---------|
| `images/*.jpg` | Pexels (IDs above) | Pexels License — free, commercial, no attribution required |
| _(raw video clips)_ | supplied for demo | confirm before publishing |
