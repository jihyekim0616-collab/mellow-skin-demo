import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-text">MELLOW SKIN</span>
          <span className="logo-sub">멜로우 스킨 · 1:1 PRIVATE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="메인 내비게이션">
          <ul className="nav-list">
            <li>
              <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>프로그램</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>멜로우 스킨</a>
            </li>
            <li>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>관리 과정</a>
            </li>
            <li>
              <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>후기</a>
            </li>
            <li>
              <a href="#location" onClick={(e) => handleNavClick(e, 'location')}>오시는 길</a>
            </li>
          </ul>
        </nav>

        {/* Header Right CTA */}
        <div className="header-actions">
          <a
            href="#consultation"
            className="btn btn-primary header-cta-btn"
            onClick={(e) => handleNavClick(e, 'consultation')}
          >
            <Calendar size={15} />
            <span>상담하기</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="drawer-brand">
                <span className="drawer-logo-text">MELLOW SKIN</span>
                <span className="drawer-logo-sub">1:1 프라이빗 스킨케어</span>
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="닫기"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                <li>
                  <a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>
                    <span>프로그램</span>
                    <span className="mobile-nav-sub">맞춤 케어 & 가격 안내</span>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                    <span>멜로우 스킨</span>
                    <span className="mobile-nav-sub">브랜드 철학</span>
                  </a>
                </li>
                <li>
                  <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>
                    <span>관리 과정</span>
                    <span className="mobile-nav-sub">4단계 맞춤 프로세스</span>
                  </a>
                </li>
                <li>
                  <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>
                    <span>고객 후기</span>
                    <span className="mobile-nav-sub">예시 후기 모음</span>
                  </a>
                </li>
                <li>
                  <a href="#location" onClick={(e) => handleNavClick(e, 'location')}>
                    <span>오시는 길</span>
                    <span className="mobile-nav-sub">위치 및 운영시간</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mobile-drawer-footer">
              <a
                href="#consultation"
                className="btn btn-primary mobile-drawer-cta"
                onClick={(e) => handleNavClick(e, 'consultation')}
              >
                <Sparkles size={16} />
                <span>무료 피부상담 신청</span>
              </a>
              <p className="mobile-drawer-notice">
                ※ 100% 사전 예약제 / 1인 단독 룸 케어
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
