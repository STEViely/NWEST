import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'th' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.products': 'สินค้า',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.contact': 'ติดต่อเรา',
    
    // Hero
    'hero.title': 'คุณภาพดีกว่า ราคาโดนใจ',
    'hero.subtitle': 'กระจกเลนส์วาย เพิ่มมุมมองกว้างขึ้น ลดมุมอับสายตา',
    'hero.cta': 'ดูสินค้าทั้งหมด',
    'hero.learn': 'เรียนรู้เพิ่มเติม',
    
    // Features
    'features.title': 'คุณสมบัติพิเศษ',
    'features.subtitle': 'กระจกเคลือบสีฟ้าคุณภาพสูง',
    'features.antiglare.title': 'ลดแสงสะท้อน',
    'features.antiglare.desc': 'การเคลือบสีฟ้าช่วยลดแสงจ้าจากไฟหน้ารถคันหลัง ลดอาการเมื่อยล้าสายตาในการขับขี่ตอนกลางคืน',
    'features.wideangle.title': 'มุมมองกว้างขึ้น',
    'features.wideangle.desc': 'ออกแบบมาให้มีมุมมองกว้างกว่ากระจกเดิมติดรถ ช่วยลดจุดบอดและเพิ่มความปลอดภัยในการขับขี่',
    'features.uv.title': 'ป้องกันรังสี UV',
    'features.uv.desc': 'สารเคลือบสีฟ้าช่วยกรองรังสี UV ที่เป็นอันตราย ปกป้องผิวหนังและดวงตาของผู้ขับขี่',
    'features.temp.title': 'ทนความร้อน',
    'features.temp.desc': 'ทนต่อสภาพอากาศร้อนจัดและเย็นจัด ไม่เกิดการบิดงอหรือเสื่อมสภาพง่าย',
    'features.water.title': 'ผิวกันน้ำ',
    'features.water.desc': 'น้ำฝนไหลออกได้เร็วขึ้น ไม่เกาะติดบนกระจก ทำให้มองเห็นชัดเจนในทุกสภาพอากาศ',
    'features.style.title': 'สไตล์ทันสมัย',
    'features.style.desc': 'เฉดสีฟ้าที่โดดเด่น เพิ่มความสวยงามให้กับรถของคุณ ดูหรูหราและทันสมัย',
    
    // Products
    'products.title': 'สินค้าของเรา',
    'products.subtitle': 'เลือกตามยี่ห้อรถยนต์',
    'products.viewall': 'ดูทั้งหมด',
    'products.honda': 'ฮอนด้า',
    'products.toyota': 'โตโยต้า',
    'products.tesla': 'เทสล่า',
    'products.suzuki': 'ซูซูกิ',
    'products.nissan': 'นิสสัน',
    'products.mazda': 'มาสด้า',
    'products.byd': 'BYD',
    'products.other': 'ยี่ห้ออื่นๆ',
    'products.available': 'สินค้าพร้อมจำหน่าย',
    'products.contact': 'สอบถามราคา',
    
    // About
    'about.title': 'เกี่ยวกับ N-WEST',
    'about.subtitle': 'ผู้นำด้านกระจกมองข้างรถยนต์',
    'about.story': 'เรื่องราวของเรา',
    'about.story.text': 'N-WEST เริ่มต้นจากความมุ่งมั่นในการพัฒนากระจกมองข้างที่มีคุณภาพสูงสุด เราเชื่อว่าความปลอดภัยในการขับขี่เริ่มต้นจากการมองเห็นที่ดี กระจกเคลือบสีฟ้าของเราถูกพัฒนามาเพื่อตอบโจทย์ผู้ขับขี่ยุคใหม่ที่ต้องการทั้งความปลอดภัยและสไตล์',
    'about.mission': 'พันธกิจของเรา',
    'about.mission.text': 'มุ่งมั่นพัฒนาผลิตภัณฑ์กระจกมองข้างที่มีคุณภาพสูงสุด ด้วยเทคโนโลยีการเคลือบสีฟ้าที่ทันสมัย เพื่อความปลอดภัยและความพึงพอใจสูงสุดของลูกค้า',
    'about.vision': 'วิสัยทัศน์',
    'about.vision.text': 'เป็นผู้นำตลาดกระจกมองข้างรถยนต์ในประเทศไทยและภูมิภาคเอเชียตะวันออกเฉียงใต้',
    
    // Contact
    'contact.title': 'ติดต่อเรา',
    'contact.subtitle': 'พร้อมให้บริการคุณ',
    'contact.name': 'ชื่อ-นามสกุล',
    'contact.email': 'อีเมล',
    'contact.phone': 'เบอร์โทรศัพท์',
    'contact.message': 'ข้อความ',
    'contact.send': 'ส่งข้อความ',
    'contact.address': 'ที่อยู่',
    'contact.address.text': 'บางนา-ตราด กม.26 เอแบคบางนา ต.บางเสาธง อ.บางเสาธง จ.สมุทรปราการ 10540',
    'contact.hours': 'เวลาทำการ',
    'contact.hours.text': 'จันทร์ - เสาร์: 9:00 - 18:00',
    
    // Footer
    'footer.rights': 'สงวนลิขสิทธิ์',
    'footer.tagline': 'กระจกมองข้างพรีเมียม เคลือบสีฟ้า มุมมองกว้างกว่าเดิม',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Premium Side Mirrors',
    'hero.subtitle': 'Blue Coated with Wider Viewing Angle',
    'hero.cta': 'View All Products',
    'hero.learn': 'Learn More',
    
    // Features
    'features.title': 'Special Features',
    'features.subtitle': 'High-quality blue coated mirrors',
    'features.antiglare.title': 'Anti-Glare',
    'features.antiglare.desc': 'Blue coating reduces glare from headlights of following vehicles, reducing eye fatigue during night driving.',
    'features.wideangle.title': 'Wider View',
    'features.wideangle.desc': 'Designed with a wider viewing angle than OEM mirrors, helping to reduce blind spots and improve driving safety.',
    'features.uv.title': 'UV Protection',
    'features.uv.desc': 'Blue coating helps filter harmful UV rays, protecting the driver\'s skin and eyes.',
    'features.temp.title': 'Heat Resistant',
    'features.temp.desc': 'Withstands extreme hot and cold weather conditions without warping or deteriorating.',
    'features.water.title': 'Hydrophobic Surface',
    'features.water.desc': 'Rainwater slides off quickly without sticking to the glass, ensuring clear visibility in all weather conditions.',
    'features.style.title': 'Modern Style',
    'features.style.desc': 'Distinctive blue tint adds elegance to your vehicle, looking luxurious and modern.',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Browse by Car Brand',
    'products.viewall': 'View All',
    'products.honda': 'Honda',
    'products.toyota': 'Toyota',
    'products.tesla': 'Tesla',
    'products.suzuki': 'Suzuki',
    'products.nissan': 'Nissan',
    'products.mazda': 'Mazda',
    'products.byd': 'BYD',
    'products.other': 'Other Brands',
    'products.available': 'Available',
    'products.contact': 'Contact for Price',
    
    // About
    'about.title': 'About N-WEST',
    'about.subtitle': 'Leader in Automotive Side Mirrors',
    'about.story': 'Our Story',
    'about.story.text': 'N-WEST started with a commitment to developing the highest quality side mirrors. We believe that driving safety begins with good visibility. Our blue-coated mirrors are developed to meet the needs of modern drivers who want both safety and style.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'Committed to developing the highest quality side mirror products with modern blue coating technology for the safety and ultimate satisfaction of our customers.',
    'about.vision': 'Vision',
    'about.vision.text': 'To be the market leader in automotive side mirrors in Thailand and Southeast Asia.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to Serve You',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.address.text': 'Bangna-Trad Km.26, ABAC Bangna, Bang Sao Thong, Bang Sao Thong, Samut Prakan 10540',
    'contact.hours': 'Business Hours',
    'contact.hours.text': 'Mon - Sat: 9:00 AM - 6:00 PM',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.tagline': 'Premium Side Mirrors with Blue Coating and Wider Viewing Angle',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('th');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
