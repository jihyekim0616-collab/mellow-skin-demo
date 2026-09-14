import React from 'react';
import { X, Calendar, MessageCircle, Phone, FileText, Check } from 'lucide-react';
import './NoticeModal.css';

export type ModalType = 'phone' | 'kakao' | 'naver' | 'privacy' | null;

interface NoticeModalProps {
  type: ModalType;
  onClose: () => void;
  onGoToConsultation?: () => void;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({
  type,
  onClose,
  onGoToConsultation,
}) => {
  if (!type) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button
          type="button"
          className="modal-close-icon"
          onClick={onClose}
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        {type === 'phone' && (
          <div className="modal-body">
            <div className="modal-icon-badge badge-phone">
              <Phone size={28} />
            </div>
            <h3 className="modal-title">전화 문의 안내</h3>
            <p className="modal-desc">
              본 사이트는 웹사이트 제작 서비스의 <strong>포트폴리오 데모 사이트</strong>입니다.<br />
              실제 매장 도입 시 원장님의 공식 유선 번호 또는 안심번호(0507)로 바로 통화 연결됩니다.
            </p>
            <div className="modal-highlight-box">
              <span className="box-tag">데모 가상 번호</span>
              <p className="box-phone">02-000-0000</p>
              <span className="box-hint">상담 시간: 평일 10:00 ~ 20:00 (사전 예약제)</span>
            </div>
            <div className="modal-action-buttons">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={() => {
                  onClose();
                  if (onGoToConsultation) onGoToConsultation();
                }}
              >
                웹 무료 피부상담 신청하기
              </button>
            </div>
          </div>
        )}

        {type === 'kakao' && (
          <div className="modal-body">
            <div className="modal-icon-badge badge-kakao">
              <MessageCircle size={28} />
            </div>
            <h3 className="modal-title">카카오톡 채널 상담 연동</h3>
            <p className="modal-desc">
              실제 홈페이지 제작 시 <strong>카카오톡 공식 채널 1:1 채팅 링크</strong>와 직접 연결되어,
              방문자가 버튼 클릭 한 번으로 카카오톡 상담을 시작할 수 있습니다.
            </p>
            <div className="modal-highlight-box">
              <span className="box-tag">연동 기능 안내</span>
              <ul className="modal-feature-list">
                <li>카카오톡 채널 실시간 1:1 채팅 바로 연결</li>
                <li>챗봇 자동 응답 (영업시간, 위치, 프로그램 안내)</li>
                <li>친구 추가 유도 및 재방문 쿠폰 발송</li>
              </ul>
            </div>
            <div className="modal-action-buttons">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={onClose}
              >
                확인
              </button>
            </div>
          </div>
        )}

        {type === 'naver' && (
          <div className="modal-body">
            <div className="modal-icon-badge badge-naver">
              <Calendar size={28} />
            </div>
            <h3 className="modal-title">네이버 스마트플레이스 예약 연동</h3>
            <p className="modal-desc">
              실제 사이트 제작 시 원장님의 <strong>네이버 예약 페이지 URL</strong>로 즉시 이동합니다.<br />
              고객이 원하는 날짜와 시술 항목을 직접 선택하고 예약금을 결제할 수 있습니다.
            </p>
            <div className="modal-highlight-box">
              <span className="box-tag">네이버 예약 연동 장점</span>
              <ul className="modal-feature-list">
                <li>네이버 지도 및 플레이스 리뷰와 자동 동기화</li>
                <li>실시간 예약 알림 및 노쇼 방지 예약금 관리</li>
                <li>네이버페이 포인트 적립 혜택 연동</li>
              </ul>
            </div>
            <div className="modal-action-buttons">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={onClose}
              >
                확인
              </button>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="modal-body">
            <div className="modal-icon-badge badge-privacy">
              <FileText size={28} />
            </div>
            <h3 className="modal-title">개인정보 수집 및 이용 동의</h3>
            <div className="privacy-modal-content">
              <p><strong>1. 수집하는 개인정보 항목:</strong> 성함, 연락처, 피부 고민, 희망 상담 시간</p>
              <p><strong>2. 수집 및 이용 목적:</strong> 1:1 맞춤 피부상담 일정 조율 및 프로그램 안내</p>
              <p><strong>3. 보유 및 이용 기간:</strong> 상담 완료 및 예약 처리 후 30일 이내 파기 (법령에 따른 보관 의무가 있는 경우 해당 법령 준수)</p>
              <p><strong>4. 동의 거부 권리:</strong> 귀하는 개인정보 수집 동의를 거부할 권리가 있으며, 동의 거부 시 상담 신청이 제한될 수 있습니다.</p>
            </div>
            <div className="modal-action-buttons">
              <button
                type="button"
                className="btn btn-primary modal-action-btn"
                onClick={onClose}
              >
                <Check size={16} />
                <span>동의 및 닫기</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
