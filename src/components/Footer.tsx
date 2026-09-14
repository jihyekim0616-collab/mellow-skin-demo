import React from 'react';
import { ArrowUp, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Disclaimer Banner */}
        <div className="footer-portfolio-disclaimer">
          <div className="disclaimer-badge">
            <AlertCircle size={15} />
            <span>PORTFOLIO DEMO NOTICE</span>
          </div>
          <p className="disclaimer-text">
            본 웹사이트는 <strong>소상공인 1인 뷰티·피부관리샵 홈페이지 제작 서비스의 포트폴리오 데모 사이트</strong>입니다.
            웹사이트에 표기된 상호(MELLOW SKIN), 가상 주소, 고객 후기, 프로그램 구성 및 가격 정보는 실제 영업 중인 매장이 아닌 웹사이트 기능 및 레이아웃 시연을 목적으로 구성되었습니다.
          </p>
        </div>

        <div className="footer-main-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-title">MELLOW SKIN</span>
              <span className="brand-sub">1:1 Private Skincare Studio</span>
            </div>
            <p className="brand-desc">
              오늘의 피부보다 한 달 뒤의 피부를 생각하는<br />
              1:1 프라이빗 맞춤 스킨케어 스튜디오
            </p>
            <div className="footer-hours-summary">
              <span>운영: 평일 10:00~20:00 / 토 10:00~18:00 (일 휴무)</span>
              <span>예약 문의: {BRAND_INFO.phone} (100% 사전 예약제)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">바로가기</span>
            <ul className="footer-links-list">
              <li><a href="#programs">프로그램 소개</a></li>
              <li><a href="#about">멜로우 스킨 철학</a></li>
              <li><a href="#process">4단계 관리 과정</a></li>
              <li><a href="#reviews">고객 체험 후기</a></li>
              <li><a href="#location">오시는 길 & 매장 안내</a></li>
              <li><a href="#consultation">무료 피부상담 신청</a></li>
            </ul>
          </div>

          {/* Virtual Business Details */}
          <div className="footer-biz-col">
            <span className="footer-col-title">사업자 정보 (예시)</span>
            <ul className="biz-details-list">
              <li>상호: 멜로우 스킨 (MELLOW SKIN)</li>
              <li>대표자: 가상 대표 | 사업자등록번호: 000-00-00000</li>
              <li>주소: {BRAND_INFO.address}</li>
              <li>통신판매업신고: 2026-서울강남-00000호</li>
              <li>개인정보보호책임자: 원장 직접 관리</li>
              <li className="client-portfolio-hint">
                <Sparkles size={14} />
                <span>홈페이지 제작 문의: 소상공인 웹 솔루션 파트너</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} MELLOW SKIN. All Rights Reserved. Designed for Beauty Studio Portfolio Demo.
          </p>

          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="맨 위로 이동"
          >
            <span>TOP</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
