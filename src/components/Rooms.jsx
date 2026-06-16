import React from 'react';
import { useTranslation } from 'react-i18next';
import roomInterior from '../assets/images/photo_2026-06-03_15-57-00.jpg';
import roomTable from '../assets/images/photo_2026-06-03_15-57-01.jpg';

export default function Rooms() {
  const { t } = useTranslation();

  const containerStyle = {
    width: '100%', height: '100%', minHeight: '100%', display: 'flex', alignItems: 'stretch', gap: '4px', background: 'transparent', overflow: 'hidden', padding: '0', margin: '0'
  };
  const imgBoxStyle = {
    flex: '1', height: '100%', minHeight: '450px', overflow: 'hidden', background: 'transparent', position: 'relative'
  };
  const imageStyle = {
    width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transform: 'scale(1.42) translateY(-4%)', transition: 'none'
  };

  return (
    <section id="rooms" className="rooms-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">{t('rooms_section')}</div>
          <h2 className="section-title">
            {t('rooms_title')}
          </h2>
        </div>

        <div className="room-card">
          <div className="room-gallery-container" style={containerStyle}>
            <div className="room-side-img-box" style={imgBoxStyle}>
              <img src={roomTable} alt="Интерьер номера" style={imageStyle} />
            </div>
            <div className="room-side-img-box" style={imgBoxStyle}>
              <img src={roomInterior} alt="Прихожая номера" style={imageStyle} />
            </div>
          </div>

          <div className="room-info">
            <div className="room-type">{t('rooms_type')}</div>
            <h3 className="room-title">
              {t('rooms_subtitle')}
            </h3>
            <p className="room-desc">
              {t('rooms_desc')}
            </p>

            <div className="room-amenities">
              <div className="amenity-card">
                <span className="amenity-icon">🛁</span>
                <span className="amenity-text">{t('room_feat1')}</span>
              </div>
              <div className="amenity-card">
                <span className="amenity-icon">🪟</span>
                <span className="amenity-text">{t('room_feat2')}</span>
              </div>
              <div className="amenity-card">
                <span className="amenity-icon">🌿</span>
                <span className="amenity-text">{t('room_feat3')}</span>
              </div>
              <div className="amenity-card">
                <span className="amenity-icon">🍳</span>
                <span className="amenity-text">{t('room_feat4')}</span>
              </div>
            </div>

            <div className="price-container">
              <div className="price-period">
                <span className="month">{t('room_2bed')}</span>
                <span className="cost">{t('price_per_night_25')}</span>
                <span className="include">{t('price_inc')}</span>
              </div>
              <div className="price-period highlight">
                <span className="month">{t('room_5bed')}</span>
                <span className="cost">{t('price_per_night_35')}</span>
                <span className="include">{t('price_inc')}</span>
              </div>
            </div>

            <a
              href="https://wa.me/+77027532918"
              target="_blank"
              rel="noreferrer"
              className="btn-book"
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
              {t('btn_book_wa')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}