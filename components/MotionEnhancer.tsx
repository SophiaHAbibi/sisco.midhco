'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

/** Progressive enhancement: content stays visible with JS disabled and in reduced-motion mode. */
export default function MotionEnhancer(){
  const pathname=usePathname();
  useEffect(()=>{
    const header=document.querySelector('.nav-wrap');
    const onScroll=()=>header?.classList.toggle('is-scrolled',window.scrollY>24);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});

    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selectors='.section-head,.metric,.product-explorer,.about-copy,.about-visual,.complex-card,.news-card,.portal-card,.detail-content,.product-feature,.product-specs-section,.product-process-section,.product-applications';
    const elements=Array.from(document.querySelectorAll<HTMLElement>(selectors));
    let observer:IntersectionObserver|null=null;
    if(!reduce&&typeof IntersectionObserver!=='undefined'){
      elements.forEach(el=>el.classList.add('reveal-target'));
      observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add('is-inview');
            observer?.unobserve(entry.target);
          }
        });
      },{threshold:0.08,rootMargin:'0px 0px -32px 0px'});
      elements.forEach(el=>observer?.observe(el));
      document.documentElement.classList.add('motion-on');
    }
    return ()=>{
      window.removeEventListener('scroll',onScroll);
      observer?.disconnect();
      elements.forEach(el=>el.classList.remove('reveal-target','is-inview'));
      document.documentElement.classList.remove('motion-on');
    };
  },[pathname]);
  return null;
}
