import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, UserCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import './Hero.css';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Decorative Accents */}
      <div className="hero-ambient-glow glow-1" aria-hidden="true" />
      <div className="hero-ambient-glow glow-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Label */}
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>1:1 PRIVATE AESTHETIC STUDIO</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="hero-title">
            <span className="title-line">오늘의 피부보다,</span>
            <span className="title-line highlight-serif">한 달 뒤의 피부를 생각합니다.</span>
          </h1>

          <p className="hero-subcopy">
            {BRAND_INFO.subCopy.split('\n').map((line, idx) => (
              <span key={idx} className="subcopy-line">
                {line}
              </span>
            ))}
          </p>

          <p className="hero-description">
            찍어내듯 지나가는 관리가 아닌, 그날의 피부 컨디션과 생활 패턴을 살피는
            정성스러운 1:1 맞춤 케어를 경험해보세요.
          </p>

          {/* CTA Button Group */}
          <div className="hero-cta-group">
            <a
              href="#consultation"
              className="btn btn-primary hero-btn-main"
              onClick={(e) => handleScrollTo(e, 'consultation')}
            >
              <span>무료 피부상담 신청</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="#programs"
              className="btn btn-secondary hero-btn-sub"
              onClick={(e) => handleScrollTo(e, 'programs')}
            >
              <span>프로그램 보기</span>
            </a>
          </div>

          {/* Trust Value Badges */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <UserCheck size={18} className="trust-icon" />
              <div>
                <strong>1인 단독 룸</strong>
                <span>타인 없는 온전한 프라이빗</span>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <Clock size={18} className="trust-icon" />
              <div>
                <strong>100% 사전 예약</strong>
                <span>하루 한정 인원 집중 케어</span>
              </div>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <div>
                <strong>철저한 위생 관리</strong>
                <span>1회용 해면 & 개별 소독 기구</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Aesthetic Imagery */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            <div className="visual-image-box">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
                alt="멜로우 스킨 프라이빗 스킨케어 룸 인테리어"
                className="visual-img"
                loading="eager"
              />
              <div className="visual-overlay" />
            </div>

            {/* Floating Aesthetic Glass Tag */}
            <div className="visual-floating-card">
              <div className="floating-card-pill">
                <span className="pulsing-dot" />
                <span>MELLOW SIGNATURE</span>
              </div>
              <p className="floating-card-text">
                "매일 달라지는 피부 결에 맞춘<br />
                정교한 1:1 맞춤 진단"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
