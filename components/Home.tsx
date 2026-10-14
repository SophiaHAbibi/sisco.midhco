import Link from 'next/link';
import { SITE, PRODUCTS, COMPLEXES, NEWS, OUTBOUND } from '@/lib/site-data';
import SmartLink from './SmartLink';
import Icon from './Icon';
import HeroShowcase from './HeroShowcase';
import MediaPhoto from './MediaPhoto';
import type {ProductId} from '@/lib/product-details';

function SectionHead({kicker,title,description,action}:{kicker:string;title:string;description?:string;action?:{title:string;href:string}}){
  return <div className="section-head"><div><span className="eyebrow">{kicker}</span><h2 className="section-title">{title}</h2>{description?<p className="section-description">{description}</p>:null}</div>{action?<SmartLink href={action.href} className="action-link">{action.title} <Icon name="arrow" size={17}/></SmartLink>:null}</div>
}
export default function Home(){return <>
  <HeroShowcase/>
  <section className="metrics"><div className="container metric-grid">
    {[
      ['۱۳۸۸','سال تأسیس شرکت','آغاز یک مسیر صنعتی'],
      ['۰۲','مجتمع تولیدی اصلی','سیرجان و بردسیر'],
      ['۰۴','گروه محصول','از کنسانتره تا فولاد'],
      ['MIDHCO','عضو خانواده میدکو','زنجیره ارزش معدن و فولاد']
    ].map(([number,title,subtitle])=><div className="metric" key={title}><strong className="metric-num">{number}</strong><div><div className="metric-title">{title}</div><div className="metric-kicker">{subtitle}</div></div></div>)}
  </div></section>
  <section className="section chain-section" id="products"><div className="container">
    <SectionHead kicker="زنجیره ارزش" title="از سنگ آهن تا شمش فولادی" description="چهار حلقه به‌هم‌پیوسته از استخراج و فرآوری تا احیا و فولادسازی؛ محصولات اصلی فولاد سیرجان ایرانیان." action={{title:'مشاهده همه محصولات',href:'/products/'}}/>
    <div className="chain-grid">{PRODUCTS.map(p=><Link href={`/products/${p.id}/`} key={p.id} className="chain-card">
      <MediaPhoto image={p.id as ProductId} alt={`تصویرسازی مفهومی از ${p.title}`}/><span className="chain-number">{p.no} / 04</span><h3>{p.title}</h3><p>{p.desc}</p><span className="chain-en">{p.en}</span><span className="chain-more" aria-hidden="true"><Icon name="arrow"/></span>
    </Link>)}</div>
  </div></section>
  <section className="section" id="about"><div className="container about-grid"><div className="about-copy"><span className="eyebrow">درباره شرکت</span><h2 className="section-title">ریشه در معدن،<br/>نگاه به آینده</h2><p>{SITE.description}</p>
    <div className="about-facts">{[['شماره ثبت','۳۶۲۱۱۱'],['شناسه ملی','۱۰۱۰۴۰۸۸۲۲۵'],['دفاتر ستادی','تهران و کرمان'],['پایگاه‌های تولید','سیرجان و بردسیر']].map(([label,value])=><div className="fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
    <Link href="/about/" className="btn btn-primary">بیشتر درباره فولاد سیرجان <Icon name="arrow"/></Link>
  </div><div className="about-visual"><MediaPhoto image="hero" alt="تصویرسازی مفهومی از زنجیره معدن و فولاد"/><div className="about-stamp"><strong>۱۳۸۸</strong><span>سال تأسیس</span></div><div className="about-visual-label">صنعتی ریشه‌دار، فردایی روشن<span>FROM ORE TO STEEL</span></div></div></div></section>
  <section className="section complexes-section" id="complexes"><div className="container"><SectionHead kicker="ظرفیت‌های تولید" title="دو مجتمع، یک زنجیره یکپارچه" description="از واحدهای استخراج و فرآوری در سیرجان تا احیای مستقیم و فولادسازی در بردسیر." action={{title:'مشاهده مجتمع‌ها',href:'/complexes/'}}/>
    <div className="complex-grid">{COMPLEXES.map((c,i)=><Link href={`/complexes/${c.id}/`} className="complex-card" key={c.id}><MediaPhoto image={c.id==='sirjan'?'sirjan':'bardsir'} alt={`تصویر مرتبط با ${c.short}`}/><div className="complex-content"><span className="complex-index">0{i+1} / {c.en}</span><h3>{c.title}</h3><p>{c.subtitle}</p><div className="complex-footer"><span>{c.facilities.map(x=>x.title).join(' • ')}</span><span className="complex-arrow"><Icon name="arrow"/></span></div></div></Link>)}</div>
  </div></section>
  <section className="section"><div className="container"><SectionHead kicker="رسانه و اطلاع‌رسانی" title="تازه‌ترین رویدادهای شرکت" description="اخبار شرکت، پروژه‌ها و اطلاعیه‌های رسمی را دنبال کنید." action={{title:'آرشیو اخبار',href:'/news/'}}/>
    <div className="news-grid">{NEWS.map(n=><article className="news-card" key={n.id}><div className="news-img"><MediaPhoto image={`news${NEWS.indexOf(n)}` as 'news0'|'news1'|'news2'} alt={n.title}/><span className="news-pill">{n.kind}</span></div><div className="news-copy"><h3>{n.title}</h3><p>{n.desc}</p><SmartLink className="action-link" href={n.href}>مطالعه خبر <Icon name="arrow" size={17}/></SmartLink></div></article>)}</div>
  </div></section>
  <section className="portals-section"><div className="container"><SectionHead kicker="خدمات ذی‌نفعان" title="دسترسی سریع به خدمات"/><div className="portal-grid">{OUTBOUND.map(x=><SmartLink href={x.href} className="portal-card" key={x.href}>
    <span className="portal-icon"><Icon name={x.icon} size={22}/></span><h3>{x.title}</h3><p>{x.description}</p><span className="external-note"><Icon name="external" size={12}/> سامانه مستقل / لینک خارجی</span>
  </SmartLink>)}</div></div></section>
</>}
