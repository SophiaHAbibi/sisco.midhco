import type { Metadata } from 'next';
import {notFound} from 'next/navigation';
import {allStaticSlugs} from '@/lib/routes';
import { MENU, PRODUCTS, COMPLEXES } from '@/lib/site-data';
import { AboutPage, ProductsPage, ComplexesPage, NewsPage, ServicesPage, SustainabilityPage, ContactPage, InfoPage, DirectoryPage } from '@/components/InteriorPages';

type RouteProps={params:Promise<{slug:string[]}>};
export const dynamicParams=false;
export function generateStaticParams(){return allStaticSlugs().map(slug=>({slug}));}
function titleFor(slug:string[]):string {
  if(slug[0]==='products')return PRODUCTS.find(x=>x.id===slug[1])?.title ?? 'محصولات';
  if(slug[0]==='complexes')return COMPLEXES.find(x=>x.id===slug[1])?.title ?? 'مجتمع‌های تولیدی';
  if(slug[0]==='info')return MENU.flatMap(x=>x.groups.flatMap(g=>g.items)).find(([,id])=>id===slug[1])?.[0] ?? 'اطلاعات شرکت';
  return ({about:'درباره ما',news:'اخبار و اطلاعیه‌ها',shareholders:'سهامداران',customers:'مشتریان',suppliers:'تأمین‌کنندگان',contact:'ارتباط با ما',sustainability:'پایداری و مسئولیت اجتماعی',directory:'نقشه سایت'} as Record<string,string>)[slug[0]] ?? 'فولاد سیرجان ایرانیان';
}
export async function generateMetadata({params}:RouteProps):Promise<Metadata>{
  const {slug}=await params;
  return {title:titleFor(slug)};
}
export default async function ContentRoute({params}:RouteProps){
  const {slug}=await params;
  const [section,id,...rest]=slug;
  if(rest.length || (id && !['products','complexes','info'].includes(section)))notFound();
  switch(section){
    case 'about':return <AboutPage/>;
    case 'products':if(id&&!PRODUCTS.some(p=>p.id===id))notFound();return <ProductsPage id={id}/>;
    case 'complexes':if(id&&!COMPLEXES.some(c=>c.id===id))notFound();return <ComplexesPage id={id}/>;
    case 'news':return <NewsPage/>;
    case 'shareholders':case 'customers':case 'suppliers':return <ServicesPage id={section}/>;
    case 'contact':return <ContactPage/>;
    case 'sustainability':return <SustainabilityPage/>;
    case 'directory':return <DirectoryPage/>;
    case 'info':if(!id || !MENU.some(m=>m.groups.some(g=>g.items.some(([,key])=>key===id))))notFound();return <InfoPage id={id}/>;
    default:notFound();
  }
}
