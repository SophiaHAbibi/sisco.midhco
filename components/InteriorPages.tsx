import {CorporateInfoPage,CorporateComplexesPage} from './CorporateContent';
import {CorporateNewsPage} from './CorporateNews';
import Link from 'next/link';
import {SITE,PRODUCTS,COMPLEXES,NEWS,MENU,EMPLOYEE} from '@/lib/site-data';
import {resolveHref} from '@/lib/routes';
import SmartLink from './SmartLink';
import Icon from './Icon';
import MediaPhoto from './MediaPhoto';
import ProductDetail from './ProductDetail';
import type {ProductId} from '@/lib/product-details';
import {ActionLink,Detail,PageHero,Source} from './Interior';

const infoLinks=[{title:'محصولات',href:'/products/'},{title:'مجتمع‌های تولیدی',href:'/complexes/'},{title:'ماموریت و راهبرد',href:'/info/mission/'},{title:'هیئت‌مدیره',href:'/info/board/'},{title:'ارتباط با ما',href:'/contact/'}];

export function AboutPage(){return <><PageHero kicker="هویت و تاریخچه" title="درباره فولاد سیرجان ایرانیان" desc="عضوی از گروه توسعه معادن و صنایع معدنی خاورمیانه"/><Detail sideLinks={infoLinks}>
  <h2>معرفی شرکت</h2><p>{SITE.description}</p>
  <div className="info-panel"><h2>معدن، فرآوری و فولاد؛ یک زنجیره ارزش</h2><p>فعالیت‌های تولیدی شرکت در دو منطقه سیرجان و بردسیر استان کرمان سازماندهی شده و محصولات آن شامل کنسانتره سنگ آهن، گندله، آهن اسفنجی و بریکت و شمش فولادی است.</p></div>
  <h2>اطلاعات ثبتی</h2><div className="about-facts">{[['تاریخ ثبت','۱۳۸۸/۰۸/۱۶'],['شماره ثبت','۳۶۲۱۱۱'],['شناسه ملی','۱۰۱۰۴۰۸۸۲۲۵'],['شرکت مادر','هلدینگ میدکو']].map(([name,value])=><div className="fact" key={name}><small>{name}</small><strong>{value}</strong></div>)}</div>
</Detail></>}

export function ProductsPage({id}:{id?:string}){
  const p=PRODUCTS.find(x=>x.id===id);
  if(id&&!p)return null;
  if(p)return <ProductDetail id={p.id as ProductId}/>;
  return <><PageHero kicker="زنجیره تولید" title="محصولات شرکت" desc="چهار محصول اصلی در امتداد زنجیره تولید فولاد"/>
    <div className="inner-section"><div className="container"><div className="product-list">
      {PRODUCTS.map(product=><Link href={`/products/${product.id}/`} className="product-tile product-photo-tile" key={product.id}>
        <MediaPhoto image={product.id as ProductId} alt={`طرح گرافیکی ${product.title}`}/>
        <span className="product-list-caption">{product.en}</span><h3>{product.title}</h3><p>{product.desc}</p>
        <span className="action-link">جزئیات محصول <Icon name="arrow"/></span>
      </Link>)}
    </div></div></div></>;
}

