import Link from 'next/link';
import {SITE,PRODUCTS,COMPLEXES,NEWS,MENU,EMPLOYEE} from '@/lib/site-data';
import {resolveHref} from '@/lib/routes';
import SmartLink from './SmartLink';
import Icon from './Icon';
import {ActionLink,Detail,PageHero,Source} from './Interior';

const infoLinks=[{title:'محصولات',href:'/products/'},{title:'مجتمع‌های تولیدی',href:'/complexes/'},{title:'ماموریت و راهبرد',href:'/info/mission/'},{title:'هیئت‌مدیره',href:'/info/board/'},{title:'ارتباط با ما',href:'/contact/'}];

export function AboutPage(){return <><PageHero kicker="هویت و تاریخچه" title="درباره فولاد سیرجان ایرانیان" desc="عضوی از گروه توسعه معادن و صنایع معدنی خاورمیانه"/><Detail sideLinks={infoLinks}>
  <h2>معرفی شرکت</h2><p>{SITE.description}</p>
  <div className="info-panel"><h2>معدن، فرآوری و فولاد؛ یک زنجیره ارزش</h2><p>فعالیت‌های تولیدی شرکت در دو منطقه سیرجان و بردسیر استان کرمان سازماندهی شده و محصولات آن شامل کنسانتره سنگ آهن، گندله، آهن اسفنجی و بریکت و شمش فولادی است.</p></div>
  <h2>اطلاعات ثبتی</h2><div className="about-facts">{[['تاریخ ثبت','۱۳۸۸/۰۸/۱۶'],['شماره ثبت','۳۶۲۱۱۱'],['شناسه ملی','۱۰۱۰۴۰۸۸۲۲۵'],['شرکت مادر','هلدینگ میدکو']].map(([name,value])=><div className="fact" key={name}><small>{name}</small><strong>{value}</strong></div>)}</div>
  <Source href={SITE.legacy}/>
</Detail></>}

export function ProductsPage({id}:{id?:string}){
  const p=PRODUCTS.find(x=>x.id===id);
  if(id&&!p)return null;
  if(!p)return <><PageHero kicker="زنجیره تولید" title="محصولات شرکت" desc="چهار محصول اصلی در امتداد زنجیره تولید فولاد"/><div className="inner-section"><div className="container"><div className="product-list">{PRODUCTS.map(product=><Link href={`/products/${product.id}/`} className="product-tile" key={product.id}><span className="chain-symbol">{product.icon}</span><h3>{product.title}</h3><p>{product.desc}</p><span className="action-link">جزئیات محصول <Icon name="arrow"/></span></Link>)}</div></div></div></>;
  return <><PageHero kicker="محصولات شرکت" title={p.title} desc={p.en}/><Detail sideLinks={[{title:'همه محصولات',href:'/products/'},...PRODUCTS.filter(x=>x.id!==id).map(x=>({title:x.title,href:`/products/${x.id}/`})),{title:'تماس با شرکت',href:'/contact/'}]}>
    <span className="tag">محصول {p.no} از ۰۴</span><h2 style={{marginTop:22}}>{p.title}</h2><p>{p.more}</p><div className="info-panel"><h2>در زنجیره ارزش شرکت</h2><p>{p.desc}</p></div><Source href={p.source} note="برای مشخصات فنی، تصاویر و اطلاعات دقیق محصول از صفحه رسمی محصولات استفاده کنید."/>
  </Detail></>;
}

export function ComplexesPage({id}:{id?:string}){
  const c=COMPLEXES.find(x=>x.id===id);
  if(id&&!c)return null;
  if(!c)return <><PageHero kicker="سایت‌های صنعتی" title="مجتمع‌های تولیدی" desc="حضور صنعتی در دو شهرستان سیرجان و بردسیر استان کرمان"/><div className="inner-section"><div className="container"><div className="complex-grid">{COMPLEXES.map((complex,i)=><Link href={`/complexes/${complex.id}/`} className="complex-card" key={complex.id}><div className="complex-content"><span className="complex-index">0{i+1} / {complex.en}</span><h3>{complex.title}</h3><p>{complex.desc}</p><div className="complex-footer"><span>{complex.facilities.length} واحد معرفی‌شده</span><span className="complex-arrow"><Icon name="arrow"/></span></div></div></Link>)}</div></div></div></>;
  return <><PageHero kicker="مجتمع‌های تولیدی" title={c.title} desc={c.subtitle}/><Detail sideLinks={[{title:'تمام مجتمع‌ها',href:'/complexes/'},{title:'محصولات',href:'/products/'},{title:'درباره شرکت',href:'/about/'}]}>
    <div className={`interior-photo ${id==='bardsir'?'bardsir':''}`} role="img" aria-label={`نمای گرافیکی مجتمع ${c.short}`}/>
    <h2>معرفی {c.short}</h2><p>{c.desc}</p><h2 style={{marginTop:26}}>واحدهای این مجتمع</h2>
    <div className="facility-list">{c.facilities.map(f=><div className="facility" key={f.title}><span>{f.title}</span><SmartLink href={f.source}>اطلاعات بیشتر <Icon name="external" size={13}/></SmartLink></div>)}</div>
    <Source href={SITE.legacy}/>
  </Detail></>;
}
export function NewsPage(){return <><PageHero kicker="رویدادها و رسانه" title="اخبار و اطلاعیه‌ها" desc="اخبار تولید، پروژه‌های توسعه و آگهی‌های شرکت"/><div className="inner-section"><div className="container"><div className="news-grid">{NEWS.map(n=><article className="news-card" key={n.id}><div className="news-img"><span className="news-pill">{n.kind}</span></div><div className="news-copy"><h3>{n.title}</h3><p>{n.desc}</p><ActionLink title="آرشیو رسمی" href={n.href}/></div></article>)}</div><div className="source-panel" style={{marginTop:25}}>اخبار این نمونه به‌صورت ایستا نمایش داده شده‌اند. برای تازه‌ترین اطلاعیه‌ها <SmartLink href={SITE.legacy+'/fa/news.html'}>آرشیو رسمی شرکت</SmartLink> را ببینید.</div></div></div></>}

