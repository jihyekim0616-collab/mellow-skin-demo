import { supabase } from '../lib/supabase';
import type { ConsultationFormData, ConsultationSubmitResult } from '../types';

/**
 * ==============================================================================
 * MELLOW SKIN - 무료 피부상담 신청 서비스 모듈
 * ==============================================================================
 * Supabase public.consultations 테이블과 연동하여 상담 신청 데이터를 저장합니다.
 * ==============================================================================
 */

// 로컬 테스트용 스토리지 키 (필요 시 보조용)
const LOCAL_STORAGE_KEY = 'mellow_skin_consultation_history';

/**
 * 무료 피부상담 신청 처리 함수
 * @param data 신청 양식 데이터
 * @returns 처리 결과 Promise
 */
export async function submitConsultationRequest(
  data: ConsultationFormData
): Promise<ConsultationSubmitResult> {
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

  try {
    const { error } = await supabase.from('consultations').insert([
      {
        name: data.name.trim(),
        phone: data.phone.trim(),
        skin_concern: data.concern,
        preferred_time: data.preferredTime,
        interested_program: data.preferredProgram || null,
        privacy_agreed: data.agreedToPrivacy,
      },
    ]);

    if (error) {
      console.error('Supabase consultations insert error:', error);
      return {
        success: false,
        message: '상담 신청 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      };
    }

    return {
      success: true,
      message: `${data.name} 님, 무료 피부상담 신청이 정상 접수되었습니다. 확인 후 빠른 시간 내에 연락드리겠습니다.`,
      submittedData: data,
      timestamp,
    };
  } catch (err) {
    console.error('Consultation submission exception:', err);
    return {
      success: false,
      message: '네트워크 또는 서버 오류로 상담 신청에 실패했습니다. 다시 시도해 주세요.',
    };
  }
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

