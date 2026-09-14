import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Calendar, Car, Navigation, AlertTriangle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import './LocationSection.css';

interface LocationSectionProps {
  onDemoActionClick: (actionType: 'phone' | 'kakao' | 'naver') => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onDemoActionClick }) => {
  return (
    <section className="section location-section" id="location">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">LOCATION & CONTACT</span>
          <h2 className="section-title">오시는 길 & 예약 안내</h2>
          <p className="section-desc">
            도심 속 번잡함을 벗어나 편안한 쉼과 프라이빗한 케어를 누릴 수 있는 공간입니다.
          </p>
          <div className="demo-notice-wrap">
            <span className="demo-disclaimer-pill">
              <AlertTriangle size={13} />
              <span>포트폴리오 시연을 위한 가상의 매장 정보입니다.</span>
            </span>
          </div>
        </div>

        <div className="location-grid">
          {/* Info Card */}
          <div className="location-info-card">
            {/* Address */}
            <div className="info-block">
              <div className="info-icon-col">
                <MapPin size={22} className="info-icon" />
              </div>
              <div className="info-text-col">
                <span className="block-label">주소</span>
                <p className="block-main-text">{BRAND_INFO.address}</p>
                <p className="block-sub-text">
                  <span className="virtual-tag">{BRAND_INFO.addressNotice}</span>
                </p>
                <div className="subway-car-hints">
                  <div className="hint-row">
                    <Navigation size={14} className="hint-icon" />
                    <span>지하철: 수인분당선 압구정로데오역 5번 출구 도보 5분</span>
                  </div>
                  <div className="hint-row">
                    <Car size={14} className="hint-icon" />
                    <span>주차 안내: 건물 1층 전용 무료 발렛 주차 지원</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-divider" />

            {/* Operating Hours */}
            <div className="info-block">
              <div className="info-icon-col">
                <Clock size={22} className="info-icon" />
              </div>
              <div className="info-text-col">
                <span className="block-label">운영 시간</span>
                <div className="hours-list">
                  <div className="hours-row">
                    <span className="day">평 일</span>
                    <span className="time">{BRAND_INFO.hours.weekday}</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">토요일</span>
                    <span className="time">{BRAND_INFO.hours.saturday}</span>
                  </div>
                  <div className="hours-row closed">
                    <span className="day">일요일</span>
                    <span className="time">{BRAND_INFO.hours.sunday}</span>
                  </div>
                </div>
                <p className="hours-notice">
                  ※ 100% 예약제 운영으로 당일 방문 시 대기 시간이 길거나 케어가 어려울 수 있으니 사전 예약을 부탁드립니다.
                </p>
              </div>
            </div>

            <div className="info-divider" />

            {/* Direct Contact & Booking Action Buttons */}
            <div className="contact-actions-wrap">
              <span className="actions-title">간편 예약 & 문의 채널</span>
              <p className="actions-sub">원하시는 방식으로 언제든 편하게 문의해주세요.</p>

              <div className="action-buttons-group">
                <button
                  type="button"
                  className="btn btn-primary action-cta-btn btn-call"
                  onClick={() => onDemoActionClick('phone')}
                >
                  <Phone size={17} />
                  <span>전화 문의하기</span>
                </button>

                <button
                  type="button"
                  className="btn btn-secondary action-cta-btn btn-kakao"
                  onClick={() => onDemoActionClick('kakao')}
                >
                  <MessageCircle size={17} />
                  <span>카카오톡 상담</span>
                </button>

                <button
                  type="button"
                  className="btn btn-outline action-cta-btn btn-naver"
                  onClick={() => onDemoActionClick('naver')}
                >
                  <Calendar size={17} />
                  <span>네이버 예약</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stylized Visual Map Card */}
          <div className="location-map-card">
            <div className="map-visual-placeholder">
              {/* Map Illustration / Blueprint */}
              <div className="map-grid-layer" />
              
              {/* Central Map Marker Pin */}
              <div className="map-pin-pulse-container">
                <div className="pin-pulse-ring" />
                <div className="pin-marker-box">
                  <MapPin size={22} className="pin-symbol" />
                  <span className="pin-name">MELLOW SKIN</span>
                </div>
              </div>

              {/* Landmark notes */}
              <div className="map-landmark lm-1">
                <span>도산공원 사거리</span>
              </div>
              <div className="map-landmark lm-2">
                <span>압구정로데오역 5번 출구</span>
              </div>

              {/* Map overlay card at bottom */}
              <div className="map-bottom-tag">
                <div className="tag-inner">
                  <strong>조용하고 아늑한 프라이빗 스킨케어 공간</strong>
                  <p>건물 엘리베이터를 이용해 3층으로 올라오시면 조용하게 맞이해 드립니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
