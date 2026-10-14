'use client';
import Icon from './Icon';
export default function BackToTop(){return <button type="button" className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="بازگشت به بالا"><Icon name="arrowUp"/></button>}
