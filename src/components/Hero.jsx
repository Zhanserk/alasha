import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-label">
          {t('hero_subtitle')}
        </div>

        <h1 className="hero-title">
          {t('hero_title')}
        </h1>

        <p className="hero-subtitle">
          {t('hero_desc')}
        </p>

        <div className="hero-actions">
          <a href="#rooms" className="btn-main">
            {t('hero_btn_rooms')}
          </a>

          <div className="hero-scroll">
            <div className="scroll-line" />
            {t('hero_scroll')}
          </div>
        </div>
      </div>
    </section>
  );
}