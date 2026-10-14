# SISCO | Sirjan Iranian Steel Company – Next.js / React redesign

نسخه بازنویسی‌شده وب‌سایت فولاد سیرجان ایرانیان (SISCO)، زیرمجموعه هلدینگ میدکو.

## Technology

- **Next.js 16.4.0**, App Router, React 19.3, TypeScript (strict)
- Components written as TSX rather than HTML-string templates
- Shared corporate RTL CSS (preserved from the first visual redesign)
- Server-rendered/static generated content routes; only navigation and search are client components
- **Static export**: the output (`out/`) can be hosted on Vercel or a conventional static web server
- Photographs for the four products and homepage/news visuals come from the official sisco.midhco.com website. The corporate logo SVG is still a temporary concept and needs the approved brand asset.

> Tailwind is not included in this iteration. Reusing the already-designed CSS was intentional to minimize design regression. Sanity CMS is *recommended* but is **not yet integrated**; editorial content currently lives in `lib/site-data.ts`.

## Install / Develop

Use Node.js 20.9+ (22 LTS recommended) and npm:

```bash
npm install
npm run dev
```

Open http://localhost:3000 .

On company Windows computers that block `npm.ps1`, use `npm.cmd` from PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

## Build / Test

```bash
npm run test
npm run typecheck
npm run build
```

The build creates a static output in `out/`. Upload the contents of `out/` to the internet-edge hosting provided by the infrastructure team. **The public website must not connect to SRM, MIDRP or internal services.** Stakeholder portals are outbound hyperlinks only.

### Current verification status

- Tested the menu/content inventory and generated route coverage (9 top-level groups, 42 submenu entries, 41 generated subroutes plus homepage).
- Tested TSX **syntactic transpilation** and in-memory React-component rendering for the homepage and 41 routes.
- Independently typechecked `lib/site-data.ts` and `lib/routes.ts` using global TypeScript compiler.
- **Not yet verified**: actual Next.js production build, browser screenshots, TypeScript checking with installed React and Next types, CMS integration. The current container could not contact the npm registry (`EAI_AGAIN`), so no package installation was available. Run the three commands above in a normal networked Node environment or a Vercel preview build.

## App structure

```text
app/
  layout.tsx                Root Persian RTL layout & SEO metadata
  page.tsx                  Homepage
  [...slug]/page.tsx        SSG for products, complexes and other content
  not-found.tsx
  globals.css
components/
  Header.tsx                Stateful accessible menu, mobile drawer and search
  Footer.tsx
  BackToTop.tsx
  Home.tsx
  InteriorPages.tsx        Server components for inner pages
  Interior.tsx
  SmartLink.tsx             Next internal links / safe external links
  Icon.tsx
lib/
  site-data.ts              Content inventory; future CMS adapter source
  routes.ts                 Link resolver, search inventory and static paths
public/assets/            Illustrative vector placeholders
```

## Content policy and TODOs

- This is a **functional development preview**, not approved corporate production content.
- `lib/site-data.ts` preserves current menu names, products, complexes, corporate profile, stakeholder links. For pages without full approved text, the UI preserves the route and points to the existing official material instead of inventing facts.
- Replace the recreated logo vector with an approved logo in the same blue/red corporate palette.
- Replace conceptual plant graphics and any stock imagery with approved authentic SISCO photos.
- Verify official numbers, corporate addresses, supplier/customer portal destinations and PDF links.
- Editorial workflow: connect a separately hosted Sanity CMS or company-authorized CMS later; do not expose editor/admin routes on the public corporate site.
- The preview deliberately emits `noindex` in `app/layout.tsx`. Remove this setting **only after** the company approves the final content and the canonical domain is ready.
- Deploy through the company's infrastructure approval process; do not route internal systems through this public frontend.

## Deploy to Vercel

1. Create a **new** GitHub repository for this project (do not overwrite the existing Farab site).
2. Push this project to the repository.
3. Connect it to Vercel. Framework preset: `Next.js`, Build command: `npm run build`, Output: `out`, with automatic detection normally sufficient.
4. Check build logs, review the generated Preview URL, verify mobile navigation and content, then arrange a controlled production-domain deployment.

No secrets or environment variables are required for the current static version.

## Official media and product pages

- Home page now includes a three-slide editorial hero; product, news and complex imagery use the company's official image URLs.
- Run `npm run sync:media` to mirror verified official JPGs to `public/media` and generate `lib/media-generated.ts`. `npm run build` performs this automatically; inaccessible assets gracefully fall back to the original URL. No stock-photography URL is used in these sections.
- Product detail routes: `/products/concentrate/`, `/products/pellet/`, `/products/sponge/`, `/products/billet/`. The product profiles provide verified qualitative descriptions, chain-of-production context, usage and related products, with links to the original source page.
- Assays, steel grade, chemical composition, dimensions, and pricing have deliberately been omitted because approved product data sheets were not provided.
- The published site `sisco-midhco.vercel.app` remains a staging preview; check image-load/network panel from Iran and on mobile before domain switchover.
