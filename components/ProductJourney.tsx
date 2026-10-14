'use client';

import {useState} from 'react';
import {toPersianCounter, toPersianDigits} from '@/lib/persian-numbers';

type ProductJourneyProps={
  stages:string[];
  productName:string;
};

export default function ProductJourney({stages,productName}:ProductJourneyProps){
  const [active,setActive]=useState(0);
  const current=stages[active];
  const previous=active>0?stages[active-1]:null;
  const next=active<stages.length-1?stages[active+1]:null;
  return <div className="product-journey" aria-label={`زنجیره تولید ${productName}`}>
    <div className="journey-topline">
      <span className="journey-topline-label"><span className="journey-topline-dot" aria-hidden="true"/> مسیر فرآیند</span>
      <span className="journey-topline-counter">{toPersianDigits(stages.length)} مرحله تولید</span>
    </div>
    <ol className="journey-steps">
      {stages.map((stage,index)=><li className={index===active?'is-active':''} key={index}>
        <button
          type="button"
          className="journey-step"
          aria-pressed={active===index}
          aria-controls="journey-current-stage"
          onClick={()=>setActive(index)}
        >
          <span className="journey-step-number">{toPersianCounter(index+1)}</span>
          <span className="journey-step-label">{stage}</span>
          <span className="journey-step-cta" aria-hidden="true">{index===active?'مرحله انتخاب‌شده':'مشاهده مرحله'} <span>←</span></span>
        </button>
      </li>)}
    </ol>
    <div className="journey-detail" id="journey-current-stage" role="status" aria-live="polite" aria-atomic="true">
      <div className="journey-current">
        <span className="journey-current-kicker">مرحله {toPersianDigits(active+1)} از {toPersianDigits(stages.length)}</span>
        <strong>{current}</strong>
      </div>
      <p>{previous?`پس از «${previous}»`:'آغاز مسیر تولید'}<span aria-hidden="true" className="journey-direction"> ← </span>{next?`مرحله بعد: «${next}»`:'پایان مسیر معرفی‌شده'}</p>
      <div className="journey-progress" aria-hidden="true"><span style={{width:`${((active+1)/stages.length)*100}%`}}/></div>
    </div>
  </div>;
}
