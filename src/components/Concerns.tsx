import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CONCERNS_DATA } from '../data/content';
import './Concerns.css';

interface ConcernsProps {
  onSelectConcern?: (concernTitle: string) => void;
}

export const Concerns: React.FC<ConcernsProps> = ({ onSelectConcern }) => {
  const handleConcernClick = (title: string) => {
    if (onSelectConcern) {
      onSelectConcern(title);
    }
    const formElement = document.getElementById('consultation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section concerns-section" id="concerns">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">SKIN DIAGNOSIS</span>
          <h2 className="section-title">요즘 피부, 이런 고민 있으신가요?</h2>
          <p className="section-desc">
            계절의 변화, 수면 부족, 무너진 유수분 밸런스로 지친 피부는 제각기 다른 신호를 보냅니다.<br />
            멜로우 스킨은 표면적인 관리가 아닌 피부 장벽 본연의 힘에 집중합니다.
          </p>
        </div>

        {/* Editorial Split Layout (No small repetitive card grid!) */}
        <div className="concerns-editorial-wrapper">
          {/* Left Column: Atmospheric Editorial Image & Quote */}
          <div className="concerns-visual-column">
            <div className="concerns-image-frame">
              <img
                src="/images/concerns-room.jpg"
                alt="자연스럽고 편안한 멜로우 스킨 스킨케어 공간"
                className="concerns-photo"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80';
                  }
                }}
              />
              <div className="concerns-image-overlay" />
            </div>

            <div className="concerns-quote-box">
              <Sparkles size={20} className="quote-sparkle" />
              <blockquote className="quote-text">
                "매일 달라지는 피부 컨디션,<br />
                스스로 회복하는 자생력을 깨워드립니다."
              </blockquote>
              <span className="quote-author">MELLOW SKIN PRIVATE THERAPY</span>
            </div>
          </div>

          {/* Right Column: Spacious Editorial Concern Items */}
          <div className="concerns-list-column">
            {CONCERNS_DATA.map((item, idx) => (
              <div
                key={item.id}
                className="concern-editorial-item"
                onClick={() => handleConcernClick(item.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleConcernClick(item.title);
                  }
                }}
              >
                <div className="item-num-wrap">
                  <span className="item-number">0{idx + 1}</span>
                </div>

                <div className="item-body">
                  <div className="item-title-row">
                    <h3 className="item-title">{item.title}</h3>
                    <span className="item-action-indicator">
                      <span>맞춤 상담</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>

                  <p className="item-subtitle">{item.subtitle}</p>
                  <p className="item-desc">{item.description}</p>

                  <div className="item-symptoms-chips">
                    {item.symptoms.map((symptom, sIdx) => (
                      <span key={sIdx} className="symptom-chip">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
