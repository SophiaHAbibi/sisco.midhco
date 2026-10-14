import Link from 'next/link';
import type { ReactNode } from 'react';
import {isExternal} from '@/lib/routes';
export default function SmartLink({href,children,className,title}:{href:string;children:ReactNode;className?:string;title?:string}) {
  return isExternal(href)
    ? <a href={href} className={className} title={title} target="_blank" rel="noopener noreferrer">{children}</a>
    : <Link href={href} className={className} title={title}>{children}</Link>;
}
