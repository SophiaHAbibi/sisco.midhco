# SISCO public-website replacement — content migration status

Updated: 2026-10-14

This project is intended to **replace** the old public SISCO website. It is not a link directory to the old website. Public editorial navigation and product pages must stay local. The only intentional outbound links are independent systems (SRM, customer/sales, shareholder portal, Codal, recruitment, MIDHCO parent, employee applications).

## Implemented in the new Next.js app

- Local corporate introduction and registration information.
- Four individual product detail pages: concentrate, pellets, DRI/briquettes and steel billets; local product-to-product navigation, not legacy product links.
- Sirjan and Bardsir complex pages and distinct factory/facility details.
- Activity and capacity data (as published by the company), ethics, management listing, CEO message summary, organization chart overview, business mission and policy editorial pages.
- Local newsroom index and three editorial article pages based on the company's visible recent announcements.
- Internal route coverage for all visible public menu entries, including auctions/tenders/announcements categories; empty categories do not manufacture tenders.
- Shareholder/customer/supplier landing pages linking only to truly independent services.

## Pre-domain migration blockers — must be resolved with corporate approvals

1. **Certified source documents:** obtain original PDFs for shareholder capital report, rights-issue form, sustainability report, and their approved publication dates. Copy them into this site's managed asset library and replace unavailable-document notices.
2. **Governance:** reconfirm board/management names, titles and headshots against HR/corporate secretariat immediately before publication; existing website may lag appointments.
3. **Approved corporate policy:** acquire exact signed/approved wording and diagrams for vision, mission, strategy map, integrated management policy and organizational chart. The new site currently uses transparently labeled editorial overviews, not documents claimed to be official.
4. **Certificates:** obtain actual certificate images, identifiers and expiration dates. Do not fabricate certificates.
5. **News archive:** migrate older articles and attachments, preserving publication dates and content; current local newsroom is only the three most visible announcements.
6. **Media originals:** replace the legacy-host fallback for factory/product imagery with locally hosted high-resolution originals where available. The build attempts to mirror company photos, but image availability and quality need visual review.
7. **Multilingual:** English navigation is hidden until complete translated pages exist; no link should jump back to the legacy English site.
8. **CMS:** editorial content lives in TypeScript data for now. Set up a company-approved, secured CMS/editorial workflow and validate file uploads, publishing permissions and backups.
9. **Form/account features:** old-site member registration, comments and contact submissions were not silently cloned. Decide scope and implement safely with authentication and an authorized backend if required.
10. **Go-live QA:** manually test responsive layout, accessibility, menu navigation, SEO metadata, redirects of old URLs, PDF files, broken images, staging noindex requirements and production monitoring before DNS cutover.

Security boundary: public site must not connect directly to internal SRM/MIDRP/ERP applications; outbound links to independent applications are just hyperlinks.