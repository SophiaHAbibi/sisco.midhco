import { MENU, PRODUCTS, COMPLEXES, NEWS } from './site-data';

/** Direct links to corporate tools remain offsite. We never proxy internal services. */
const outgoingIds = new Set([
  'shareholder-portal','financials','customer-portal','srm',
  'careers','career-potential','midhco'
]);
const pageIds = new Set(['about','news','sustainability','contact']);
export function resolveHref(id: string, href: string): string {
  if (href.startsWith('#/')) return href.replace(/^#/, '');
  if (href.startsWith('/')) return href;
  if (pageIds.has(id)) return `/${id}/`;
  return outgoingIds.has(id) ? href : `/info/${encodeURIComponent(id)}/`;
}
export function isExternal(href: string): boolean { return /^https?:\/\//i.test(href); }
export const searchIndex = [
  ...MENU.flatMap(item => [
    { title:item.title, href:`/${item.id}/`, group:'بخش اصلی' },
    ...item.groups.flatMap(g => g.items.map(([title,id,url]) =>
      ({title, href:resolveHref(id,url),group:g.label})))
  ]),
  ...PRODUCTS.map(p => ({title:p.title,href:`/products/${p.id}/`,group:'محصولات'})),
  ...COMPLEXES.map(c => ({title:c.title,href:`/complexes/${c.id}/`,group:'مجتمع‌های تولیدی'}))
];
export function allStaticSlugs(): string[][] {
  const base = ['about','products','complexes','news','shareholders','customers','suppliers','contact','sustainability','directory'];
  return [
    ...base.map(x=>[x]),
    ...PRODUCTS.map(p=>['products',p.id]),
    ...COMPLEXES.map(c=>['complexes',c.id]),
    ...NEWS.map(n=>['news',n.id]),
    ...MENU.flatMap(m=>m.groups.flatMap(g=>g.items.map(([,id,url])=>({id,href:resolveHref(id,url)}))))
      .filter(x=>x.href.startsWith('/info/')).map(x=>['info',x.id]),
  ].filter((parts,idx,arr)=>arr.findIndex(x=>x.join('/')===parts.join('/'))===idx);
}
