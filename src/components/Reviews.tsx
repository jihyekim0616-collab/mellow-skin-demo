import React from 'react';
import { Star, Quote, Info, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/content';
import './Reviews.css';

export const Reviews: React.FC = () => {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">REAL EXPERIENCES</span>
          <h2 className="section-title">직접 경험하신 분들의 진솔한 이야기</h2>
          <p className="section-desc">
            과장된 광고나 대가성 홍보 대신, 한 타임 한 분의 고객에게 정성을 쏟는
            멜로우 스킨의 차이를 확인해보세요.
          </p>
          <div className="reviews-demo-pill-wrap">
            <span className="demo-disclaimer-pill">
              <Info size={14} />
              <span>포트폴리오 데모용 예시 후기입니다.</span>
            </span>
          </div>
        </div>

        {/* Spacious Testimonial Cards */}
        <div className="reviews-grid">
          {REVIEWS_DATA.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-top-meta">
                <div className="star-rating-row" aria-label={`평점 5점 만점 중 ${rev.rating}점`}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={17} className="star-icon" fill="#A48156" />
                  ))}
                </div>
                <span className="review-tag-badge">{rev.tag}</span>
              </div>

              <h3 className="review-headline">{rev.title}</h3>
              <p className="review-body-text">{rev.content}</p>

              <div className="review-bottom-author">
                <div className="author-details">
                  <div className="author-name-line">
                    <strong className="author-name">{rev.author}</strong>
                    <span className="verified-chip">
                      <CheckCircle size={12} />
                      <span>방문 인증</span>
                    </span>
                  </div>
                  <span className="care-type-meta">
                    {rev.ageGroup} · {rev.careType}
                  </span>
                </div>
                <Quote size={28} className="quote-watermark" />
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-footer-note">
          <p>
            ※ 멜로우 스킨은 실제 오픈 시에도 네이버 스마트플레이스 실방문자 리뷰 및 영수증 인증 후기만을 투명하게 연동합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
