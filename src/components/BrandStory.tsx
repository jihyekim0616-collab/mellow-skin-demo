import React from 'react';
import { PHILOSOPHY_POINTS } from '../data/content';
import './BrandStory.css';

export const BrandStory: React.FC = () => {
  return (
    <section className="section brand-section" id="about">
      <div className="container">
        <div className="brand-editorial-grid">
          {/* Left Column: Narrative & 3 Pillars */}
          <div className="brand-narrative-col">
            <span className="brand-pre-label">BRAND PHILOSOPHY</span>

            <h2 className="brand-headline">
              "하루에 많은 고객을<br />
              받지 않습니다."
            </h2>

            <div className="brand-lead-paragraph">
              <p className="lead-quote">
                피부관리는 단순한 시술이 아니라, 분주한 일상을 잠시 멈추고
                내 피부와 온전히 마주하는 깊은 휴식의 시간입니다.
              </p>
              <p className="lead-body">
                상담 시간조차 쫓기듯 지나가는 분주한 관리실에서는 고객 한 사람의 수면 패턴,
                식습관, 계절별 피부 변화까지 세심하게 들여다볼 수 없습니다.
              </p>
              <p className="lead-body">
                멜로우 스킨은 하루 예약 정원을 엄격히 제한합니다. 한 분이 머무시는 동안
                오롯이 한 사람의 피부에만 모든 집중과 정성을 쏟기 위함입니다.
              </p>
            </div>

            {/* 3 Pillars - Editorial Typography Layout (No boxed cards!) */}
            <div className="philosophy-editorial-list">
              {PHILOSOPHY_POINTS.map((point) => (
                <div key={point.number} className="philosophy-editorial-row">
                  <span className="phil-editorial-num">{point.number}</span>
                  <div className="phil-editorial-content">
                    <h3 className="phil-editorial-title">{point.title}</h3>
                    <p className="phil-editorial-desc">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Visual Composition */}
          <div className="brand-visual-col">
            <div className="brand-image-stack">
              <div className="stack-image-frame">
                <img
                  src="/images/brand-room.jpg"
                  alt="따뜻한 조명과 정돈된 베드가 있는 멜로우 스킨 1:1 프라이빗 케어실"
                  className="stack-photo"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = 'true';
                      target.src = 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80';
                    }
                  }}
                />
              </div>

              <div className="stack-editorial-quote">
                <span className="quote-tag">SLOW BEAUTY</span>
                <p className="quote-body">
                  "서두르지 않는 섬세한 손길로,<br />
                  피부 본연의 건강한 숨결을 되찾습니다."
                </p>
                <span className="quote-by">MELLOW SKIN AESTHETIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
