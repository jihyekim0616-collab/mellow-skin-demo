import React from 'react';
import { MessageSquare, ScanFace, Sparkles, Home, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';
import './CareProcess.css';

const STEP_ICONS = [
  <MessageSquare size={26} key="msg" />,
  <ScanFace size={26} key="scan" />,
  <Sparkles size={26} key="care" />,
  <Home size={26} key="home" />,
];

export const CareProcess: React.FC = () => {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CARE PROCESS</span>
          <h2 className="section-title">섬세하고 체계적인 4단계 관리 과정</h2>
          <p className="section-desc">
            문진부터 사후 홈케어 조언까지, 흔들림 없는 원칙으로 한 단계 한 단계 정성을 다합니다.
          </p>
        </div>

        <div className="process-grid">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div key={stepItem.step} className="process-card">
              <div className="process-card-top">
                <span className="step-tag">{stepItem.step}</span>
                <div className="step-icon-bubble">
                  {STEP_ICONS[idx]}
                </div>
              </div>

              <div className="step-title-group">
                <h3 className="step-title">{stepItem.title}</h3>
                <span className="step-subtitle">{stepItem.subtitle}</span>
              </div>

              <p className="step-desc">{stepItem.description}</p>

              <div className="step-details-box">
                {stepItem.details.map((detail, dIdx) => (
                  <div key={dIdx} className="detail-item">
                    <CheckCircle2 size={13} className="detail-icon" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <span>→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="process-footer-box">
          <div className="footer-box-content">
            <strong>모든 관리는 1회용 위생 가운 & 1회용 해면만을 사용합니다.</strong>
            <p>멜로우 스킨은 고객의 청결과 안전을 최우선으로 생각하며 관리 후 즉시 베드 시트 교체 및 소독을 진행합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
