'use client';
import {useState} from 'react';
import Link from 'next/link';
import Icon from './Icon';
import MediaPhoto from './MediaPhoto';
const slides=[
  {image:'hero' as const,kicker:'فولاد سیرجان ایرانیان  |  گروه میدکو',title:'از قلب زمین',emphasis:'تا آینده‌ای فولادی',desc:'زنجیره یکپارچه معدن تا شمش فولادی در مجتمع‌های سیرجان و بردسیر.',href:'/about/',button:'درباره شرکت'},
  {image:'pellet' as const,kicker:'مجتمع سیرجان  |  فرآوری و گندله‌سازی',title:'ارزش‌آفرینی',emphasis:'از سنگ‌آهن',desc:'کنسانتره و گندله سنگ‌آهن؛ حلقه‌های آغازین زنجیره تولید فولاد.',href:'/complexes/sirjan/',button:'مجتمع سیرجان'},
  {image:'billet' as const,kicker:'مجتمع بردسیر  |  احیا و فولادسازی',title:'تداوم تولید',emphasis:'تا شمش فولادی',desc:'اتصال فرآیند احیای مستقیم و فولادسازی در امتداد زنجیره ارزش شرکت.',href:'/complexes/bardsir/',button:'مجتمع بردسیر'}
];
export default function HeroShowcase(){
 const [active,setActive]=useState(0);
 const slide=slides[active];
 const go=(step:number)=>setActive(index=>(index+step+slides.length)%slides.length);
 return <section className="hero hero-slider" aria-label="معرفی فعالیت‌های شرکت">
   <div className="hero-slide-background" key={slide.image}><MediaPhoto image={slide.image} alt={active===0?'تصویر منتشرشده در وب‌سایت رسمی فولاد سیرجان ایرانیان':active===1?'تصویر محصول گندله سنگ‌آهن':'تصویر محصول شمش فولادی' } priority={active===0}/></div>
   <div className="container hero-grid"><div className="hero-copy" key={active}>
     <span className="hero-overline">{slide.kicker}</span>
     <h1>{slide.title}<br/><em>{slide.emphasis}</em></h1>
     <p>{slide.desc}</p>
     <div className="hero-actions"><Link href={slide.href} className="btn btn-primary">{slide.button}<Icon name="arrow"/></Link><Link href="/products/" className="btn btn-outline">مشاهده محصولات <Icon name="factory"/></Link></div>
   </div><span className="hero-watermark" aria-hidden="true">SISCO</span><span className="hero-bottom"><span className="stripe"/> SIRJAN IRANIAN STEEL COMPANY / 2009</span>
   <div className="hero-slider-controls" aria-label="کنترل اسلایدر">
     <button type="button" onClick={()=>go(-1)} aria-label="اسلاید قبلی">←</button>
     <span className="hero-slide-index" dir="ltr">0{active+1} / 0{slides.length}</span>
     <button type="button" onClick={()=>go(1)} aria-label="اسلاید بعدی">→</button>
     <div className="hero-slider-dots">{slides.map((s,i)=><button type="button" key={s.image} aria-label={`نمایش اسلاید ${i+1}`} aria-current={i===active?'true':undefined} onClick={()=>setActive(i)}/>)}</div>
   </div></div>
   <div className="vertical-tag">INTEGRATED STEEL VALUE CHAIN</div>
 </section>;
}
