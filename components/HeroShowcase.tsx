'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import Icon from './Icon';
import MediaPhoto from './MediaPhoto';

const ROTATE_MS=7200;
const slides=[
  {image:'hero' as const,kicker:'فولاد سیرجان ایرانیان  /  گروه میدکو',title:'از قلب زمین',emphasis:'تا آینده‌ای فولادی',desc:'زنجیره یکپارچه معدن تا شمش فولادی در مجتمع‌های سیرجان و بردسیر.',href:'/about/',button:'درباره شرکت',preview:'یک زنجیره، یک چشم‌انداز'},
  {image:'pellet' as const,kicker:'مجتمع سیرجان  /  فرآوری و گندله‌سازی',title:'ارزش‌آفرینی',emphasis:'از سنگ‌آهن',desc:'کنسانتره و گندله سنگ‌آهن؛ حلقه‌های آغازین زنجیره تولید فولاد.',href:'/complexes/sirjan/',button:'مجتمع سیرجان',preview:'از معدن تا گندله'},
  {image:'billet' as const,kicker:'مجتمع بردسیر  /  احیا و فولادسازی',title:'تداوم تولید',emphasis:'تا شمش فولادی',desc:'اتصال فرآیند احیای مستقیم و فولادسازی در امتداد زنجیره ارزش شرکت.',href:'/complexes/bardsir/',button:'مجتمع بردسیر',preview:'از احیا تا فولاد'}
];
export default function HeroShowcase(){
  const [active,setActive]=useState(0);
  const [hovered,setHovered]=useState(false);
  const [manuallyPaused,setManuallyPaused]=useState(false);
  const [hidden,setHidden]=useState(false);
  const [reduceMotion,setReduceMotion]=useState(false);
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion=()=>setReduceMotion(media.matches);
    const updateVisibility=()=>setHidden(document.hidden);
    updateMotion();updateVisibility();
    media.addEventListener('change',updateMotion);
    document.addEventListener('visibilitychange',updateVisibility);
    return ()=>{media.removeEventListener('change',updateMotion);document.removeEventListener('visibilitychange',updateVisibility);};
  },[]);
  const paused=hovered||hidden||manuallyPaused||reduceMotion;
  useEffect(()=>{
    if(paused)return;
    const timer=window.setInterval(()=>setActive(prev=>(prev+1)%slides.length),ROTATE_MS);
    return ()=>window.clearInterval(timer);
  },[active,paused]);
  const go=(step:number)=>setActive(index=>(index+step+slides.length)%slides.length);
  const slide=slides[active];
  return <section className="hero hero-slider hero-editorial" aria-label="معرفی فعالیت‌های شرکت"
    onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
    onFocusCapture={()=>setHovered(true)}
    onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setHovered(false);}}>
    <div className="hero-slide-background" key={slide.image}>
      <MediaPhoto image={slide.image} alt={active===0?'طرح گرافیکی مجتمع معدن و فولاد':active===1?'طرح گرافیکی گندله سنگ‌آهن':'طرح گرافیکی شمش فولادی'} priority={active===0}/>
    </div>
    <div className="hero-shape" aria-hidden="true"/>
    <div className="container hero-grid"><div className="hero-copy" key={active}>
      <span className="hero-overline"><span className="hero-live-dot"/> {slide.kicker}</span>
      <h1>{slide.title}<br/><em>{slide.emphasis}</em></h1>
      <p>{slide.desc}</p>
      <div className="hero-actions"><Link href={slide.href} className="btn btn-primary">{slide.button}<Icon name="arrow"/></Link><Link href="/products/" className="btn btn-outline">مشاهده محصولات <Icon name="factory"/></Link></div>
    </div>
    <span className="hero-watermark" aria-hidden="true">SISCO</span>
    <span className="hero-bottom"><span className="stripe"/> SIRJAN IRANIAN STEEL COMPANY / 2009</span>
    <div className="hero-slider-controls" aria-label="کنترل اسلایدر">
      <button type="button" onClick={()=>go(-1)} aria-label="اسلاید قبلی">←</button>
      <span className="hero-slide-index" dir="ltr">0{active+1} / 0{slides.length}</span>
      <button type="button" onClick={()=>go(1)} aria-label="اسلاید بعدی">→</button>
      <button type="button" className="hero-pause-button" onClick={()=>setManuallyPaused(value=>!value)} aria-label={manuallyPaused?'پخش خودکار اسلایدر':'توقف پخش خودکار اسلایدر'} aria-pressed={manuallyPaused}>{manuallyPaused?'▶':'Ⅱ'}</button>
    </div>
    <div className="hero-slide-tabs" aria-label="انتخاب اسلاید">
      {slides.map((s,i)=><button className={`hero-slide-tab ${i===active?'is-active':''}`} type="button" key={s.image} aria-label={`اسلاید ${i+1}: ${s.preview}`} aria-pressed={i===active} onClick={()=>setActive(i)}>
        <span className="hero-tab-meta" dir="ltr">0{i+1} <span>—</span> 03</span><strong>{s.preview}</strong>
        <span className="hero-tab-track"><span className="hero-tab-progress" key={i===active?`playing-${active}`:'idle'} style={{animationPlayState:paused?'paused':'running'}}/></span>
      </button>)}
    </div>
    </div>
    <div className="vertical-tag">INTEGRATED STEEL VALUE CHAIN</div>
  </section>;
}
