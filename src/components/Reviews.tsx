import React from 'react';
import { Star, Quote, Info, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/content';
import './Reviews.css';

export const Reviews: React.FC = () => {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CUSTOMER REVIEWS</span>
          <h2 className="section-title">직접 경험하신 분들의 진솔한 이야기</h2>
          <p className="section-desc">
            한 번의 인연도 소중히 여기는 멜로우 스킨의 정성과 만족을 확인해보세요.
          </p>
          {/* Demo Disclaimer notice required */}
          <div className="demo-notice-wrap">
            <span className="demo-disclaimer-pill">
              <Info size={13} />
              <span>포트폴리오 데모용 예시 후기입니다.</span>
            </span>
          </div>
        </div>

        <div className="reviews-grid">
          {REVIEWS_DATA.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-top-bar">
                <div className="star-row" aria-label={`평점 5점 만점 중 ${rev.rating}점`}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={16} className="star-filled" fill="#A08059" />
                  ))}
                </div>
                <span className="rev-tag">{rev.tag}</span>
              </div>

              <h3 className="rev-title">{rev.title}</h3>
              <p className="rev-content">{rev.content}</p>

              <div className="rev-footer">
                <div className="rev-author-info">
                  <div className="author-name-row">
                    <strong>{rev.author}</strong>
                    <span className="verified-badge">
                      <CheckCircle size={12} />
                      <span>방문 인증</span>
                    </span>
                  </div>
                  <span className="author-meta">
                    {rev.ageGroup} · {rev.careType}
                  </span>
                </div>
                <Quote size={24} className="rev-quote-icon" />
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Footnote */}
        <div className="reviews-footnote">
          <p>
            ※ 멜로우 스킨은 실제 매장 운영 시에도 과장된 후기나 대가성 홍보를 배제하고 고객의 정직한 피드백을 최우선으로 기록합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