export function ComplexesPage({id}:{id?:string}){return <CorporateComplexesPage id={id}/>;}
export function NewsPage(){return <CorporateNewsPage/>;}
export function ServicesPage({id}:{id:'shareholders'|'customers'|'suppliers'}){
  const data={shareholders:{title:'امور سهامداران',desc:'دسترسی به گزارش‌ها، صورت‌های مالی و خدمات سهامداران شرکت.'},customers:{title:'خدمات مشتریان',desc:'دسترسی به پرتال مستقل فروش و مشتریان.'},suppliers:{title:'تأمین‌کنندگان',desc:'اطلاع‌رسانی و ارجاع به سامانه مستقل مدیریت تأمین‌کنندگان و معاملات الکترونیک.'}}[id];
  const items=MENU.find(x=>x.id===id)?.groups[0]?.items ?? [];
  return <><PageHero kicker="خدمات و دسترسی" title={data.title} desc={data.desc}/><div className="inner-section"><div className="container"><div className="internal-grid">{items.map(([title,key,url])=><SmartLink href={resolveHref(key,url)} className="internal-card" key={key}><h3>{title} <Icon name="external" size={14}/></h3><p>انتخاب برای مشاهده اطلاعات و مسیر دسترسی این خدمت.</p><span className="action-link">مشاهده <Icon name="arrow" size={14}/></span></SmartLink>)}</div><div className="source-panel">سامانه‌های معرفی‌شده مستقل هستند. این وب‌سایت عمومی هیچ اتصال نرم‌افزاری به سامانه‌های سازمانی یا SRM برقرار نمی‌کند.</div></div></div></>;
}
export function SustainabilityPage(){return <><PageHero kicker="توسعه پایدار" title="پایداری و مسئولیت اجتماعی" desc="مسئولیت‌پذیری اجتماعی در زنجیره فولاد"/><Detail sideLinks={[{title:'درباره شرکت',href:'/about/'},{title:'مجتمع‌ها',href:'/complexes/'},{title:'سیاست مدیریت یکپارچه',href:'/info/integrated-policy/'}]}><h2>توسعه صنعتی مسئولانه</h2><p>حفظ ایمنی کارکنان، توجه به محیط زیست، مدیریت منابع و مشارکت در توسعه اقتصادی و اجتماعی استان کرمان از محورهای مطرح‌شده در رویکرد شرکت است.</p><div className="corporate-feature-grid"><div className="corporate-feature"><h3>ایمنی و سلامت</h3><p>پیشگیری از حوادث و توجه به سلامت شاغلان در مجتمع‌های تولیدی.</p></div><div className="corporate-feature"><h3>محیط زیست</h3><p>توجه به مصرف منابع، آثار زیست‌محیطی و بهبود روش‌های تولید.</p></div><div className="corporate-feature"><h3>توسعه منطقه‌ای</h3><p>مشارکت در اشتغال و فعالیت‌های اقتصادی و اجتماعی مناطق پیرامونی.</p></div></div><div className="migration-note"><h3>گزارش مسئولیت اجتماعی</h3><p>برای انتشار گزارش قابل دانلود در دامنه جدید، فایل اصلی مصوب باید به کتابخانه اسناد این سایت منتقل شود.</p><Link href="/info/sustainability-report/">اطلاعات گزارش پایداری ←</Link></div></Detail></>}
export function ContactPage(){return <><PageHero kicker="ارتباط با ما" title="راه‌های ارتباط با شرکت" desc="دفاتر ستادی شرکت در تهران و کرمان قرار دارند"/><div className="inner-section"><div className="container"><div className="contact-grid">
  {[{city:'تهران',title:'دفتر مرکزی تهران',address:SITE.addressTehran,postcode:'۱۵۱۱۹۴۹۶۵۲',phone:'+982141453000'},{city:'کرمان',title:'دفتر ستادی کرمان',address:SITE.addressKerman,postcode:'۷۶۱۸۶۵۶۹۷۹',phone:'+983431245500'}].map(c=><div className="contact-card" key={c.city}><span className="eyebrow">دفتر {c.city}</span><h3>{c.title}</h3><p>{c.address}</p><small>کد پستی: {c.postcode}</small><div className="contact-links"><a href={`tel:${c.phone}`}>تماس تلفنی <Icon name="phone" size={14}/></a><a href={`mailto:${SITE.email}`}>ایمیل <Icon name="mail" size={14}/></a></div></div>)}
  </div><div className="info-panel" style={{marginTop:30}}><h2>اطلاعات تماس عمومی</h2><p>تلفن تهران: <b dir="ltr">۰۲۱-۴۱۴۵۳۰۰۰</b> | تلفن کرمان: <b dir="ltr">۰۳۴-۳۱۲۴۵۵۰۰</b> | ایمیل: <b dir="ltr">{SITE.email}</b></p></div><p className="source-note">فرم ارسال آنلاین در این نسخه فعال نشده است؛ برای جلوگیری از ثبت ناقص درخواست‌ها، از تلفن یا ایمیل رسمی استفاده کنید.</p></div></div></>}

export function InfoPage({id}:{id:string}){return <CorporateInfoPage id={id}/>;}
export function DirectoryPage(){return <><PageHero kicker="دسترسی جامع" title="نقشه سایت" desc="تمامی بخش‌ها و زیرمنوهای نسخه فعلی در یک نگاه"/><div className="inner-section"><div className="container"><div className="directory-grid">{MENU.map(item=><section className="directory-block" key={item.id}><h3><Link href={`/${item.id}/`}>{item.title}</Link></h3>{item.groups.map(g=><div key={g.label}><b className="mini-label">{g.label}</b>{g.items.map(([title,key,url])=><SmartLink key={`${key}-${title}`} href={resolveHref(key,url)}>{title}</SmartLink>)}</div>)}</section>)}</div><div className="info-panel"><h2>سامانه‌های داخلی کارکنان</h2><p>لینک‌های زیر صرفاً آدرس سامانه‌های مستقل موجود در سایت قبلی هستند؛ هیچ داده یا احراز هویتی به این سایت منتقل نمی‌شود.</p><div className="footer-list">{EMPLOYEE.map(([title,url])=><SmartLink key={title} href={url}>{title} ↗</SmartLink>)}</div></div></div></div></>}
