
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    appName: 'GharKaKaam',
    tagline: 'Find trusted local workers for all your needs',
    subtitle: 'Connecting skilled workers with customers in semi-urban and rural West Bengal. Empowering local communities through digital visibility and trust.',
    welcome: 'Welcome to',
    searchPlaceholder: 'Search for services...',
    search: 'Search',
    popularSearches: 'Popular searches',
    categories: 'Categories',
    topCategories: 'Top Categories',
    joinPlatform: 'Join Our Platform',
    joinDescription: 'Whether you need services or want to offer your skills, we connect the right people together.',
    becomeCustomer: 'Become a Customer',
    becomeWorker: 'Become a Worker',
    login: 'Login',
    signup: 'Sign Up',
    customer: 'Customer',
    worker: 'Worker',
    dashboard: 'Dashboard',
    services: 'Services',
    chat: 'Chat',
    help: 'Help',
    admin: 'Admin',
    viewAll: 'View All',
    getStarted: 'Get Started',
    bookNow: 'Book Now',
    postJob: 'Post Job',
    findWork: 'Find Work',
    earnings: 'Earnings',
    profile: 'Profile',
    notifications: 'Notifications',
    settings: 'Settings',
    logout: 'Logout'
  },
  hi: {
    appName: 'घरकाकाम',
    tagline: 'अपनी सभी जरूरतों के लिए भरोसेमंद स्थानीय कामगार खोजें',
    subtitle: 'अर्ध-शहरी और ग्रामीण पश्चिम बंगाल में कुशल कामगारों को ग्राहकों से जोड़ना। डिजिटल दृश्यता और भरोसे के माध्यम से स्थानीय समुदायों को सशक्त बनाना।',
    welcome: 'में आपका स्वागत है',
    searchPlaceholder: 'सेवाओं की खोज करें...',
    search: 'खोजें',
    popularSearches: 'लोकप्रिय खोजें',
    categories: 'श्रेणियां',
    topCategories: 'मुख्य श्रेणियां',
    joinPlatform: 'हमारे प्लेटफॉर्म में शामिल हों',
    joinDescription: 'चाहे आपको सेवाओं की जरूरत हो या आप अपने कौशल की पेशकश करना चाहते हों, हम सही लोगों को एक साथ जोड़ते हैं।',
    becomeCustomer: 'ग्राहक बनें',
    becomeWorker: 'कामगार बनें',
    login: 'लॉगिन',
    signup: 'साइन अप',
    customer: 'ग्राहक',
    worker: 'कामगार',
    dashboard: 'डैशबोर्ड',
    services: 'सेवाएं',
    chat: 'चैट',
    help: 'सहायता',
    admin: 'एडमिन',
    viewAll: 'सभी देखें',
    getStarted: 'शुरू करें',
    bookNow: 'अभी बुक करें',
    postJob: 'जॉब पोस्ट करें',
    findWork: 'काम खोजें',
    earnings: 'कमाई',
    profile: 'प्रोफाइल',
    notifications: 'सूचनाएं',
    settings: 'सेटिंग्स',
    logout: 'लॉगआउट'
  },
  bn: {
    appName: 'ঘরেরকাজ',
    tagline: 'আপনার সকল প্রয়োজনের জন্য বিশ্বস্ত স্থানীয় কর্মী খুঁজুন',
    subtitle: 'আধা-শহুরে এবং গ্রামীণ পশ্চিমবঙ্গে দক্ষ কর্মীদের গ্রাহকদের সাথে সংযুক্ত করা। ডিজিটাল দৃশ্যমানতা এবং বিশ্বাসের মাধ্যমে স্থানীয় সম্প্রদায়গুলিকে ক্ষমতায়ন।',
    welcome: 'এ স্বাগতম',
    searchPlaceholder: 'সেবা খুঁজুন...',
    search: 'খুঁজুন',
    popularSearches: 'জনপ্রিয় অনুসন্ধান',
    categories: 'বিভাগ',
    topCategories: 'প্রধান বিভাগ',
    joinPlatform: 'আমাদের প্ল্যাটফর্মে যোগ দিন',
    joinDescription: 'আপনার সেবার প্রয়োজন হোক বা আপনি আপনার দক্ষতা অফার করতে চান, আমরা সঠিক মানুষদের একসাথে সংযুক্ত করি।',
    becomeCustomer: 'গ্রাহক হন',
    becomeWorker: 'কর্মী হন',
    login: 'লগইন',
    signup: 'সাইন আপ',
    customer: 'গ্রাহক',
    worker: 'কর্মী',
    dashboard: 'ড্যাশবোর্ড',
    services: 'সেবা',
    chat: 'চ্যাট',
    help: 'সাহায্য',
    admin: 'অ্যাডমিন',
    viewAll: 'সব দেখুন',
    getStarted: 'শুরু করুন',
    bookNow: 'এখনই বুক করুন',
    postJob: 'জব পোস্ট করুন',
    findWork: 'কাজ খুঁজুন',
    earnings: 'আয়',
    profile: 'প্রোফাইল',
    notifications: 'বিজ্ঞপ্তি',
    settings: 'সেটিংস',
    logout: 'লগআউট'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
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
