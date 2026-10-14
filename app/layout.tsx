import type {Metadata, Viewport} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata:Metadata={
  title:{default:'فولاد سیرجان ایرانیان | شرکت تابعه میدکو',template:'%s | فولاد سیرجان ایرانیان'},
  description:'وب‌سایت شرکت فولاد سیرجان ایرانیان، از شرکت‌های تابعه هلدینگ میدکو؛ مجتمع‌های سیرجان و بردسیر، محصولات، اخبار و خدمات ذی‌نفعان.',
  robots:{index:false,follow:false},
  icons:{icon:'/assets/favicon.svg'}
};
/* For public launch: remove noindex after approved content + actual domain assignment. */
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#0c1b36'};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fa" dir="rtl"><body><a className="skip-link" href="#main">رفتن به محتوای اصلی</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
