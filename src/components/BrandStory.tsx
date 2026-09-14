import React from 'react';
import { PHILOSOPHY_POINTS } from '../data/content';
import './BrandStory.css';

export const BrandStory: React.FC = () => {
  return (
    <section className="section brand-section" id="about">
      <div className="container">
        <div className="brand-grid">
          {/* Left Column: Story Text */}
          <div className="brand-story-col">
            <span className="section-badge">BRAND PHILOSOPHY</span>
            <h2 className="brand-title">
              "하루에 많은 고객을<br />
              받지 않습니다."
            </h2>

            <div className="brand-narrative">
              <p className="narrative-lead">
                피부관리는 단순한 시술이 아니라, 지친 일상을 내려놓고 내 몸과 피부를 정성스럽게 돌보는 온전한 치유의 시간입니다.
              </p>
              <p>
                상담 시간조차 쫓기듯 지나가는 분주한 관리실에서는 고객 한 사람의 수면 패턴, 식습관, 클렌징 습관까지 세심하게 들여다볼 수 없습니다.
              </p>
              <p>
                멜로우 스킨은 하루 예약 인원을 엄격히 제한합니다. 한 분이 머무시는 동안 방해받지 않는 1인 단독 룸에서, 그날의 피부 컨디션에 꼭 맞춘 케어만을 제공하기 위함입니다.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="philosophy-list">
              {PHILOSOPHY_POINTS.map((point) => (
                <div key={point.number} className="philosophy-item">
                  <span className="phil-number">{point.number}</span>
                  <div className="phil-text">
                    <h4 className="phil-title">{point.title}</h4>
                    <p className="phil-desc">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Layout */}
          <div className="brand-visual-col">
            <div className="visual-composition">
              <div className="comp-image-main">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                  alt="편안하고 아늑한 멜로우 스킨 스파 공간"
                  className="comp-img"
                  loading="lazy"
                />
              </div>

              <div className="comp-card-badge">
                <span className="badge-subtitle">SLOW AESTHETIC</span>
                <p className="badge-quote">
                  "서두르지 않는 손길로,<br />
                  본연의 건강한 숨결을 찾습니다."
                </p>
                <span className="badge-director">MELLOW SKIN 원장</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
