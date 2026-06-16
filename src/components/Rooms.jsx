import React, { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

import roomImg3 from '../assets/images/photo_2026-06-16_11-38-58.jpg';
import roomImg4 from '../assets/images/photo_2026-06-16_11-39-00.jpg';
import roomImg2 from '../assets/images/photo_2026-06-16_11-39-02.jpg';
import roomImg1 from '../assets/images/photo_2026-06-16_11-39-05.jpg';

const roomImages = [
  { src: roomImg3, alt: 'Номер с видом', pos: 'center 60%' },
  { src: roomImg4, alt: 'Вид номера',    pos: 'center 50%' },
  { src: roomImg1, alt: 'Ванная',        pos: 'center center' },
  { src: roomImg2, alt: 'Удобства',      pos: 'center 40%' },
];

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <polyline points="10,2 4,8 10,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <polyline points="6,2 12,8 6,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ══════════════════════════════════════
   ЛАЙТБОКС — полноэкранный просмотр
══════════════════════════════════════ */
function Lightbox({ startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const total = roomImages.length;

  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total]);

  // Закрытие по клику на фон
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Свайп пальцем
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart.current = null;
  };

  return (
    <div
      onClick={handleBackdrop}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.96)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'lbFadeIn 0.22s ease',
      }}
    >
      <style>{`
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbImgIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lb-img {
          max-width: 100vw;
          max-height: 100vh;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          animation: lbImgIn 0.25s ease;
          user-select: none;
          -webkit-user-drag: none;
        }
        .lb-btn {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10000;
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.2s;
        }
        .lb-btn:hover { background: rgba(201,169,110,0.85); border-color: #C9A96E; }
        .lb-btn:active { transform: translateY(-50%) scale(0.92); }
        .lb-btn-prev { left: 16px; }
        .lb-btn-next { right: 16px; }
        .lb-close {
          position: fixed;
          top: 18px; right: 18px;
          z-index: 10000;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 20px; line-height: 1;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.2s;
        }
        .lb-close:hover { background: rgba(201,169,110,0.85); border-color: #C9A96E; }
        .lb-counter {
          position: fixed;
          bottom: 24px; left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px; letter-spacing: 3px;
          color: rgba(255,255,255,0.6);
        }
        .lb-counter span { color: #C9A96E; font-weight: 600; }
        .lb-dots {
          position: fixed;
          bottom: 52px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 8px;
          z-index: 10000;
        }
        .lb-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.25s;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .lb-dot.active {
          background: #C9A96E;
          transform: scale(1.4);
        }
      `}</style>

      {/* Крестик */}
      <button className="lb-close" onClick={onClose} aria-label="Закрыть">✕</button>

      {/* Фото */}
      <img
        key={current}
        src={roomImages[current].src}
        alt={roomImages[current].alt}
        className="lb-img"
        style={{ objectPosition: roomImages[current].pos }}
      />

      {/* Стрелки */}
      <button className="lb-btn lb-btn-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Назад">
        <ArrowLeft />
      </button>
      <button className="lb-btn lb-btn-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Вперёд">
        <ArrowRight />
      </button>

      {/* Точки */}
      <div className="lb-dots">
        {roomImages.map((_, i) => (
          <div
            key={i}
            className={`lb-dot${i === current ? ' active' : ''}`}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
          />
        ))}
      </div>

      {/* Счётчик */}
      <div className="lb-counter">
        <span>{current + 1}</span> / {total}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   ОСНОВНОЙ КОМПОНЕНТ
