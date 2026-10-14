import type { ReactNode } from 'react';
const paths: Record<string, ReactNode> = {
  arrow: <path d="M18 12H6m6-6-6 6 6 6"/>,
  arrowUp: <path d="M12 19V5m-6 6 6-6 6 6"/>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  close: <path d="M18 6 6 18M6 6l12 12"/>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/></>,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.1 10a16 16 0 0 0 6.9 6.9l1.5-1.9a2 2 0 0 1 1.8-.7l3 .5a2 2 0 0 1 1.7 2z"/>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></>,
  factory: <><path d="M3 21V9l6 4V9l6 4V6h6v15H3Z"/><path d="M3 21h18"/></>,
};
export default function Icon({name,size=19}:{name:string;size?:number}) {
  return <span className="icon" aria-hidden="true" style={{width:size,height:size}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.arrow}</svg></span>;
}
