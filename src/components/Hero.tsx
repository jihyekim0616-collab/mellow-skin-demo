import React from 'react';
import { ArrowRight, Sparkles, Clock, ShieldCheck, UserCheck } from 'lucide-react';
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
      {/* Background Ambient Warmth */}
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="container hero-container">
        {/* Main Editorial Hero Content */}
        <div className="hero-content">
          <div className="hero-brand-tag">
            <Sparkles size={15} className="sparkle-icon" />
            <span>PRIVATE AESTHETIC ATELIER</span>
          </div>

          <span className="hero-brand-name">MELLOW SKIN</span>

          <h1 className="hero-title">
            <span className="title-block">오늘의 피부보다,</span>
            <span className="title-block title-highlight">한 달 뒤의 피부를 생각합니다.</span>
          </h1>

          <p className="hero-subcopy">
            한 사람의 피부에 집중하는<br />
            1:1 프라이빗 스킨케어
          </p>

          <p className="hero-desc">
            획일화된 공장형 시술이 아닌, 고객 한 분의 생활 패턴과 당일 피부 컨디션을
            세심하게 판독하여 피부 본연의 건강한 숨결을 찾아드립니다.
          </p>

          {/* Prominent, Large CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="#consultation"
              className="btn btn-primary hero-btn hero-btn-consult"
              onClick={(e) => handleScrollTo(e, 'consultation')}
            >
              <span>무료 피부상담 신청</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#programs"
              className="btn btn-secondary hero-btn hero-btn-programs"
              onClick={(e) => handleScrollTo(e, 'programs')}
            >
              <span>프로그램 보기</span>
            </a>
          </div>

          {/* Key Trust Highlights */}
          <div className="hero-trust-row">
            <div className="trust-pill">
              <UserCheck size={16} className="pill-icon" />
              <span>1:1 단독 프라이빗 룸</span>
            </div>
            <div className="trust-pill">
              <Clock size={16} className="pill-icon" />
              <span>100% 사전 예약제</span>
            </div>
            <div className="trust-pill">
              <ShieldCheck size={16} className="pill-icon" />
              <span>1회용 위생 케어</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Imagery - Large Luxury Spa Atmosphere */}
        <div className="hero-visual-area">
          <div className="visual-frame">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
              alt="멜로우 스킨 1:1 프라이빗 스파 케어 룸 전경"
              className="hero-main-photo"
              loading="eager"
            />
            <div className="visual-gradient-overlay" />

            {/* In-photo Editorial Note Badge */}
            <div className="visual-caption-card">
              <span className="caption-label">ONLY FOR ONE GUEST</span>
              <p className="caption-text">
                "오직 당신만을 위해 준비된<br />
                아늑한 1인 스킨케어 룸"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
