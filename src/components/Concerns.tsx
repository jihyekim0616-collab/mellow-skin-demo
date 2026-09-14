import React from 'react';
import { Sparkles, Droplets, SunMedium, ShieldAlert, Check } from 'lucide-react';
import { CONCERNS_DATA } from '../data/content';
import './Concerns.css';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles size={24} />,
  Droplets: <Droplets size={24} />,
  SunMedium: <SunMedium size={24} />,
  ShieldAlert: <ShieldAlert size={24} />,
};

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
        <div className="section-header">
          <span className="section-badge">SKIN WORRIES</span>
          <h2 className="section-title">요즘 피부, 이런 고민 있으신가요?</h2>
          <p className="section-desc">
            계절의 변화, 피로, 그리고 스트레스로 지친 피부는 제각기 다른 신호를 보냅니다.<br />
            나에게 지금 필요한 정확한 솔루션을 찾아보세요.
          </p>
        </div>

        <div className="concerns-grid">
          {CONCERNS_DATA.map((item) => (
            <div key={item.id} className="concern-card">
              <div className="card-top">
                <div className="concern-icon-wrapper">
                  {ICONS_MAP[item.iconName]}
                </div>
                <span className="concern-tag">체크 포인트</span>
              </div>

              <h3 className="concern-title">{item.title}</h3>
              <p className="concern-subtitle">{item.subtitle}</p>
              <p className="concern-desc">{item.description}</p>

              <div className="concern-symptoms">
                {item.symptoms.map((symptom, idx) => (
                  <div key={idx} className="symptom-row">
                    <Check size={14} className="symptom-check" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="concern-action-btn"
                onClick={() => handleConcernClick(item.title)}
              >
                <span>이 고민 맞춤상담 신청</span>
                <span className="arrow-sym">→</span>
              </button>
            </div>
          ))}
        </div>

        <div className="concerns-banner">
          <div className="banner-content">
            <p className="banner-lead">피부 고민은 하나로 오지 않습니다.</p>
            <p className="banner-sub">
              멜로우 스킨은 복합적인 피부 문제를 표면적으로 덮지 않고, 1:1 정밀 체크를 통해 근본적인 원인부터 다룹니다.
            </p>
          </div>
          <a href="#about" className="btn btn-outline banner-btn">
            멜로우 스킨 철학 보기
          </a>
        </div>
      </div>
    </section>
  );
};