export function ServicesPage({id}:{id:'shareholders'|'customers'|'suppliers'}){
  const data={shareholders:{title:'امور سهامداران',desc:'دسترسی به گزارش‌ها، صورت‌های مالی و خدمات سهامداران شرکت.'},customers:{title:'خدمات مشتریان',desc:'دسترسی به پرتال مستقل فروش و مشتریان.'},suppliers:{title:'تأمین‌کنندگان',desc:'اطلاع‌رسانی و ارجاع به سامانه مستقل مدیریت تأمین‌کنندگان و معاملات الکترونیک.'}}[id];
  const items=MENU.find(x=>x.id===id)?.groups[0]?.items ?? [];
  return <><PageHero kicker="خدمات و دسترسی" title={data.title} desc={data.desc}/><div className="inner-section"><div className="container"><div className="internal-grid">{items.map(([title,key,url])=><SmartLink href={resolveHref(key,url)} className="internal-card" key={key}><h3>{title} <Icon name="external" size={14}/></h3><p>انتخاب برای مشاهده اطلاعات و مسیر دسترسی این خدمت.</p><span className="action-link">مشاهده <Icon name="arrow" size={14}/></span></SmartLink>)}</div><div className="source-panel">سامانه‌های معرفی‌شده مستقل هستند. این وب‌سایت عمومی هیچ اتصال نرم‌افزاری به سامانه‌های سازمانی یا SRM برقرار نمی‌کند.</div></div></div></>;
}
export function SustainabilityPage(){return <><PageHero kicker="توسعه پایدار" title="پایداری و مسئولیت اجتماعی" desc="نگاهی به رویکرد مسئولانه صنعت در قبال محیط زیست و جامعه"/><Detail sideLinks={[{title:'درباره شرکت',href:'/about/'},{title:'محصولات',href:'/products/'},{title:'مجتمع‌ها',href:'/complexes/'}]}><h2>توسعه صنعتی با نگاه به پایداری</h2><p>اطلاعات رسمی مربوط به مسئولیت اجتماعی و پایداری شرکت در قالب گزارش منتشرشده در وب‌سایت فعلی قابل مطالعه است.</p><div className="info-panel"><h2>گزارش مسئولیت اجتماعی</h2><p>برای مرور گزارش موجود، فایل منتشرشده در وب‌سایت رسمی فولاد سیرجان ایرانیان را مشاهده کنید.</p><SmartLink href={`${SITE.legacy}/upload/upload/1725953972.pdf`} className="btn btn-primary">مشاهده گزارش منتشرشده <Icon name="external"/></SmartLink></div><Source href={`${SITE.legacy}/upload/upload/1725953972.pdf`}/></Detail></>}

export function ContactPage(){return <><PageHero kicker="ارتباط با ما" title="راه‌های ارتباط با شرکت" desc="دفاتر ستادی شرکت در تهران و کرمان قرار دارند"/><div className="inner-section"><div className="container"><div className="contact-grid">
  {[{city:'تهران',title:'دفتر مرکزی تهران',address:SITE.addressTehran,postcode:'۱۵۱۱۹۴۹۶۵۲',phone:'+982141453000'},{city:'کرمان',title:'دفتر ستادی کرمان',address:SITE.addressKerman,postcode:'۷۶۱۸۶۵۶۹۷۹',phone:'+983431245500'}].map(c=><div className="contact-card" key={c.city}><span className="eyebrow">دفتر {c.city}</span><h3>{c.title}</h3><p>{c.address}</p><small>کد پستی: {c.postcode}</small><div className="contact-links"><a href={`tel:${c.phone}`}>تماس تلفنی <Icon name="phone" size={14}/></a><a href={`mailto:${SITE.email}`}>ایمیل <Icon name="mail" size={14}/></a></div></div>)}
  </div><div className="info-panel" style={{marginTop:30}}><h2>اطلاعات تماس عمومی</h2><p>تلفن تهران: <b dir="ltr">021-41453000</b> | تلفن کرمان: <b dir="ltr">034-31245500</b> | ایمیل: <b dir="ltr">{SITE.email}</b></p></div><p className="source-note">فرم ارسال آنلاین در این نسخه فعال نشده است؛ برای جلوگیری از ثبت ناقص درخواست‌ها، از تلفن یا ایمیل رسمی استفاده کنید.</p></div></div></>}

