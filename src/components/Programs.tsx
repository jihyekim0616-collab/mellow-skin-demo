import React from 'react';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/content';
import './Programs.css';

interface ProgramsProps {
  onSelectProgram?: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  const handleProgramConsultClick = (programName: string) => {
    if (onSelectProgram) {
      onSelectProgram(programName);
    }
    const formElement = document.getElementById('consultation');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section programs-section" id="programs">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CARE MENU</span>
          <h2 className="section-title">오직 한 사람을 위한 맞춤 프로그램</h2>
          <p className="section-desc">
            과도한 패키지나 회원권 강요 없이, 내 피부에 지금 필요한 최적의 프로그램만을
            투명한 정찰제로 정직하게 안내합니다.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => {
            const isSignature = prog.id === 'signature';
            return (
              <div
                key={prog.id}
                className={`program-card ${isSignature ? 'program-card-featured' : ''}`}
              >
                {/* Highlight Badge */}
                {isSignature && (
                  <div className="program-highlight-tag">
                    <Sparkles size={14} />
                    <span>원장 추천 · BEST</span>
                  </div>
                )}

                <div className="prog-title-group">
                  <span className="prog-name-en">{prog.nameEn}</span>
                  <h3 className="prog-name-ko">{prog.nameKo}</h3>
                  <p className="prog-summary-text">{prog.summary}</p>
                </div>

                {/* Big, Clear Time & Price Display */}
                <div className="prog-price-banner">
                  <div className="price-time-col">
                    <Clock size={18} className="time-clock-icon" />
                    <span className="time-text">{prog.durationMinutes}분 집중 케어</span>
                  </div>
                  <div className="price-num-col">
                    <span className="price-number">{prog.formattedPrice}</span>
                  </div>
                </div>

                {/* Target Audience */}
                <div className="prog-target-box">
                  <strong>추천 피부:</strong>
                  <span>{prog.recommendedFor}</span>
                </div>

                {/* Key Features List */}
                <div className="prog-features-group">
                  <span className="features-headline">주요 케어 포인트</span>
                  <ul className="features-list">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <Check size={16} className="feature-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Large Direct CTA Button */}
                <div className="prog-cta-wrap">
                  <button
                    type="button"
                    className={`btn ${isSignature ? 'btn-primary' : 'btn-secondary'} prog-select-btn`}
                    onClick={() => handleProgramConsultClick(prog.nameKo)}
                  >
                    <span>{prog.nameKo} 상담 신청</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Notice */}
        <div className="programs-footnote">
          <p>
            ※ 모든 프로그램은 1회 단독 체험이 가능하며, 당일 정밀 피부 상태에 따라 앰플과 진정 단계를 무료로 맞춤 조율해 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};
