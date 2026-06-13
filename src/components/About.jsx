import React from 'react';
import { useTranslation } from 'react-i18next';
import imgPanorama from '../assets/images/photo_2026-06-03_15-58-14.jpg'; 
import imgFence from '../assets/images/photo_2026-06-03_18-31-24.jpg';    
import imgForest from '../assets/images/photo_2026-06-03_15-40-17.jpg';   
import imgWindow from '../assets/images/photo_2026-06-03_15-39-52.jpg';   

export default function About() {
  const { t } = useTranslation();

  const galleryItems = [
    { id: 1, img: imgPanorama, title: t('gallery_1_title'), tag: t('gallery_1_desc') },
    { id: 2, img: imgFence, title: t('gallery_2_title'), tag: t('gallery_2_desc') },
    { id: 3, img: imgForest, title: t('gallery_3_title'), tag: t('gallery_3_desc') },
    { id: 4, img: imgWindow, title: t('gallery_4_title'), tag: t('gallery_4_desc') }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-label">{t('nav_about')}</div>
        
        <div className="about-header-block">
          <h2 className="about-heading">{t('about_title')}</h2>
          <p className="about-intro-text">
            {t('about_desc')}
          </p>


        </div>

        <div className="about-features">
          <div className="feature-item">
            <span className="feature-icon">🏔️</span>
            <span className="feature-name">{t('feature1_title')}</span>
            <span className="feature-desc">{t('feature1_desc')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌲</span>
            <span className="feature-name">{t('feature2_title')}</span>
            <span className="feature-desc">{t('feature2_desc')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🍳</span>
            <span className="feature-name">{t('feature3_title')}</span>
            <span className="feature-desc">{t('feature3_desc')}</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <span className="feature-name">{t('feature4_title')}</span>
            <span className="feature-desc">{t('feature4_desc')}</span>
          </div>
        </div>

        <div className="about-gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="sunny-card">
              <div className="sunny-img-box">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="sunny-glass-overlay">
                <span className="sunny-card-tag">{item.tag}</span>
                <h3 className="sunny-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="about-map-block">
          <h3 className="map-heading">{t('location_title')}</h3>
          <p className="map-subtext">{t('location_desc')}</p>
          <div className="about-map-wrapper">
            <iframe 
              src="https://maps.google.com/maps?q=%D0%9A%D0%B0%D1%82%D0%BE%D0%BD-%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%B9%20%D0%A2%D0%BE%D1%80%D0%B0%D0%B9%D0%B3%D1%8B%D1%80%D0%BE%D0%B2%D0%B0%20%D0%90%D0%B1%D0%B0%D1%8F&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение в Катон-Карагае"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}