import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "nav_about": "О нас",
      "nav_rooms": "Номера",
      "nav_contacts": "Контакты",
      "btn_book": "Забронировать",
      "btn_book_wa": "Забронировать в WhatsApp",
      
      // Главный экран (Hero)
      "hero_subtitle": "Катон-Карагайский район • Алтай",
      "hero_title": "Отдых в сердце великого Алтая ",
      "hero_desc": "Эко-гостиница у подножия священной Белухи. Первозданная природа, чистейший горный воздух и уют настоящего деревянного дома.",
      "hero_btn_rooms": "Смотреть номера",
      "hero_scroll": "Листай",
      "hero_stat1": "2300 м над уровнем моря",
      "hero_stat2": "3× питание включено",

      // О нас (About)
      "about_title": "Уникальная природа Катон-Карагая",
      "about_desc": "Откройте для себя нетронутую красоту Алтайских гор. Чистейший воздух, вековые хвойные леса и величественные вершины создают идеальные условия для перезагрузки, восстановления сил и полного отдыха от городской суеты. Комфортабельные эко-дома из натуральной древесины позволят вам просыпаться под пение птиц и шёпот вековых сосен.",
      
      // Features
      "feature1_title": "Алтай",
      "feature1_desc": "У подножия священных гор",
      "feature2_title": "Эко",
      "feature2_desc": "100% натуральное дерево",
      "feature3_title": "Питание",
      "feature3_desc": "Включено в общую стоимость",
      "feature4_title": "Релакс",
      "feature4_desc": "Полная тишина и покой",

      // Галерея
      "gallery_1_title": "Величие",
      "gallery_1_desc": "Горная Панорама",
      "gallery_2_title": "Простор",
      "gallery_2_desc": "Солнечная Долина",
      "gallery_3_title": "Природа",
      "gallery_3_desc": "Алтайский Лес",
      "gallery_4_title": "Уединение",
      "gallery_4_desc": "Вид через Окно",
      
      // Расположение
      "location_title": "Наше Расположение",
      "location_desc": "Катон-Карагай, пересечение улиц Торайгырова и Абая",

      // Номера (Rooms)
      "rooms_section": "Проживание",
      "rooms_title": "Наши номера — уют и природа рядом",
      "rooms_type": "Стандарт / Семейный",
      "rooms_subtitle": "Уютные эко-номера на 2 и 5 человек",
      "rooms_desc": "Просторные и светлые номера из натурального дерева. Мягкие кровати, качественный текстиль, собственная ванная комната и панорамный вид на Алтайские горы. Просыпайтесь с видом на вечные вершины.",
      "room_feat1": "Ванная комната",
      "room_feat2": "Панорамное окно",
      "room_feat3": "Натуральное дерево",
      "room_feat4": "3-разовое питание",
      "room_2bed": "2-местный",
      "room_5bed": "5-местный",
      "price_per_night_25": "35 000 ₸ / сутки",
      "price_per_night_35": "35 000 ₸ / сутки",
      "price_inc": "✓ Питание включено",

      // Подвал (Footer)
      "footer_desc": "Eco-hotel у подножия Алтайских гор. Место, где природа говорит тихо — и это лучшее, что можно услышать.",
      "footer_nav": "Навигация",
      "footer_rooms_prices": "Номера и цены",
      "footer_address": "ВКО, Катон-Карагайский район",
      "footer_rights": "© 2026 ALASHA Katon. Все права защищены.",
      "footer_tags": "Катон-Карагай • Алтай • Казахстан"
    }
  },
  kz: {
    translation: {
      "nav_about": "Біз туралы",
      "nav_rooms": "Нөмірлер",
      "nav_contacts": "Байланыс",
      "btn_book": "Брондау",
      "btn_book_wa": "WhatsApp-та брондау",
      
      "hero_subtitle": "Қатонқарағай ауданы • Алтай",
      "hero_title": "Ұлы Алтай жүрегіндегі демалыс",
      "hero_desc": "Қасиетті Мұзтау бөктеріндегі эко-қонақ үй. Тұмса табиғат, сап-таза тау ауасы және нағыз ағаш үйдің жайлылығы.",
      "hero_btn_rooms": "Нөмірлерді көру",
      "hero_scroll": "Төмен",
      "hero_stat1": "теңіз деңгейінен 2300 м биіктікте",
      "hero_stat2": "3 уақыт тамақтану кіреді",

      "about_title": "Қатонқарағайдың ғажайып табиғаты",
      "about_desc": "Алтай тауларының тұмса сұлулығын ашыңыз. Сап-таза ауа, ғасырлық қылқан жапырақты ормандар мен асқақ шыңдар жанды жаңартуға, күш жинауға және қала қарбаласынан толық демалуға тамаша жағдай жасайды. Табиғи ағаштан салынған жайлы эко-үйлер құстардың әнімен және ғасырлық қарағайлардың сыбдырымен оянуға мүмкіндік береді.",
      
      "feature1_title": "Алтай",
      "feature1_desc": "Қасиетті таулардың бөктерінде",
      "feature2_title": "Эко",
      "feature2_desc": "100% табиғи ағаш",
      "feature3_title": "Тамақтану",
      "feature3_desc": "Жалпы құнына кіреді",
      "feature4_title": "Релакс",
      "feature4_desc": "Толық тыныштық пен бейбітшілік",

      "gallery_1_title": "Ұлылық",
      "gallery_1_desc": "Тау панорамасы",
      "gallery_2_title": "Кеңістік",
      "gallery_2_desc": "Күн шуақты алқап",
      "gallery_3_title": "Табиғат",
      "gallery_3_desc": "Алтай орманы",
      "gallery_4_title": "Оңашалану",
      "gallery_4_desc": "Терезеден көрініс",
      
      "location_title": "Біздің орналасқан жеріміз",
      "location_desc": "Қатонқарағай, Торайғыров пен Абай көшелерінің қиылысы",

      "rooms_section": "Тұру",
      "rooms_title": "Біздің нөмірлер — жайлылық пен табиғат қатарлас",
      "rooms_type": "Стандарт / Отбасылық",
      "rooms_subtitle": "2 және 5 адамға арналған жайлы эко-нөмірлер",
      "rooms_desc": "Табиғи ағаштан жасалған кең әрі жарық нөмірлер. Жұмсақ төсектер, сапалы тоқыма, жеке жуынатын бөлме және Алтай тауларына ашылатын панорамалық көрініс. Мәңгілік шыңдарға қарап ояныңыз.",
      "room_feat1": "Жуынатын бөлме",
      "room_feat2": "Панорамалық терезе",
      "room_feat3": "Табиғи ағаш",
      "room_feat4": "3 уақыт тамақтану",
      "room_2bed": "2 орындық",
      "room_5bed": "5 орындық",
      "price_per_night_25": "25 000 ₸ / тәулік",
      "price_per_night_35": "35 000 ₸ / тәулік",
      "price_inc": "✓ Тамақтану кіреді",

      "footer_desc": "Алтай тауларының бөктеріндегі эко-қонақ үй. Табиғат ақырын сөйлейтін орын — және бұл естуге болатын ең жақсы нәрсе.",
      "footer_nav": "Навигация",
      "footer_rooms_prices": "Нөмірлер мен бағалар",
      "footer_address": "ШҚО, Қатонқарағай ауданы",
      "footer_rights": "© 2026 ALASHA Katon. Барлық құқықтар қорғалған.",
      "footer_tags": "Қатонқарағай • Алтай • Қазақстан"
    }
  },
  en: {
    translation: {
      "nav_about": "About Us",
      "nav_rooms": "Rooms",
      "nav_contacts": "Contacts",
      "btn_book": "Book Now",
      "btn_book_wa": "Book on WhatsApp",
      
      "hero_subtitle": "Katon-Karagai district • Altai",
      "hero_title": "Rest in the heart of the great Altai",
      "hero_desc": "Eco-hotel at the foot of the sacred Belukha Mountain. Pristine nature, purest mountain air, and the coziness of a real wooden house.",
      "hero_btn_rooms": "View rooms",
      "hero_scroll": "Scroll",
      "hero_stat1": "2300 m above sea level",
      "hero_stat2": "3x meals included",

      "about_title": "The unique nature of Katon-Karagai",
      "about_desc": "Discover the untouched beauty of the Altai Mountains. Purest air, centuries-old coniferous forests, and majestic peaks create ideal conditions for rebooting, recovering, and fully resting from the city bustle. Comfortable eco-houses made of natural wood will allow you to wake up to the singing of birds and the whisper of centuries-old pines.",
      
      "feature1_title": "Altai",
      "feature1_desc": "At the foot of the sacred mountains",
      "feature2_title": "Eco",
      "feature2_desc": "100% natural wood",
      "feature3_title": "Meals",
      "feature3_desc": "Included in the total price",
      "feature4_title": "Relax",
      "feature4_desc": "Complete silence and peace",

      "gallery_1_title": "Majesty",
      "gallery_1_desc": "Mountain Panorama",
      "gallery_2_title": "Space",
      "gallery_2_desc": "Sunny Valley",
      "gallery_3_title": "Nature",
      "gallery_3_desc": "Altai Forest",
      "gallery_4_title": "Solitude",
      "gallery_4_desc": "View through the Window",
      
      "location_title": "Our Location",
      "location_desc": "Katon-Karagai, intersection of Toraigyrov and Abay streets",

      "rooms_section": "Accommodation",
      "rooms_title": "Our rooms — coziness and nature nearby",
      "rooms_type": "Standard / Family",
      "rooms_subtitle": "Cozy eco-rooms for 2 and 5 people",
      "rooms_desc": "Spacious and bright rooms made of natural wood. Soft beds, high-quality textiles, private bathroom, and a panoramic view of the Altai Mountains. Wake up with a view of the eternal peaks.",
      "room_feat1": "Bathroom",
      "room_feat2": "Panoramic window",
      "room_feat3": "Natural wood",
      "room_feat4": "3 meals a day",
      "room_2bed": "2-bed",
      "room_5bed": "5-bed",
      "price_per_night_25": "25 000 ₸ / night",
      "price_per_night_35": "35 000 ₸ / night",
      "price_inc": "✓ Meals included",

      "footer_desc": "Eco-hotel at the foot of the Altai Mountains. A place where nature speaks quietly — and this is the best thing you can hear.",
      "footer_nav": "Navigation",
      "footer_rooms_prices": "Rooms and prices",
      "footer_address": "East Kazakhstan region, Katon-Karagai district",
      "footer_rights": "© 2026 ALASHA Katon. All rights reserved.",
      "footer_tags": "Katon-Karagai • Altai • Kazakhstan"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", 
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;