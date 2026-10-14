import Link from 'next/link';
import {PRODUCTS} from '@/lib/site-data';
import {PRODUCT_DETAILS, type ProductId} from '@/lib/product-details';
import MediaPhoto from './MediaPhoto';
import Icon from './Icon';

export default function ProductDetail({id}:{id:ProductId}){
 const product=PRODUCTS.find(item=>item.id===id)!;
 const detail=PRODUCT_DETAILS[id];
 const related=PRODUCTS.filter(item=>item.id!==id).slice(0,3);
 return <>
   <section className="product-detail-masthead">
     <div className="container">
       <nav className="product-crumb" aria-label="مسیر صفحه"><Link href="/">خانه</Link><span>/</span><Link href="/products/">محصولات</Link><span>/</span><span aria-current="page">{product.title}</span></nav>
       <span className="product-kicker">PRODUCT / {product.no}</span>
       <h1>{product.title}</h1>
       <p>{detail.highlight}</p>
       <div className="product-masthead-line">{product.en} <span/></div>
     </div>
   </section>
   <div className="container product-detail-main">
     <section className="product-feature" aria-label="معرفی محصول">
       <div className="product-photo-panel"><MediaPhoto image={id} alt={`تصویر ${product.title} منتشرشده در وب‌سایت رسمی فولاد سیرجان ایرانیان`}/><span className="product-image-label">تصویر رسمی محصول • SISCO</span></div>
       <div className="product-intro">
         <span className="eyebrow">معرفی محصول</span>
         <h2>{product.title}</h2>
         <p>{detail.intro}</p>
         <div className="product-origin"><Icon name="factory" size={20}/><div><small>مجتمع مرتبط</small><strong>{detail.facility}</strong></div></div>
         <div className="product-intro-actions"><Link href="/contact/" className="btn btn-primary">ارتباط با شرکت <Icon name="arrow" size={16}/></Link><a href={detail.source} target="_blank" rel="noopener noreferrer" className="product-official-link">مشاهده صفحه محصول در سایت رسمی ↗</a></div>
       </div>
     </section>
     <section className="product-specs-section" aria-labelledby="product-specs-title">
       <div className="product-section-head"><span className="eyebrow">PRODUCT PROFILE</span><h2 id="product-specs-title">مشخصات و جایگاه محصول</h2><p>اطلاعات عمومی فرآیند تولید؛ بدون درج مشخصات آزمایشگاهی یا گرید تأییدنشده.</p></div>
       <div className="product-specs-grid">{[['ماده اولیه',detail.rawMaterial],['فرآیند تولید',detail.process],['کاربرد در زنجیره',detail.destination],['مجتمع مرتبط',detail.facility]].map(([label,value],index)=><div className="product-spec" key={label}><span className="product-spec-index">0{index+1}</span><small>{label}</small><strong>{value}</strong></div>)}</div>
     </section>
     <section className="product-process-section" aria-labelledby="product-process-title">
       <div className="product-section-head"><span className="eyebrow">VALUE CHAIN</span><h2 id="product-process-title">مسیر تولید در زنجیره فولاد</h2></div>
       <ol className="product-process">{detail.stages.map((item,index)=><li key={`${index}-${item}`}><span>0{index+1}</span><strong>{item}</strong></li>)}</ol>
     </section>
     <section className="product-applications" aria-labelledby="product-applications-title"><div><span className="eyebrow">APPLICATIONS</span><h2 id="product-applications-title">کاربردهای محصول</h2><p>موارد استفاده در ادامه زنجیره تولید آهن و فولاد</p></div><ul>{detail.applications.map(a=><li key={a}><span aria-hidden="true">✓</span>{a}</li>)}</ul></section>
     <section className="product-related" aria-label="سایر محصولات"><div className="product-section-head"><span className="eyebrow">EXPLORE MORE</span><h2>سایر محصولات</h2></div><div className="product-related-grid">{related.map(x=><Link href={`/products/${x.id}/`} key={x.id} className="product-related-card"><MediaPhoto image={x.id as ProductId} alt={`تصویر ${x.title}`}/><div><small>{x.en}</small><h3>{x.title}</h3><span>جزئیات محصول <Icon name="arrow" size={16}/></span></div></Link>)}</div></section>
   </div>
 </>;
}
