import type { ConsultationFormData, ConsultationSubmitResult } from '../types';

/**
 * ==============================================================================
 * MELLOW SKIN - 무료 피부상담 신청 서비스 모듈
 * ==============================================================================
 * 현재 단계에서는 데모 사이트용 Mock 처리를 수행하며,
 * 추후 Supabase, Google Sheets API, 또는 백엔드 웹훅(Alimtalk, Slack 등)과
 * 간편하게 연동할 수 있도록 인터페이스가 분리되어 있습니다.
 * ==============================================================================
 */

// 로컬 테스트용 스토리지 키
const LOCAL_STORAGE_KEY = 'mellow_skin_consultation_history';

/**
 * 무료 피부상담 신청 처리 함수
 * @param data 신청 양식 데이터
 * @returns 처리 결과 Promise
 */
export async function submitConsultationRequest(
  data: ConsultationFormData
): Promise<ConsultationSubmitResult> {
  // 실제 네트워크 요청과 동일한 사용자 경험을 위해 가벼운 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 유효성 검사
  if (!data.name.trim()) {
    return {
      success: false,
      message: '이름을 입력해 주세요.',
    };
  }

  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
    return {
      success: false,
      message: '올바른 휴대폰 번호 형식을 입력해 주세요. (예: 010-1234-5678)',
    };
  }

  if (!data.concern) {
    return {
      success: false,
      message: '가장 고민되는 피부 문제를 선택해 주세요.',
    };
  }

  if (!data.agreedToPrivacy) {
    return {
      success: false,
      message: '개인정보 수집 및 이용에 동의해 주세요.',
    };
  }

  const timestamp = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  // --------------------------------------------------------------------------
  // [연동 가이드 1: Google Sheets 연동 시]
  // const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
  // await fetch(GOOGLE_SCRIPT_URL, {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ ...data, timestamp }),
  // });
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [연동 가이드 2: Supabase 연동 시]
  // const { data: result, error } = await supabase
  //   .from('consultations')
  //   .insert([{ name: data.name, phone: data.phone, concern: data.concern, ... }]);
  // --------------------------------------------------------------------------

  // 데모 시연을 위해 브라우저 LocalStorage에 임시 기록 (클라이언트 시연 확인용)
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    existing.unshift({ ...data, timestamp, id: 'demo-' + Date.now() });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(0, 10)));
  } catch (err) {
    console.warn('LocalStorage save failed:', err);
  }

  return {
    success: true,
    message: `${data.name} 님, 무료 피부상담 신청이 정상 접수되었습니다. 확인 후 빠른 시간 내에 연락드리겠습니다.`,
    submittedData: data,
    timestamp,
  };
}

/**
 * 데모 시연용: 저장된 상담 접수 내역 조회 (필요시)
 */
export function getStoredConsultations(): Array<ConsultationFormData & { timestamp: string }> {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}
