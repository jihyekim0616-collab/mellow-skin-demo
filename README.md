# MELLOW SKIN (멜로우 스킨) - 1:1 프라이빗 스킨케어 데모

소상공인 1인 뷰티·피부관리샵 홈페이지 제작 서비스를 위한 공식 포트폴리오 데모 웹사이트입니다.

---

## 🌿 주요 특징

- **1:1 프라이빗 스킨케어 맞춤 디자인**:
  - 베이지, 아이보리, 브라운 계열의 차분하고 고급스러운 컬러 시스템
  - 30~50대 여성 타깃의 신뢰감 있는 카피라이팅 및 서체 구성 (Pretendard & Cormorant Garamond)
  - 병원이나 공장형 피부과와 차별화된 아늑하고 편안한 감성 전달
- **완전 반응형 (Mobile & Desktop)**:
  - 데스크톱 고해상도부터 모바일 390px 화면까지 완벽 최적화
  - 모바일 햄버거 메뉴 및 하단 고정 빠른 예약/상담 플로팅 바 제공
- **한 페이지 스크롤 (Single Page Application)**:
  - 부드러운 스크롤 이동 (`scroll-behavior: smooth`)
  - 과도한 애니메이션을 배제한 세련된 마이크로 인터랙션
- **모듈화된 상담 신청 시스템**:
  - 상담 신청 폼 유효성 검사 및 안내 모달
  - `src/services/consultationService.ts`에 분리되어 있어 추후 Supabase 또는 Google Sheets API와 손쉽게 연동 가능
- **가상 데모 고지**:
  - 포트폴리오 시연용 가상 업체임을 명확히 표시하면서도, 실제 매장 판매 시 즉시 납품 가능한 실전 완성도

---

## 📂 프로젝트 섹션 구조

1. **상단 헤더 (Header)**: 로고, 섹션 내비게이션, 모바일 햄버거 드로어, 빠른 상담 버튼
2. **Hero 영역**: 감성 비주얼, 메인/서브 카피, 2개 CTA(프로그램 보기 / 무료 피부상담), 신뢰 뱃지
3. **피부 고민 (Concerns)**: 4대 피부 고민 카드 (탄력 저하, 건조함, 칙칙한 피부톤, 반복 트러블)
4. **프로그램 소개 (Programs)**:
   - SIGNATURE CARE (탄력·보습 / 80분 / 89,000원)
   - CALMING CARE (민감·진정 / 70분 / 79,000원)
   - PREMIUM CARE (맞춤 프리미엄 / 100분 / 129,000원)
5. **브랜드 소개 (Brand Story)**: "하루에 많은 고객을 받지 않습니다" 철학과 3대 가치
6. **관리 과정 (Care Process)**: STEP 01~04 정밀 상담 및 케어 프로세스
7. **고객 후기 (Reviews)**: 데모 고지가 포함된 자연스러운 3편의 실제 방문자 스타일 후기
8. **무료 피부상담 신청 (Consultation Form)**: 이름, 연락처, 고민, 희망 시간, 개인정보 수집 동의, 신청 완료 뷰
9. **오시는 길 & 매장 안내 (Location & Contact)**: 가상 주소, 영업시간, 주차/지하철 안내, 전화/카톡/네이버예약 연동 모달
10. **푸터 (Footer)**: 포트폴리오 고지, 가상 사업자 정보, 빠른 링크, 맨 위로 가기 버튼
11. **모바일 하단 고정 바 (Mobile Sticky Bar)**: 스마트폰 화면 하단 빠른 상담/예약 플로팅 버튼

---

## 🛠 기술 스택

- **Core**: React 19, TypeScript
- **Bundler**: Vite
- **Icons**: Lucide React
- **Typography**: Pretendard, Cormorant Garamond, Noto Serif KR
- **Styling**: Pure Modern CSS with CSS Variables (외부 유료 라이브러리 의존성 없음)

---

## 🚀 로컬 실행 방법

```bash
# 1. 패키지 설치 (이미 완료됨)
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 브라우저에서 접속
http://localhost:5173
```

---

## 🌐 Cloudflare Pages 배포 가이드

본 프로젝트는 Cloudflare Pages에 바로 배포할 수 있도록 최적화되어 있습니다.

1. **Framework preset**: `Vite` (또는 `None`)
2. **Build command**: `npm run build`
3. **Build output directory**: `dist`
4. **Root directory**: `/` (기본값)
