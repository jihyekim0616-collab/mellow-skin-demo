import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield, Clock, Phone, Sparkles } from 'lucide-react';
import type { ConsultationFormData, ConsultationSubmitResult } from '../types';
import { submitConsultationRequest } from '../services/consultationService';
import './ConsultationSection.css';

interface ConsultationSectionProps {
  initialProgram?: string;
  initialConcern?: string;
  onPrivacyClick?: () => void;
}

const SKIN_CONCERNS_OPTIONS = [
  '탄력 저하 & 잔주름',
  '극심한 건조함 & 속당김',
  '칙칙한 피부톤 & 안색 개선',
  '반복되는 민감 트러블 & 붉은기',
  '모공 & 각질 정돈',
  '전반적인 1:1 맞춤 진단 희망',
];

const TIME_OPTIONS = [
  '오전 10:00 ~ 12:00',
  '오후 12:00 ~ 15:00',
  '오후 15:00 ~ 18:00',
  '저녁 18:00 ~ 20:00 (퇴근 후)',
  '시간대 무관 (빠른 일정)',
];

const PROGRAM_OPTIONS = [
  '프로그램 미정 (상담 후 결정)',
  '시그니처 케어 (80분 / 89,000원)',
  '카밍 케어 (70분 / 79,000원)',
  '프리미엄 케어 (100분 / 129,000원)',
];

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialProgram,
  initialConcern,
  onPrivacyClick,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    concern: initialConcern || '탄력 저하 & 잔주름',
    preferredProgram: initialProgram || '프로그램 미정 (상담 후 결정)',
    preferredTime: '오전 10:00 ~ 12:00',
    memo: '',
    agreedToPrivacy: true,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState<ConsultationSubmitResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync props if user clicked a program or concern from above sections
  useEffect(() => {
    if (initialProgram) {
      // match program
      const matched = PROGRAM_OPTIONS.find((opt) => opt.includes(initialProgram));
      if (matched) {
        setFormData((prev) => ({ ...prev, preferredProgram: matched }));
      }
    }
  }, [initialProgram]);

  useEffect(() => {
    if (initialConcern) {
      setFormData((prev) => ({ ...prev, concern: initialConcern }));
    }
  }, [initialConcern]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Clean and format 010-XXXX-XXXX
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (val.length > 11) val = val.slice(0, 11);

    let formatted = val;
    if (val.length > 7) {
      formatted = `${val.slice(0, 3)}-${val.slice(3, 7)}-${val.slice(7)}`;
    } else if (val.length > 3) {
      formatted = `${val.slice(0, 3)}-${val.slice(3)}`;
    }
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('성함을 입력해 주세요.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 12) {
      setErrorMessage('연락처(휴대폰 번호)를 정확히 입력해 주세요.');
      return;
    }

    if (!formData.agreedToPrivacy) {
      setErrorMessage('개인정보 수집 및 이용에 동의해야 상담 신청이 가능합니다.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await submitConsultationRequest(formData);
      if (res.success) {
        setResultMessage(res);
      } else {
        setErrorMessage(res.message);
      }
    } catch (err) {
      console.error('Consultation submission unexpected error:', err);
      setErrorMessage('상담 신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResultMessage(null);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      concern: '탄력 저하 & 잔주름',
      preferredProgram: '프로그램 미정 (상담 후 결정)',
      preferredTime: '오전 10:00 ~ 12:00',
      memo: '',
      agreedToPrivacy: true,
    });
  };

  return (
    <section className="section consultation-section" id="consultation">
      <div className="container">
        <div className="consultation-box-wrapper">
          <div className="consultation-card">
            {/* Left Header / Value Column */}
            <div className="consultation-info-col">
              <span className="section-badge">FREE CONSULTATION</span>
              <h2 className="consult-main-title">
                부담 없이 시작하는<br />
                1:1 무료 피부상담
              </h2>
              <p className="consult-subtext">
                내 피부에 어떤 관리가 맞을지 고민되시나요?<br />
                원장이 직접 피부 고민을 확인하고 가장 편안하고 알맞은 방향을 안내해 드립니다.
              </p>

              <div className="consult-perks">
                <div className="perk-item">
                  <div className="perk-icon-wrap">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <strong>정밀 피부 타입 체크</strong>
                    <span>겉뿐만 아니라 속건조, 유수분 밸런스 점검</span>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon-wrap">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong>15분 심층 1:1 상담</strong>
                    <span>충분한 시간 동안 생활 습관까지 분석</span>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-icon-wrap">
                    <Shield size={18} />
                  </div>
                  <div>
                    <strong>부담 없는 편안한 상담</strong>
                    <span>불필요한 권유 없이 내 피부에 꼭 필요한 관리 중심으로 안내</span>
                  </div>
                </div>
              </div>

              <div className="consult-quick-call">
                <Phone size={16} />
                <span>유선 문의가 편하시다면: <strong>02-0000-0000</strong></span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="consultation-form-col">
              {resultMessage ? (
                /* Success State */
                <div className="consult-success-view">
                  <div className="success-icon-circle">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="success-title">상담 신청이 접수되었습니다!</h3>
                  <p className="success-desc">
                    {resultMessage.message}
                  </p>

                  <div className="success-details-card">
                    <div className="detail-row">
                      <span className="label">성함:</span>
                      <span className="val">{resultMessage.submittedData?.name}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">연락처:</span>
                      <span className="val">{resultMessage.submittedData?.phone}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">주요 고민:</span>
                      <span className="val">{resultMessage.submittedData?.concern}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">희망 시간:</span>
                      <span className="val">{resultMessage.submittedData?.preferredTime}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">접수 일시:</span>
                      <span className="val">{resultMessage.timestamp}</span>
                    </div>
                  </div>

                  <p className="success-note">
                    ※ 본 양식은 포트폴리오 데모이며 실제 고객 정보는 외부 서버에 유출되지 않습니다.
                  </p>

                  <button
                    type="button"
                    className="btn btn-outline success-reset-btn"
                    onClick={handleReset}
                  >
                    새로 신청하기
                  </button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="consult-form" noValidate>
                  <h3 className="form-header-title">무료 피부상담 신청서</h3>
                  <p className="form-header-sub">
                    기재해주신 정보를 바탕으로 원장이 직접 연락드립니다.
                  </p>

                  {errorMessage && (
                    <div className="form-error-alert" role="alert">
                      <AlertCircle size={18} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      성함 <span className="req-dot">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="성함을 입력해주세요 (예: 김민지)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      연락처 <span className="req-dot">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="form-input"
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>

                  {/* Skin Concern Selection */}
                  <div className="form-group">
                    <label htmlFor="concern" className="form-label">
                      가장 고민되는 피부 문제 <span className="req-dot">*</span>
                    </label>
                    <select
                      id="concern"
                      className="form-select"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    >
                      {SKIN_CONCERNS_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div className="form-group">
                    <label htmlFor="preferredTime" className="form-label">
                      상담 희망 시간대
                    </label>
                    <select
                      id="preferredTime"
                      className="form-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    >
                      {TIME_OPTIONS.map((timeOpt) => (
                        <option key={timeOpt} value={timeOpt}>
                          {timeOpt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Interested Program */}
                  <div className="form-group">
                    <label htmlFor="preferredProgram" className="form-label">
                      관심 프로그램 <span className="opt-tag">(선택)</span>
                    </label>
                    <select
                      id="preferredProgram"
                      className="form-select"
                      value={formData.preferredProgram}
                      onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                    >
                      {PROGRAM_OPTIONS.map((progOpt) => (
                        <option key={progOpt} value={progOpt}>
                          {progOpt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Privacy Agreement */}
                  <div className="privacy-agreement-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={formData.agreedToPrivacy}
                        onChange={(e) =>
                          setFormData({ ...formData, agreedToPrivacy: e.target.checked })
                        }
                      />
                      <span className="checkbox-text">
                        [필수] 개인정보 수집 및 상담 연락 이용에 동의합니다.
                      </span>
                    </label>
                    {onPrivacyClick && (
                      <button
                        type="button"
                        className="privacy-view-btn"
                        onClick={onPrivacyClick}
                      >
                        전문 보기
                      </button>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary submit-consult-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="spinner-text">
                        <span className="btn-spinner" />
                        상담 신청 접수 중...
                      </span>
                    ) : (
                      <>
                        <span>무료 상담 신청하기</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  <p className="form-security-note">
                    ※ 기재해주신 개인정보는 상담 일정 안내 외 목적으로 사용되지 않습니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