function SpecificInfo({id}:{id:string}){
  if(id==='activities')return <><h2>فعالیت‌های اصلی شرکت</h2><p>حوزه فعالیت فولاد سیرجان ایرانیان شامل استخراج سنگ آهن، تولید کنسانتره و گندله در سیرجان و تولید آهن اسفنجی و شمش فولادی در بردسیر است.</p><div className="info-panel"><h2>ظرفیت‌های اسمی اعلام‌شده در منبع</h2><div className="facility-list">{[['کنسانتره سنگ آهن','۴ میلیون تن در سال'],['گندله سنگ آهن','۲٫۵ میلیون تن در سال'],['آهن اسفنجی','۱ میلیون تن در سال'],['شمش فولادی','۱ میلیون تن در سال']].map(([title,value])=><div className="facility" key={title}>{title} <b>{value}</b></div>)}</div><p className="source-note" style={{marginTop:16}}>اعداد برگرفته از منبع پیشین‌اند و پیش از انتشار رسمی نیازمند تأیید هستند.</p></div></>;
  if(id==='ethics')return <><h2>اصول منشور اخلاقی</h2><p>در منشور اخلاقی منتشرشده بر حفظ کرامت انسانی، شفافیت، پاسخگویی، احترام به حریم خصوصی، رقابت سالم و رفتار منصفانه با تأمین‌کنندگان تأکید شده است.</p><div className="internal-grid">{[['مشتریان','اطلاع‌رسانی روشن، کیفیت خدمات و پایبندی به تعهدات.'],['رقبا','رقابت سالم و پرهیز از رفتارهای غیرمنصفانه.'],['تأمین‌کنندگان','روابط مبتنی بر انصاف، شفافیت و پاسخگویی.']].map(([title,desc])=><div className="internal-card" key={title}><h3>{title}</h3><p>{desc}</p></div>)}</div></>;
  if(id==='shareholder-contact')return <><h2>تماس با امور سهام</h2><p>{SITE.addressTehran}</p><div className="info-panel"><p>شماره تماس امور سهام (در منبع موجود): <a dir="ltr" href="tel:+983431245665">034-31245665</a></p></div></>;
  return null;
}

export function InfoPage({id}:{id:string}){
  let match:{title:string;url:string;group:string;section:string;sectionId:string}|null=null;
  for(const m of MENU)for(const g of m.groups)for(const [title,key,url] of g.items)if(key===id)match={title,url,group:g.label,section:m.title,sectionId:m.id};
  if(!match)return null;
  const data=match;
  return <><PageHero kicker={data.section} title={data.title} desc={data.group}/><Detail sideLinks={[{title:'صفحه اصلی',href:'/'},{title:data.section,href:`/${data.sectionId}/`},{title:'فهرست کامل سایت',href:'/directory/'}]}>
    {['activities','ethics','shareholder-contact'].includes(id)?<SpecificInfo id={id}/>:<><h2>{data.title}</h2><p>این بخش بخشی از ساختار محتوایی رسمی شرکت فولاد سیرجان ایرانیان است. عنوان و جایگاه آن از وب‌سایت فعلی حفظ شده است.</p><div className="info-panel"><h2>در حال انتقال محتوای تأییدشده</h2><p>برای جلوگیری از نمایش اطلاعات قدیمی یا تأییدنشده، متن تفصیلی این صفحه در نسخه نمایشی بازنویسی نشده است. پس از تأیید محتوا توسط مسئول شرکت، این صفحه تکمیل می‌شود.</p></div></>}
    <Source href={data.url} note="برای مشاهده محتوای موجود یا اسناد این بخش به وب‌سایت فعلی مراجعه کنید."/>
  </Detail></>;
}

export function DirectoryPage(){return <><PageHero kicker="دسترسی جامع" title="نقشه سایت" desc="تمامی بخش‌ها و زیرمنوهای نسخه فعلی در یک نگاه"/><div className="inner-section"><div className="container"><div className="directory-grid">{MENU.map(item=><section className="directory-block" key={item.id}><h3><Link href={`/${item.id}/`}>{item.title}</Link></h3>{item.groups.map(g=><div key={g.label}><b className="mini-label">{g.label}</b>{g.items.map(([title,key,url])=><SmartLink key={`${key}-${title}`} href={resolveHref(key,url)}>{title}</SmartLink>)}</div>)}</section>)}</div><div className="info-panel"><h2>سامانه‌های داخلی کارکنان</h2><p>لینک‌های زیر صرفاً آدرس سامانه‌های مستقل موجود در سایت قبلی هستند؛ هیچ داده یا احراز هویتی به این سایت منتقل نمی‌شود.</p><div className="footer-list">{EMPLOYEE.map(([title,url])=><SmartLink key={title} href={url}>{title} ↗</SmartLink>)}</div></div></div></div></>}
