/* Media source: publicly available photographs on the company's official website.
   These URLs are used as safe fallbacks if the build-time local mirroring cannot fetch a file. */
import { LOCAL_MEDIA } from './media-generated';
export const OFFICIAL_MEDIA = {
  hero: 'https://sisco.midhco.com/upload/pages/1553928151.jpg',
  sirjan: 'https://sisco.midhco.com/upload/pages/1553928151.jpg',
  bardsir: 'https://sisco.midhco.com/upload/upload/1736248219.jpg',
  concentrate: 'https://sisco.midhco.com/upload/thumb2/product/1550641240.jpg',
  pellet: 'https://sisco.midhco.com/upload/thumb2/product/1550641044.jpg',
  sponge: 'https://sisco.midhco.com/upload/thumb2/product/1550641197.jpg',
  billet: 'https://sisco.midhco.com/upload/thumb2/product/1550641137.jpg',
  news0: 'https://sisco.midhco.com/upload/thumb1/news/1783143179.jpg',
  news1: 'https://sisco.midhco.com/upload/thumb1/news/1782671204.jpg',
  news2: 'https://sisco.midhco.com/upload/thumb1/news/1782211604.jpg',
} as const;
export type MediaKey=keyof typeof OFFICIAL_MEDIA;
/** Web-optimized conceptual visuals, not photographs of SISCO facilities or products. */
export const CONCEPT_MEDIA: Partial<Record<MediaKey,string>> = {
  hero: '/assets/concept/hero.webp',
  concentrate: '/assets/concept/concentrate.webp',
  pellet: '/assets/concept/pellet.webp',
  sponge: '/assets/concept/sponge.webp',
  billet: '/assets/concept/billet.webp'
};
export const mediaSrc=(key:MediaKey):string=>CONCEPT_MEDIA[key]??LOCAL_MEDIA[key]??OFFICIAL_MEDIA[key];
