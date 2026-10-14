import Link from 'next/link';
import type { ReactNode } from 'react';
import Icon from './Icon';
import SmartLink from './SmartLink';
export function PageHero({kicker,title,desc}:{kicker:string;title:string;desc?:string}){
  return <div className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/">صفحه اصلی</Link><span> / </span><span>{title}</span></div><span className="eyebrow light">{kicker}</span><h1>{title}</h1>{desc?<p>{desc}</p>:null}</div></div>;
}
export function Detail({children,sideLinks}:{children:ReactNode;sideLinks:{title:string;href:string}[]}){
  return <div className="inner-section"><div className="container detail-layout"><article className="detail-content">{children}</article><aside className="side-box"><h3>در این بخش</h3>{sideLinks.map(({title,href})=><SmartLink key={`${title}-${href}`} href={href} className="side-link">{title} <Icon name="arrow" size={13}/></SmartLink>)}</aside></div></div>;
}
export function Source({href,note='محتوای کامل و مستندات این صفحه در نسخه فعلی وب‌سایت شرکت نگهداری می‌شود.'}:{href:string;note?:string}){
  return <div className="source-panel"><Icon name="external" size={16}/> {note} <SmartLink href={href}>مشاهده منبع رسمی</SmartLink></div>;
}
export function ActionLink({title,href}:{title:string;href:string}){return <SmartLink href={href} className="action-link">{title} <Icon name="arrow" size={17}/></SmartLink>}
