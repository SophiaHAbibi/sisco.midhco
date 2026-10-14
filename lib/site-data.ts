/* Content inventory based on sisco.midhco.com, reviewed October 2026.
   External URLs are links only. This public site never calls an internal system. */
export const SITE = {
  name: 'شرکت فولاد سیرجان ایرانیان', en: 'Sirjan Iranian Steel Company',
  legacy: 'https://sisco.midhco.com',
  phones: ['021-41453000','034-31245500'], email: 'info@sisco.midhco.com',
  addressTehran: 'تهران، خیابان ولیعصر، بالاتر از پارک ساعی، خیابان ساعی دوم، پلاک ۶، برج الماس ساعی، طبقه دهم',
  addressKerman: 'کرمان، بلوار جمهوری، خیابان هزار و یک شب، انتهای کوچه شماره ۱۷',
  description: 'شرکت فولاد سیرجان (سهامی عام) در تاریخ ۱۳۸۸/۰۸/۱۶ به شماره ثبت ۳۶۲۱۱۱ و شناسه ملی ۱۰۱۰۴۰۸۸۲۲۵ ثبت شده و سپس به شرکت فولاد سیرجان ایرانیان (سهامی عام) تغییر نام داده است. این شرکت از شرکت‌های تابعه هلدینگ توسعه معادن و صنایع معدنی خاورمیانه (میدکو) است. دفاتر ستادی شرکت در تهران و کرمان و کارخانه‌های آن در سیرجان و بردسیر استان کرمان واقع شده‌اند.',
};
const legacy = (p: string) => `${SITE.legacy}${p}`;
export const PRODUCTS = [
  {id:'concentrate', no:'01',title:'کنسانتره سنگ آهن', en:'IRON ORE CONCENTRATE',desc:'محصول فرآوری سنگ آهن مگنتیت و ماده اولیه تولید گندله.', more:'کنسانتره از فرآوری سنگ آهن مگنتیت تولید می‌شود و برای ساخت گندله مصرفی در کوره‌های بلند و واحدهای احیای مستقیم به کار می‌رود.',source:legacy('/fa/product.html'),icon:'⦿',tone:'blue'},
  {id:'pellet',no:'02',title:'گندله سنگ آهن',en:'IRON ORE PELLETS',desc:'حلقه اتصال فرآوری سنگ آهن به فرآیند احیای مستقیم.',more:'گندله از کنسانتره سنگ آهن از طریق گندله‌سازی و پخت تولید می‌شود و خوراک واحدهای احیای مستقیم است.',source:legacy('/fa/product.html'),icon:'◉',tone:'slate'},
  {id:'sponge',no:'03',title:'آهن اسفنجی و بریکت',en:'DRI & BRIQUETTE',desc:'محصول فرآیند احیای مستقیم و خوراک تولید فولاد.',more:'آهن اسفنجی حاصل احیای مستقیم گندله سنگ آهن است و به‌عنوان ماده اولیه فولادسازی به کار می‌رود.',source:legacy('/fa/product.html'),icon:'⬡',tone:'red'},
  {id:'billet',no:'04',title:'شمش فولادی',en:'STEEL BILLET',desc:'محصول نهایی زنجیره تولید در مجتمع فولادسازی بردسیر.',more:'شمش فولادی از ذوب و ریخته‌گری فولاد تولید می‌شود و ماده اولیه بسیاری از فرآورده‌های فولادی است.',source:legacy('/fa/product.html'),icon:'▰',tone:'steel'}
];
export const COMPLEXES = [
  {id:'sirjan', title:'مجتمع معادن، کنسانتره و گندله سیرجان',short:'مجتمع سیرجان',en:'SIRJAN COMPLEX', subtitle:'آغاز زنجیره ارزش از معدن تا گندله', facilities:[{title:'معدن شماره ۴',source:legacy('/fa/')},{title:'کارخانه کنسانتره',source:legacy('/fa/page/ms-consantreh.html')},{title:'کارخانه گندله‌سازی',source:legacy('/fa/page/ms-gondeleh.html')}],desc:'فعالیت‌های معدنی و فرآوری سنگ آهن، تولید کنسانتره و گندله در شهرستان سیرجان متمرکز است.',photo:'sirjan'},
  {id:'bardsir',title:'مجتمع احیای مستقیم و فولادسازی بردسیر',short:'مجتمع بردسیر',en:'BARDSIR COMPLEX',subtitle:'تبدیل مواد اولیه به آهن اسفنجی و فولاد',facilities:[{title:'کارخانه احیای مستقیم',source:legacy('/fa/page/mb-ehya.html')},{title:'کارخانه فولادسازی',source:legacy('/fa/')}],desc:'واحدهای احیای مستقیم و فولادسازی در شهر بردسیر استان کرمان بخش پایانی زنجیره تولید را شکل می‌دهند.',photo:'bardsir'}
];
export const NEWS = [
  {id:'dewatering',kind:'پروژه‌های توسعه',title:'پروژه دیواترینگ شرکت فولاد سیرجان ایرانیان افتتاح شد',desc:'گامی در بازیابی آب صنعتی و ارتقای بهره‌وری منابع در چرخه تولید.',href:legacy('/fa/news.html'),tone:'water'},
  {id:'auction',kind:'آگهی شرکت',title:'آگهی مزایده شرکت فولاد سیرجان ایرانیان',desc:'آگهی‌ها و اطلاعیه‌های رسمی منتشرشده از سوی شرکت.',href:legacy('/fa/news.html'),tone:'auction'},
  {id:'visit',kind:'اخبار شرکت',title:'بازدید استاندار کرمان از مجتمع فولاد بردسیر',desc:'بازدید از ظرفیت‌های صنعتی و روند فعالیت مجتمع تولیدی بردسیر.',href:legacy('/fa/news.html'),tone:'visit'}
];
// Every known visible top-level and submenu item is preserved in this content map.
export const MENU = [
  {title:'درباره ما',id:'about',groups:[
    {label:'معرفی فولاد سیرجان',items:[['معرفی شرکت','about',legacy('/')],['فعالیت‌های اصلی شرکت','activities',legacy('/fa/page/mainhadaf.html')],['منشور اخلاقی','ethics',legacy('/fa/page/Manshoor.html')],['گواهی‌نامه‌ها','certificates',legacy('/fa/page/logo.html')]]},
    {label:'مدیران',items:[['هیئت‌مدیره، مدیران و مشاوران','board',legacy('/fa/manager.html')],['پیام مدیرعامل','ceo',legacy('/fa/page/messagefromheadmanger.html')],['نمودار سازمانی و مدیران شرکت','orgchart',legacy('/fa/page/chart.html')],['هلدینگ میدکو','midhco','https://www.midhco.com/']]},
    {label:'ماموریت، چشم‌انداز و راهبرد',items:[['فلسفه وجودی','philosophy',legacy('/fa/page/purpose.html')],['نقشه استراتژی شرکت','strategy-map',legacy('/fa/page/MapingStrategy.html')],['چشم‌انداز','vision',legacy('/fa/page/Strategy1.html')],['ماموریت شرکت','mission',legacy('/fa/page/Strategy.html')],['استراتژی‌ها','strategies',legacy('/fa/page/hadaf.html')],['ارزش‌های سازمانی','values',legacy('/fa/page/arzesh.html')]]},
    {label:'خط مشی',items:[['خط مشی سیستم مدیریت یکپارچه','integrated-policy',legacy('/fa/page/kh.htm.html')]]}
  ]},
  {title:'مجتمع‌های تولیدی',id:'complexes',groups:[
    {label:'مجتمع سیرجان',items:[['معرفی مجتمع سیرجان','complex-sirjan','#/complexes/sirjan'],['کارخانه گندله‌سازی','pellet-plant',legacy('/fa/page/ms-gondeleh.html')],['کارخانه کنسانتره','concentrate-plant',legacy('/fa/page/ms-consantreh.html')],['معدن شماره ۴','mine-4',legacy('/')]]},
    {label:'مجتمع بردسیر',items:[['معرفی مجتمع بردسیر','complex-bardsir','#/complexes/bardsir'],['کارخانه احیای مستقیم','dri-plant',legacy('/fa/page/mb-ehya.html')],['کارخانه فولادسازی','steel-plant',legacy('/')]]}
  ]},
  {title:'محصولات',id:'products',groups:[{label:'زنجیره تولید',items:PRODUCTS.map(p=>[p.title,`product-${p.id}`,`#/products/${p.id}`])}]},
  {title:'اخبار و اطلاعیه‌ها',id:'news',groups:[{label:'مرکز اطلاع‌رسانی',items:[['آخرین اخبار','news',legacy('/fa/news.html')],['مزایده‌های شرکت','auctions',legacy('/fa/news.html')],['مناقصه‌های شرکت','tenders',legacy('/fa/news.html')],['سایر آگهی‌ها','announcements',legacy('/fa/news.html')]]}]},
  {title:'پایداری',id:'sustainability',groups:[{label:'پایداری و مسئولیت اجتماعی',items:[['مسئولیت اجتماعی','sustainability',legacy('/upload/upload/1725953972.pdf')],['گزارش پایداری','sustainability-report',legacy('/upload/upload/1725953972.pdf')]]}]},
  {title:'سهامداران',id:'shareholders',groups:[{label:'امور سهام',items:[['گزارش توجیهی هیئت‌مدیره و بازرس قانونی در خصوص افزایش سرمایه','capital-report',legacy('/upload/upload/1765716736.pdf')],['دانلود برگه حق تقدم','rights-form',legacy('/upload/upload/1765691167.pdf')],['پرتال سهامداران','shareholder-portal','https://portal.sisco.hamkaransystem.cloud/'],['اطلاعات و صورت‌های مالی','financials','https://www.codal.ir/'],['تماس با امور سهام','shareholder-contact',legacy('/fa/page/contact_us.html')]]}]},
  {title:'مشتریان',id:'customers',groups:[{label:'خدمات مشتریان',items:[['پرتال فروش و مشتریان','customer-portal','https://www.payamgostar.com/']]}]},
  {title:'تأمین‌کنندگان',id:'suppliers',groups:[{label:'تأمین کالا و خدمات',items:[['سامانه مدیریت تأمین‌کنندگان (SRM) — لینک خارجی','srm','https://srm.sirjansteel.com/']]}]},
  {title:'ارتباط با ما',id:'contact',groups:[{label:'راه‌های ارتباطی',items:[['اطلاعات تماس','contact',legacy('/fa/contact.html')],['فرصت‌های شغلی و جذب سرمایه انسانی','careers','https://siscomidhco.adilar.com/'],['شناسایی پتانسیل‌های شغلی','career-potential','https://siscojob.sirjansteel.com/']]}]}
];
export const OUTBOUND = [
  {title:'پرتال سهامداران',description:'خدمات و اطلاع‌رسانی به سهامداران',href:'https://portal.sisco.hamkaransystem.cloud/',icon:'chart'},
  {title:'پرتال فروش و مشتریان',description:'ورود به سامانه مستقل مشتریان',href:'https://www.payamgostar.com/',icon:'users'},
  {title:'تأمین‌کنندگان',description:'مراجعه به سامانه مستقل SRM',href:'https://srm.sirjansteel.com/',icon:'truck'},
  {title:'فرصت‌های شغلی',description:'مشاهده موقعیت‌های شغلی و جذب نیرو',href:'https://siscomidhco.adilar.com/',icon:'briefcase'},
];
export const EMPLOYEE = [
  ['سامانه مدیریت عملکرد','https://arzyabi.sirjansteel.com/'],['سامانه آموزشی شرکت','https://elearning.sirjansteel.com/'],['اتوماسیون اداری','https://office.sirjansteel.com/'],['ایمیل سازمانی','https://mail.sisco.midhco.com/'],['حضور و غیاب','https://employ.sirjansteel.com/']
];
