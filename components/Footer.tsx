import Link from 'next/link';
import {SITE} from '@/lib/site-data';
import SmartLink from './SmartLink';
import {Brand} from './Header';
import BackToTop from './BackToTop';
export default function Footer(){
  const main=[['درباره شرکت','/about/'],['مجتمع‌های تولیدی','/complexes/'],['محصولات','/products/'],['اخبار و اطلاعیه‌ها','/news/'],['مسئولیت اجتماعی','/sustainability/']];
  const services=[['سهامداران','/shareholders/'],['مشتریان','/customers/'],['تأمین‌کنندگان','/suppliers/'],['فرصت‌های شغلی','https://siscomidhco.adilar.com/'],['فهرست کامل سایت','/directory/']];
  return <><footer className="footer"><div className="container footer-grid">
    <div><Brand/><p className="footer-about">شرکت فولاد سیرجان ایرانیان، از شرکت‌های تابعه هلدینگ میدکو، فعال در زنجیره معدن، فرآوری سنگ آهن و فولادسازی.</p><p className="footer-about">مستقر در تهران، کرمان، سیرجان و بردسیر</p></div>
    <div><h3 className="footer-title">دسترسی‌های اصلی</h3><div className="footer-list">{main.map(([name,url])=><Link key={name} href={url}>{name}</Link>)}</div></div>
    <div><h3 className="footer-title">خدمات و سامانه‌ها</h3><div className="footer-list">{services.map(([name,url])=><SmartLink key={name} href={url}>{name}</SmartLink>)}</div></div>
    <div className="footer-contact"><h3 className="footer-title">با ما در ارتباط باشید</h3><p>{SITE.addressTehran}</p><p>{SITE.addressKerman}</p><p><a href="tel:+982141453000" dir="ltr">021-41453000</a> / <a href="tel:+983431245500" dir="ltr">034-31245500</a></p><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p></div>
  </div><div className="footer-bottom"><div className="container footer-bottom-inner"><span>© ۲۰۲۶ شرکت فولاد سیرجان ایرانیان | تمامی حقوق محفوظ است.</span><span className="en">SISCO · A MEMBER OF MIDHCO GROUP</span></div></div></footer><BackToTop/></>
}
