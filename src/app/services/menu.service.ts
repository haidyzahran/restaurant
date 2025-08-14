import { Injectable } from '@angular/core';

interface PriceMap {
  [key: string]: number;
}


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }



  // menu
  menu = [
  {
    title: 'ركن المشاوي',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: " + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food4.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: ""}
      
    ],
    note: 'يقدم مع المشاوي عيش وسلطات',
    catImg: 'assets/images/food6.jpg',
  },
  {
    title: 'ركن الفراخ والحمام',
    items: [
      { name: 'فرخة تكا', imgUrl: 'assets/images/food1.jpg', price: { "ربع": 210, "نص": 400, "فرخة": 800 } as PriceMap, description: ""},
      { name: 'فرخة قطع', imgUrl: 'assets/images/food2.jpg', price: { "ربع": 210, "نص": 400, "فرخة": 800 } as PriceMap, description: ""},
      { name: 'حمام ارز', imgUrl: 'assets/images/food3.jpg', price: { "فرخة": 210 } as PriceMap, description: ""},
      { name: 'حمام فريك', imgUrl: 'assets/images/food4.jpg', price: { "فرخة": 210 } as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food9.jpg',
  },
  {
    title: 'ركن الوجبات',
    items: [
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food2.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food1.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food3.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food4.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food5.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food7.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة فاتنوم', imgUrl: 'assets/images/food5.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة قناص', imgUrl: 'assets/images/food6.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'وجبة الصاعقة', imgUrl: 'assets/images/food15.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: 'عند طلب صدر فراخ ( 15 جنيه ) فرق سعر حسب المتاح',
    catImg: 'assets/images/food2.jpg',
  },
  {
    title: 'ركن الشاورما',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpg', price: { "": 210 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
    catImg: 'assets/images/food10.jpg',
  },
  {
    title: 'الصواني',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food2.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food6.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food7.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
    catImg: 'assets/images/food11.jpg',
  },
  {
    title: 'الشورب',
    items: [
      { name: 'كباب بتلو', imgUrl: 'assets/images/food1.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food5.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: 'كباب بتلو', imgUrl: 'assets/images/food3.jpg', price: { "ربع": 210, "نص": 400, "كيلو": 800 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
    catImg: 'assets/images/food12.jpg',
  },
  {
    title: 'المقبلات',
    items: [
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food2.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food1.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food3.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food5.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food4.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق سمبوسة لحمة 5 قطع', imgUrl: 'assets/images/food3.jpg', price: { "": 60 } as PriceMap, description: ""},
      { name: 'طبق أرز شعرية', imgUrl: 'assets/images/food1.jpg', price: { "": 50 } as PriceMap, description: ""},
      { name: 'طبق كبيبة 5 قطع', imgUrl: 'assets/images/food2.jpg', price: { "": 70 } as PriceMap, description: "" }
    ],
    note: '',
    catImg: 'assets/images/food13.jpg',
  },
  {
    title: 'الكريب',
    items: [
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food1.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food3.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food4.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food5.jpg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food7.jpg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food6.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food5.jpg', price: { "": 55 } as PriceMap, description: ""},
      { name: ' كريب بطاطس', imgUrl: 'assets/images/food2.jpg', price: { "": 55 } as PriceMap, description: "شاورما فراخ: أرز + شاورما + بطاطس + طحينة + عيش شامي"}
    ],
    note: '',
    catImg: 'assets/images/food14.jpg',
  },
  {
    title: 'السلطات',
    items: [
      { name: 'سلطة بلدي', imgUrl: 'assets/images/food2.jpg', price: { "": 15} as PriceMap, description: ""},
      { name: 'سلطة طحينة', imgUrl: 'assets/images/food1.jpg', price: { "": 10 } as PriceMap, description: ""},
      { name: 'سلطة تومية', imgUrl: 'assets/images/food7.jpg', price: { "": 5 } as PriceMap, description: ""},
      { name: 'مخلل', imgUrl: 'assets/images/food5.jpg', price: { "": 5} as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food15.jpg',
  },
  {
    title: 'المشروبات',
    items: [
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food1.jpg', price: { "": 10 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food2.jpg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food3.jpg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food4.jpg', price: { "": 15 } as PriceMap, description: ""},
      { name: 'مياه صغيرة', imgUrl: 'assets/images/food5.jpg', price: { "": 5 } as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food17.jpg',
  },
  {
    title: 'الحواوشي',
    items: [
      { name: 'حواوشي', imgUrl: 'assets/images/food1.jpg', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 } as PriceMap, description: ""},
      { name: 'حواوشي كفته', imgUrl: 'assets/images/food2.jpg', price: { "بلدي": 210, "سوري ص": 400, "سوري ك": 800 } as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food16.jpg',
  },
  {
    title: 'السندوتشات',
    items: [
      { name: 'بطاطس', imgUrl: 'assets/images/food6.jpg', price: { "كيزر": 210, "وسط": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'سجق', imgUrl: 'assets/images/food7.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'كفته', imgUrl: 'assets/images/food5.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food2.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food3.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food4.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food5.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food6.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food7.jpg', price: { "كيزر": 210, "نص": 400, "كبير": 800 } as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food5.jpg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food6.jpg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food1.jpg', price: { "كيزر": 210, "نص": 400} as PriceMap, description: ""},
      { name: 'بانيه مقلي', imgUrl: 'assets/images/food2.jpg', price: { "كيزر": 210, "كبير": 800 } as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food18.jpg',
  },
  {
    title: 'الطواجن',
    items: [
      { name: 'خضار اليوم باللحمة', imgUrl: 'assets/images/food2.jpg', price: { "صغير": 15, "كبير": 25 } as PriceMap, description: ""},
      { name: 'ملوخية', imgUrl: 'assets/images/food1.jpg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'بامية سادة', imgUrl: 'assets/images/food7.jpg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'خضار اليوم سادة', imgUrl: 'assets/images/food5.jpg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'بامية باللحمة البلدي', imgUrl: 'assets/images/food3.jpg', price: { "كبير": 400 } as PriceMap, description: ""},
      { name: 'مكرون بشاميل', imgUrl: 'assets/images/food4.jpg', price: { "كبير": 50} as PriceMap, description: ""}
    ],
    note: '',
    catImg: 'assets/images/food19.jpg',
  }
 
  ];
  
  getKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }

  getAllMenu() {
    return this.menu;
  }

 

}