══════════════════════════════════════ */
export default function Rooms() {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = закрыт

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section id="rooms" className="rooms-section">
      <style>{`
        /* ══════════════════════════════════════
           ОБЩИЕ
        ══════════════════════════════════════ */
        .room-main-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .room-main-swiper .swiper-slide-active img {
          transform: scale(1.02);
        }

        /* Курсор-лупа при наведении на фото */
        .room-main-swiper-wrap { cursor: zoom-in; }

        /* Счётчик */
        .room-slide-count {
          position: absolute;
          top: 14px; left: 14px; z-index: 10;
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px; letter-spacing: 2px;
          color: rgba(255,255,255,0.9);
          background: rgba(26,46,40,0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 4px 12px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          pointer-events: none;
        }
        .room-slide-count span { color: #C9A96E; font-weight: 600; }

        /* Подсказка "нажми для просмотра" */
        .room-zoom-hint {
          position: absolute;
          bottom: 14px; left: 14px; z-index: 10;
          font-size: 10px; letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          background: rgba(26,46,40,0.45);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 4px 10px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          pointer-events: none;
          display: flex; align-items: center; gap: 5px;
        }

        /* Стрелки */
        .room-nav {
          position: absolute;
          bottom: 14px; right: 14px; z-index: 10;
          display: flex; gap: 8px;
        }
        .room-nav-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff; cursor: pointer; outline: none;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.25s ease;
        }
        .room-nav-btn:hover { background: rgba(201,169,110,0.9); border-color: #C9A96E; transform: scale(1.08); }
        .room-nav-btn:active { transform: scale(0.93); }

        /* Миниатюры */
        .room-thumbs-wrap { width: 100%; padding: 5px 0 0; flex-shrink: 0; }
        .room-thumbs-swiper { width: 100%; }
        .room-thumbs-swiper .swiper-slide {
          cursor: pointer;
          opacity: 0.55;
          transition: opacity 0.3s, outline 0.3s;
          overflow: hidden;
        }
        .room-thumbs-swiper .swiper-slide img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .room-thumbs-swiper .swiper-slide:hover { opacity: 0.8; }
        .room-thumbs-swiper .swiper-slide:hover img { transform: scale(1.05); }
        .room-thumbs-swiper .swiper-slide-thumb-active {
          opacity: 1;
          outline: 2px solid #C9A96E;
          outline-offset: -2px;
        }

        /* ══════════════════════════════════════
           ДЕСКТОП
        ══════════════════════════════════════ */
        @media (min-width: 769px) {
          .rooms-section .room-card {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.6);
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.02);
            margin-bottom: 40px;
          }
          .rooms-section .room-gallery-container {
            display: flex; flex-direction: column;
            min-height: 520px; height: 100%;
          }
          .room-main-swiper-wrap {
            flex: 1; min-height: 0;
            position: relative; overflow: hidden;
          }
          .room-main-swiper { width: 100%; height: 100%; min-height: 440px; }
          .room-thumbs-swiper .swiper-slide { aspect-ratio: 4 / 3; }
          .room-zoom-hint { display: none; } /* на десктопе подсказка не нужна */
        }

        /* ══════════════════════════════════════
           МОБИЛЬНЫЙ
        ══════════════════════════════════════ */
        @media (max-width: 768px) {
          .rooms-section .container { padding-left: 0 !important; padding-right: 0 !important; }
          .rooms-section .section-header { padding: 0 20px; }

          .rooms-section .room-card {
            display: flex !important; flex-direction: column !important;
            grid-template-columns: unset !important;
            border-radius: 0 !important;
            border-left: none !important; border-right: none !important;
            margin-bottom: 0 !important;
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.6);
            overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.02);
          }

          .rooms-section .room-gallery-container {
            width: 100%; display: flex; flex-direction: column;
          }

          /* Фото высокое */
          .room-main-swiper-wrap {
            position: relative; overflow: hidden;
            width: 100%; height: 520px;
          }
          .room-main-swiper {
            position: absolute !important;
            top: 0; left: 0;
            width: 100% !important; height: 100% !important;
          }

          /* Стрелки по бокам */
          .room-nav {
            bottom: auto; right: auto;
            top: 50%; left: 0; right: 0;
            transform: translateY(-50%);
            justify-content: space-between;
            padding: 0 12px;
            pointer-events: none;
          }
          .room-nav-btn {
            pointer-events: all;
            width: 42px !important; height: 42px !important;
            background: rgba(26,46,40,0.55) !important;
          }
          .room-nav-btn:hover { transform: none !important; }

          /* Миниатюры квадратные */
          .room-thumbs-wrap { padding: 4px 0 0; }
          .room-thumbs-swiper .swiper-slide { aspect-ratio: 1 / 1; }

          /* Контент */
          .rooms-section .room-info { padding: 28px 20px 36px !important; }
          .rooms-section .room-title { font-size: 24px !important; margin-bottom: 12px !important; }
          .rooms-section .room-desc { font-size: 14px !important; line-height: 1.75 !important; margin-bottom: 24px !important; }
          .rooms-section .room-amenities { grid-template-columns: 1fr 1fr !important; gap: 10px !important; margin-bottom: 24px !important; }
          .rooms-section .amenity-card { padding: 14px 8px !important; border-radius: 10px !important; }
          .rooms-section .amenity-icon { font-size: 22px !important; }
          .rooms-section .amenity-text { font-size: 12px !important; }
          .rooms-section .price-container { flex-direction: row !important; margin-bottom: 24px !important; }
          .rooms-section .price-period { padding: 14px 12px !important; }
          .rooms-section .cost { font-size: 16px !important; white-space: normal !important; }
          .rooms-section .month  { font-size: 9px !important; }
          .rooms-section .include { font-size: 10px !important; }
          .rooms-section .btn-book {
            width: 100% !important; justify-content: center !important;
            padding: 18px !important; font-size: 12px !important; letter-spacing: 2px !important;
          }
        }

        @media (max-width: 365px) {
          .room-main-swiper-wrap { height: 420px !important; }
          .rooms-section .cost { font-size: 13px !important; }
          .rooms-section .price-period { padding: 10px 8px !important; }
        }
      `}</style>

      {/* Лайтбокс */}
      {lightboxIndex !== null && (
        <Lightbox startIndex={lightboxIndex} onClose={closeLightbox} />
      )}

      <div className="container">
        <div className="section-header">
          <div className="section-label">{t('rooms_section')}</div>
          <h2 className="section-title">{t('rooms_title')}</h2>
        </div>

        <div className="room-card">

          {/* ── Галерея ── */}
          <div className="room-gallery-container">

            <div
              className="room-main-swiper-wrap"
              onClick={() => openLightbox(activeIndex)}
            >
              <div className="room-slide-count">
                <span>{activeIndex + 1}</span> / {roomImages.length}
              </div>

              {/* Подсказка на мобильном */}
              <div className="room-zoom-hint">
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Нажмите для просмотра
              </div>

              <Swiper
                ref={mainSwiperRef}
                modules={[Autoplay, Thumbs, FreeMode]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                loop
                speed={700}
                onSlideChange={(s) => setActiveIndex(s.realIndex)}
                className="room-main-swiper"
              >
                {roomImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img.src} alt={img.alt} style={{ objectPosition: img.pos }} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="room-nav">
                <button
                  className="room-nav-btn"
                  aria-label="Назад"
                  onClick={(e) => { e.stopPropagation(); mainSwiperRef.current?.swiper?.slidePrev(); }}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="room-nav-btn"
                  aria-label="Вперёд"
                  onClick={(e) => { e.stopPropagation(); mainSwiperRef.current?.swiper?.slideNext(); }}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Миниатюры — клик тоже открывает лайтбокс */}
            <div className="room-thumbs-wrap">
              <Swiper
                modules={[Thumbs, FreeMode]}
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={4}
                freeMode
                watchSlidesProgress
                className="room-thumbs-swiper"
              >
                {roomImages.map((img, i) => (
                  <SwiperSlide key={i} onClick={() => openLightbox(i)}>
                    <img src={img.src} alt={img.alt} style={{ objectPosition: img.pos }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>

          {/* ── Описание ── */}
          <div className="room-info">
            <div className="room-type">{t('rooms_type')}</div>
            <h3 className="room-title">{t('rooms_subtitle')}</h3>
            <p className="room-desc">{t('rooms_desc')}</p>

            <div className="room-amenities">
              <div className="amenity-card"><span className="amenity-icon">🛁</span><span className="amenity-text">{t('room_feat1')}</span></div>
              <div className="amenity-card"><span className="amenity-icon">🪟</span><span className="amenity-text">{t('room_feat2')}</span></div>
              <div className="amenity-card"><span className="amenity-icon">🌿</span><span className="amenity-text">{t('room_feat3')}</span></div>
              <div className="amenity-card"><span className="amenity-icon">🍳</span><span className="amenity-text">{t('room_feat4')}</span></div>
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
              target="_blank" rel="noreferrer"
              className="btn-book"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-17844260471/DUFTCNyi3t0bEPec57xC',
                    value: 1.0, currency: 'USD',
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