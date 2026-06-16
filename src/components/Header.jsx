import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Массив доступных языков для удобного вывода
  const languages = ['ru', 'kz', 'en'];

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          ALASHA 
        </div>
        <nav className="nav-menu">
          <a href="#about">{t('nav_about')}</a>
          <a href="#rooms">{t('nav_rooms')}</a>
          <a href="#contacts">{t('nav_contacts')}</a>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          
          {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ */}
          <div className="lang-switcher">
            {languages.map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`lang-btn ${i18n.language === lng ? 'active' : ''}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/+77027532918"
            target="_blank"
            rel="noreferrer"
            className="btn-header"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-17844260471/DUFTCNyi3t0bEPec57xC',
                  'value': 1.0,
                  'currency': 'USD'
                });
              }
            }}
          >
            {t('btn_book')}
          </a>
        </div>
      </div>
    </header>
  );
}