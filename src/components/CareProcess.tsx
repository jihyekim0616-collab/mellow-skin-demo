import React from 'react';
import { ShieldCheck, Check, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import './CareProcess.css';

export const CareProcess: React.FC = () => {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CARE PROCEDURE</span>
          <h2 className="section-title">정성을 다하는 4단계 맞춤 프로세스</h2>
          <p className="section-desc">
            문진부터 사후 홈케어 조언까지, 서두르지 않는 원칙으로 한 단계 한 단계 세심하게 진행합니다.
          </p>
        </div>

        {/* Editorial Layout: Left Photo/Placeholder & Hygiene + Right Timeline */}
        <div className="process-editorial-grid">
          {/* Left Column: Atmospheric Private Room Placeholder & Sanitation Guarantee */}
          <div className="process-visual-col">
            <div className="process-photo-box process-room-placeholder">
              <div className="placeholder-ambient-glow" aria-hidden="true" />

              <div className="process-photo-tag">
                <span className="dot-live" />
                <span>HYGIENIC & PRIVATE SPACE</span>
              </div>

              <div className="room-placeholder-content">
                <div className="room-icon-circle">
                  <Sparkles size={28} className="room-sparkle-icon" />
                </div>
                <span className="room-placeholder-brand">MELLOW SKIN AESTHETIC</span>
                <h3 className="room-placeholder-title">
                  오직 한 사람만을 위한<br />
                  프라이빗 관리실
                </h3>
                <p className="room-placeholder-desc">
                  정돈된 1인 관리 베드와 따뜻한 조명이 머무는<br />
                  조용하고 아늑한 쉼의 공간입니다.
                </p>
                <span className="room-placeholder-hint">
                  ※ 홈페이지 실제 제작 시 매장의 1인 관리실 사진이 적용됩니다.
                </span>
              </div>
            </div>

            {/* Hygiene Promise Box */}
            <div className="process-hygiene-card">
              <div className="hygiene-header">
                <ShieldCheck size={22} className="hygiene-icon" />
                <strong>1인 1회용 위생 관리 원칙</strong>
              </div>
              <p className="hygiene-desc">
                멜로우 스킨은 관리 시 피부에 직접 닿는 해면과 가운을 100% 1회용으로 사용하며,
                케어 직후 베드 시트 즉시 교체 및 전 구역 알코올 소독을 철저히 시행합니다.
              </p>
            </div>
          </div>

          {/* Right Column: Step Timeline (No small boxed cards!) */}
          <div className="process-timeline-col">
            {PROCESS_STEPS.map((stepItem, idx) => (
              <div key={stepItem.step} className="timeline-step-row">
                <div className="timeline-indicator">
                  <span className="timeline-num">{stepItem.step}</span>
                  {idx < PROCESS_STEPS.length - 1 && <span className="timeline-line" />}
                </div>

                <div className="timeline-content">
                  <div className="timeline-head">
                    <h3 className="timeline-title">{stepItem.title}</h3>
                    <span className="timeline-subtitle">{stepItem.subtitle}</span>
                  </div>

                  <p className="timeline-desc">{stepItem.description}</p>

                  <div className="timeline-details-row">
                    {stepItem.details.map((detail, dIdx) => (
                      <span key={dIdx} className="timeline-detail-tag">
                        <Check size={14} className="detail-check" />
                        <span>{detail}</span>
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
