import {toPersianCounter, toPersianDigits} from '@/lib/persian-numbers';
'use client';
import {useState} from 'react';
import Link from 'next/link';

type ProductPreview={id:string;no:string;title:string;en:string;desc:string;src:string};

export default function ProductExplorer({items}:{items:ProductPreview[]}){
  const [active,setActive]=useState(0);
  const current=items[active];
  return <div className="product-explorer" aria-label="مرور تعاملی محصولات">
    <div className="product-explorer-stage" key={current.id}>
      <img className="explorer-stage-image" src={current.src} alt={`طرح گرافیکی ${current.title}`} loading="lazy" decoding="async"/>
      <span className="explorer-stamp">SISCO / PRODUCT {toPersianCounter(active+1)}</span>
      <span className="explorer-vertical">STEEL VALUE CHAIN</span>
      <div className="explorer-stage-copy">
        <span className="explorer-counter" dir="ltr">{toPersianDigits(current.no)} / ۰۴</span>
        <h3>{current.title}</h3>
        <p>{current.desc}</p>
        <Link href={`/products/${current.id}/`} className="explorer-detail-link">مشاهده جزئیات محصول <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
    <div className="product-explorer-selector">
      <div className="explorer-selector-head"><span className="eyebrow">VALUE CHAIN / ۰۴</span><h3>زنجیره تولید<br/><em>در چهار گام</em></h3><p>برای آشنایی با هر محصول، روی مرحله موردنظر انتخاب کنید.</p></div>
      <div className="explorer-options" role="group" aria-label="انتخاب محصول">
        {items.map((item,index)=><button type="button" className={`explorer-option ${active===index?'is-selected':''}`} key={item.id} aria-pressed={active===index} onClick={()=>setActive(index)}>
          <span className="explorer-option-number" dir="ltr">{toPersianDigits(item.no)}</span>
          <span className="explorer-option-label"><strong>{item.title}</strong><small>{item.en}</small></span>
          <span className="explorer-option-arrow" aria-hidden="true">↗</span>
        </button>)}
      </div>
      <div className="explorer-selector-foot"><span>معدن</span><span className="explorer-selector-line" aria-hidden="true"/><span>فولاد</span></div>
    </div>
  </div>;
}
