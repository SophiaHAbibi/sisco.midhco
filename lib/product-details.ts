/* Technical descriptions are qualitative. Grade, assay, dimensions and certificates
   must be supplied and verified by SISCO before publication. */
export type ProductId='concentrate'|'pellet'|'sponge'|'billet';
export const PRODUCT_DETAILS:Record<ProductId,{
 intro:string; rawMaterial:string;process:string;destination:string;facility:string;
 stages:string[];applications:string[];highlight:string;source:string;
}>={
  concentrate:{
    intro:'کنسانتره سنگ‌آهن از فرآوری سنگ‌آهن مگنتیت حاصل می‌شود و به‌عنوان ماده اولیه برای تولید گندله مورد استفاده قرار می‌گیرد.',
    rawMaterial:'سنگ‌آهن مگنتیت',process:'فرآوری و تغلیظ سنگ‌آهن',destination:'واحد گندله‌سازی',facility:'مجتمع سیرجان',
    stages:['سنگ‌آهن', 'فرآوری و جدایش', 'کنسانتره', 'گندله‌سازی'],
    applications:['خوراک تولید گندله سنگ‌آهن','بخشی از زنجیره تأمین واحدهای احیای مستقیم و فولاد'],
    highlight:'اولین محصول فرآوری‌شده در مسیر تبدیل سنگ‌آهن به فولاد',
    source:'https://sisco.midhco.com/fa/product/%D8%A2%D9%87%D9%86/19-%DA%A9%D9%86%D8%B3%D8%A7%D9%86%D8%AA%D8%B1%D9%87-%D8%B3%D9%86%DA%AF-%D8%A2%D9%87%D9%86.html'
  },
  pellet:{
    intro:'گندله سنگ‌آهن با گلوله‌کردن کنسانتره و پخت آن تولید می‌شود و به‌عنوان خوراک واحدهای احیای مستقیم کاربرد دارد.',
    rawMaterial:'کنسانتره سنگ‌آهن',process:'گندله‌سازی و پخت',destination:'واحد احیای مستقیم',facility:'مجتمع سیرجان',
    stages:['کنسانتره', 'گلوله‌سازی', 'پخت گندله', 'احیای مستقیم'],
    applications:['خوراک کارخانه احیای مستقیم','تأمین ماده اولیه برای تولید آهن اسفنجی'],
    highlight:'حلقه اتصال فرآوری سنگ‌آهن به احیای مستقیم',
    source:'https://sisco.midhco.com/fa/product/%D9%81%D9%88%D9%84%D8%A7%D8%AF/1-%DA%AF%D9%86%D8%AF%D9%84%D9%87-%D8%B3%D9%86%DA%AF-%D8%A2%D9%87%D9%86.html'
  },
  sponge:{
    intro:'آهن اسفنجی از احیای مستقیم گندله سنگ‌آهن تولید می‌شود؛ محصولی که در ادامه زنجیره تولید برای فولادسازی به کار می‌رود.',
    rawMaterial:'گندله سنگ‌آهن',process:'احیای مستقیم',destination:'واحد فولادسازی',facility:'مجتمع بردسیر',
    stages:['گندله', 'احیای مستقیم', 'آهن اسفنجی', 'فولادسازی'],
    applications:['ماده اولیه فولادسازی','استفاده در زنجیره تولید فولاد'],
    highlight:'تبدیل گندله به ماده اولیه قابل استفاده در فولادسازی',
    source:'https://sisco.midhco.com/fa/product/%D8%A2%D9%87%D9%86/18-%D8%A2%D9%87%D9%86-%D8%A7%D8%B3%D9%81%D9%86%D8%AC%DB%8C-%D9%88-%D8%A8%D8%B1%DB%8C%DA%A9%D8%AA.html'
  },
  billet:{
    intro:'شمش فولادی یا بیلت، محصول نیمه‌نهایی فولادسازی و ریخته‌گری مداوم است و در تولید محصولات فولادی پایین‌دستی استفاده می‌شود.',
    rawMaterial:'فولاد مذاب',process:'ریخته‌گری مداوم',destination:'صنایع نورد و تبدیل فولاد',facility:'مجتمع بردسیر',
    stages:['فولاد مذاب', 'ریخته‌گری مداوم', 'شمش فولادی', 'تولید مقاطع'],
    applications:['خوراک خطوط نورد','ماده اولیه تولید میلگرد، مفتول و دیگر مقاطع فولادی'],
    highlight:'حلقه پایانی زنجیره تولید شرکت، از سنگ‌آهن تا شمش',
    source:'https://sisco.midhco.com/fa/product/%D9%81%D9%88%D9%84%D8%A7%D8%AF/17-%D8%B4%D9%85%D8%B4-%D9%81%D9%88%D9%84%D8%A7%D8%AF%DB%8C.html'
  }
};
