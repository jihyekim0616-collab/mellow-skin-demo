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
        <div className="section-header">
          <span className="section-badge">CARE PROGRAMS</span>
          <h2 className="section-title">오직 한 사람을 위한 맞춤 프로그램</h2>
          <p className="section-desc">
            과도한 패키지 권유 없이, 내 피부에 지금 필요한 최적의 프로그램만을 투명한 정찰제로 안내합니다.
          </p>
        </div>

        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => {
            const isSignature = prog.id === 'signature';
            return (
              <div
                key={prog.id}
                className={`program-card ${isSignature ? 'is-featured' : ''}`}
              >
                {prog.tag && (
                  <div className="program-badge">
                    {isSignature && <Sparkles size={13} />}
                    <span>{prog.tag}</span>
                  </div>
                )}

                <div className="card-header-inner">
                  <span className="prog-en">{prog.nameEn}</span>
                  <h3 className="prog-ko">{prog.nameKo}</h3>
                  <p className="prog-summary">{prog.summary}</p>
                </div>

                <div className="program-meta-box">
                  <div className="meta-item time">
                    <Clock size={16} className="meta-icon" />
                    <span>{prog.durationMinutes}분 관리</span>
                  </div>
                  <div className="meta-item price">
                    <span className="price-val">{prog.formattedPrice}</span>
                  </div>
                </div>

                <div className="prog-recommendation">
                  <strong>추천 대상:</strong>
                  <span>{prog.recommendedFor}</span>
                </div>

                <div className="prog-features-list">
                  <span className="features-title">주요 관리 포인트</span>
                  {prog.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-row">
                      <Check size={15} className="feature-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="program-action-wrap">
                  <button
                    type="button"
                    className={`btn ${isSignature ? 'btn-primary' : 'btn-secondary'} prog-book-btn`}
                    onClick={() => handleProgramConsultClick(prog.nameKo)}
                  >
                    <span>이 프로그램 상담 신청</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="programs-info-note">
          <p>
            ※ 모든 프로그램은 1회 체험 또는 단독 관리가 가능하며, 당일 피부 진단 후 필요한 경우 앰플 및 단계를 미세 조율해 드립니다.
          </p>
        </div>
      </div>
    </section>
  );
};
