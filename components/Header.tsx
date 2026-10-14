'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { MENU, SITE } from '@/lib/site-data';
import { resolveHref, searchIndex, isExternal } from '@/lib/routes';
import Icon from './Icon';
import SmartLink from './SmartLink';

function Brand() {
  return <Link href="/" className="brand" aria-label="فولاد سیرجان ایرانیان - صفحه اصلی">
    {/* SVG is a concept placeholder; replace it with the approved corporate logo. */}
    <img src="/assets/logo-symbol.svg" width={66} height={66} className="brand-logo" alt="نشان پیشنهادی فولاد سیرجان ایرانیان"/>
    <span><strong className="brand-title">فولاد سیرجان ایرانیان</strong><span className="brand-english">SIRJAN IRANIAN STEEL COMPANY</span></span>
  </Link>;
}
export { Brand };
export default function Header() {
  const [megaOpen,setMegaOpen] = useState<string|null>(null);
  const [mobileOpen,setMobileOpen] = useState(false);
  const [mobileExpanded,setMobileExpanded] = useState<string|null>(null);
  const [searchOpen,setSearchOpen] = useState(false);
  const [query,setQuery] = useState('');
  const results = useMemo(()=> {
    const q=query.trim();
    return q
      ? searchIndex.filter(x=>x.title.includes(q)||x.group.includes(q)).slice(0,12)
      : searchIndex.filter(x=>['محصولات','درباره ما','مجتمع‌های تولیدی','سهامداران','تماس با ما'].includes(x.title)).slice(0,8);
  },[query]);
  const close = ()=>{setMegaOpen(null);setMobileOpen(false);setMobileExpanded(null);setSearchOpen(false);setQuery('');};
  useEffect(()=>{
    if (!searchOpen&&!mobileOpen) return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{ document.body.style.overflow=previous; };
  },[searchOpen,mobileOpen]);
  useEffect(()=>{
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){setMegaOpen(null);setMobileOpen(false);setSearchOpen(false);}
    };
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[]);
  return <>
    <div className="topline"><div className="container topline-inner">
      <span className="topline-affiliation"><i/> عضوی از خانواده هلدینگ توسعه معادن و صنایع معدنی خاورمیانه (میدکو)</span>
      <span className="top-actions">
        <SmartLink href="https://siscomidhco.adilar.com/" className="top-career">فرصت‌های شغلی</SmartLink>
        <Link href="/shareholders/">امور سهام</Link>
        <Link href="/directory/">نقشه سایت</Link>
      </span>
    </div></div>
    <header className="nav-wrap"><div className="container nav-inner">
      <Brand/>
      <nav className="main-nav" aria-label="منوی اصلی">
        {MENU.map(item=><div key={item.id} className={`nav-item ${megaOpen===item.id?'open':''}`}>
          <button type="button" className="nav-trigger" aria-expanded={megaOpen===item.id}
            aria-controls={`nav-${item.id}`}
            onClick={()=>setMegaOpen(megaOpen===item.id?null:item.id)}>
            {item.title}<span className="chevron">⌄</span>
          </button>
          <div className="mega" id={`nav-${item.id}`}>
            <div className="mega-title"><Link href={`/${item.id}/`} onClick={close}>{item.title}</Link></div>
            <div className="mega-groups">{item.groups.map(group=><div key={group.label}>
              <div className="mega-group-title">{group.label}</div>
              {group.items.map(([title,id,url])=>{
                const href=resolveHref(id,url);
                return <span key={`${id}-${title}`} onClick={close}><SmartLink href={href} className={`mega-link ${isExternal(href)?'external':''}`}>{title}</SmartLink></span>;
              })}
            </div>)}</div>
            <div className="mega-footer">{item.groups.flatMap(g=>g.items).length} مسیر دسترسی • سامانه‌های مستقل در پنجره دیگری باز می‌شوند.</div>
          </div>
        </div>)}
      </nav>
      <div className="header-utility">
        <button type="button" className="icon-button" onClick={()=>setSearchOpen(true)} aria-label="جستجو در سایت"><Icon name="search"/></button>
        <Link href="/contact/" className="header-contact" onClick={close}>تماس با ما</Link>
        <button type="button" className="icon-button hamburger" aria-expanded={mobileOpen} onClick={()=>setMobileOpen(true)} aria-label="بازکردن فهرست"><Icon name="menu"/></button>
      </div>
    </div></header>
    {mobileOpen?<>
      <div className="mobile-backdrop" onClick={()=>setMobileOpen(false)} aria-hidden="true"/>
      <nav className="mobile-menu" role="dialog" aria-modal="true" aria-label="منوی موبایل">
        <div className="mobile-head"><span className="mobile-heading">فهرست دسترسی</span><button type="button" className="icon-button" aria-label="بستن" onClick={()=>setMobileOpen(false)}><Icon name="close"/></button></div>
        <Link href="/" className="mobile-top-link" onClick={close}>صفحه اصلی</Link>
        {MENU.map(item=><div key={item.id}>
          <div className="mobile-row"><Link href={`/${item.id}/`} className="mobile-top-link" onClick={close}>{item.title}</Link>
            <button type="button" className="icon-button" onClick={()=>setMobileExpanded(mobileExpanded===item.id?null:item.id)} aria-expanded={mobileExpanded===item.id} aria-label={`زیرمنوی ${item.title}`}><Icon name="chevron"/></button>
          </div>
          {mobileExpanded===item.id?<div className="mobile-subgroup">
            {item.groups.map(group=><div key={group.label}>
              <div className="mobile-group-label">{group.label}</div>
              {group.items.map(([title,id,url])=><span key={`${id}-${title}`} onClick={close}><SmartLink href={resolveHref(id,url)}>{title}</SmartLink></span>)}
            </div>)}
          </div>:null}
        </div>)}
      </nav>
    </>:null}
    {searchOpen?<div className="search-overlay" onMouseDown={(e)=>{if(e.target===e.currentTarget)setSearchOpen(false);}}>
      <section className="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div className="search-header"><h2 id="search-title">دنبال چه چیزی هستید؟</h2><button type="button" className="icon-button" aria-label="بستن جستجو" onClick={()=>setSearchOpen(false)}><Icon name="close"/></button></div>
        <div className="search-box"><Icon name="search"/><input aria-label="عبارت جستجو" type="search" autoFocus autoComplete="off" value={query} onChange={e=>setQuery(e.target.value)} placeholder="محصول، خبر، امور سهام، کارخانه..."/></div>
        <div className="search-results">{results.length?results.map((r,i)=><span key={`${r.href}-${i}`} onClick={close}><SmartLink href={r.href} className="search-result"><span>{r.title}</span><small>{r.group} {isExternal(r.href)?'↗':''}</small></SmartLink></span>):<div className="empty-state">نتیجه‌ای برای «{query}» پیدا نشد.</div>}</div>
      </section>
    </div>:null}
  </>;
}
