import React from 'react';
import { useTranslation } from 'react-i18next';
import footerBg from '../assets/images/photo_2026-06-03_15-57-01.jpg';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contacts" className="site-footer" style={{ backgroundImage: `url('${footerBg}')` }}>
      <div className="footer-overlay" />

      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            ALASHA <span>Katon</span>
          </div>
          <p className="footer-tagline">
            {t('footer_desc')}
          </p>
        </div>

        <div className="footer-col">
          <h4>{t('footer_nav')}</h4>
          <a href="#about">{t('nav_about')}</a>
          <a href="#rooms">{t('footer_rooms_prices')}</a>
          <a href="#contacts">{t('nav_contacts')}</a>
        </div>

        <div className="footer-col">
          <h4>{t('nav_contacts')}</h4>
          <p>{t('footer_address')}</p>
          <a href="tel:+77788883338" className="footer-phone">+7 (778) 888 33 38</a>
          <a
            href="https://wa.me/77788883338"
            target="_blank"
            rel="noreferrer"
            className="footer-wa"
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
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>{t('footer_rights')}</p>
        <p>{t('footer_tags')}</p>
      </div>
    </footer>
  );
}