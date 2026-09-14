import { Calendar, Sparkles } from 'lucide-react';
import './MobileStickyBar.css';

interface MobileStickyBarProps {
  onReserveClick: () => void;
  onConsultClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onReserveClick,
  onConsultClick,
}) => {
  return (
    <div className="mobile-sticky-bar" role="region" aria-label="모바일 빠른 예약 바">
      <div className="sticky-bar-inner">
        {/* Button 1: 상담하기 (Scroll to consultation form) */}
        <button
          type="button"
          className="sticky-action-btn btn-sticky-consult"
          onClick={onConsultClick}
        >
          <Sparkles size={16} />
          <span>무료 상담하기</span>
        </button>

        {/* Button 2: 예약하기 (Open reservation demo modal) */}
        <button
          type="button"
          className="sticky-action-btn btn-sticky-reserve"
          onClick={onReserveClick}
        >
          <Calendar size={16} />
          <span>네이버 예약하기</span>
        </button>
      </div>
    </div>
  );
};
