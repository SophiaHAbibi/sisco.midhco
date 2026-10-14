# Image usage and provenance

The five images in `public/assets/concept/` are AI-generated **conceptual illustrations** created for the redesign. They are **not photographs of SISCO's actual plants, equipment, or certified product batches**.

| Filename | Intended placement |
|---|---|
| `hero.webp` | Homepage main hero and company intro visual |
| `concentrate.webp` | Iron ore concentrate product page/card |
| `pellet.webp` | Pellet product page/card and hero slide |
| `sponge.webp` | Sponge iron and briquette product page/card |
| `billet.webp` | Steel billet product page/card and hero slide |

All five assets are optimized WebP, 1672×941px, and are checked into the repository to avoid a runtime dependency on an old domain. The UI keeps images uncluttered without an on-image label; accessibility descriptions use neutral graphical-image wording. Asset provenance is documented here for editorial review.

For the final official launch, replace these conceptual illustrations with **approved high-resolution authentic photos** supplied by the company, especially in descriptions of real SISCO facilities. Never claim AI artwork is documentary photography.

Official site photos (for other images) are listed in `lib/media.ts`. The build-time mirroring script may download those separately when available.
