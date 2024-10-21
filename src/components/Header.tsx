import React from 'react';
import { ArrowRight } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language } = useLanguage();

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="NXTLEVEL.GG Logo" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-secondary">NXTLEVEL.GG</span>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center hover-primary button-transition">
            {language === 'en' ? 'Join' : 'Rejoindre'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;