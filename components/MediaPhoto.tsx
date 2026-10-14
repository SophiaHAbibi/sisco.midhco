import { mediaSrc, type MediaKey } from '@/lib/media';
/** Server component: serves local conceptual visuals or official photographs as applicable. */
export default function MediaPhoto({image,alt,className='',priority=false}:{image:MediaKey;alt:string;className?:string;priority?:boolean}){
 return <div className={`media-photo ${className}`}>
   {/* All conceptual artwork is stored in /public/assets/concept as optimized WebP. */}
   <img src={mediaSrc(image)} alt={alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/>
 </div>;
}
