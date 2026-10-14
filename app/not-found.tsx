import Link from 'next/link';
import {PageHero} from '@/components/Interior';
export default function NotFound(){return <><PageHero kicker="خطا" title="صفحه مورد نظر یافت نشد" desc="برای بازگشت از منوی اصلی استفاده کنید."/><div className="inner-section"><div className="container"><Link href="/" className="btn btn-primary not-found-cta">بازگشت به صفحه اصلی</Link></div></div></>}
