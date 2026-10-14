import { mediaSrc, type MediaKey } from '@/lib/media';
/** Server component: uses the locally mirrored official asset when available. */
export default function MediaPhoto({image,alt,className='',priority=false}:{image:MediaKey;alt:string;className?:string;priority?:boolean}){
 return <div className={`media-photo ${className}`}>
   {/* An SVG gradient is the visual fallback if the original company host is unavailable. */}
   <img src={mediaSrc(image)} alt={alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/>
 </div>;
}
