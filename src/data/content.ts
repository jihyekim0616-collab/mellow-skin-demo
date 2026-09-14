import type { Program, ConcernCard, ReviewItem, ProcessStep } from '../types';

export const BRAND_INFO = {
  nameEn: 'MELLOW SKIN',
  nameKo: '멜로우 스킨',
  subline: '1:1 Private Skincare Studio',
  mainCopy: '오늘의 피부보다,\n한 달 뒤의 피부를 생각합니다.',
  subCopy: '한 사람의 피부에 집중하는\n1:1 프라이빗 스킨케어',
  description: '멜로우 스킨은 찍어내듯 진행하는 획일화된 관리가 아닌, 그날의 피부 컨디션과 생활 패턴을 세심하게 살피는 1:1 맞춤형 프라이빗 피부관리실입니다.',
  phone: '02-0000-0000',
  virtualPhone: '0507-0000-0000 (시연용 가상번호)',
  address: '서울특별시 강남구 도산대로 000 멜로우빌딩 3층',
  addressNotice: '(포트폴리오용 가상 매장입니다)',
  hours: {
    weekday: '10:00 - 20:00',
    saturday: '10:00 - 18:00',
    sunday: '정기 휴무 (일요일 / 공휴일)',
  },
  reservationNotice: '100% 사전 예약제 운영으로 한 타임 한 분의 고객에게만 온전히 집중합니다.',
  metaDescription: '1:1 프라이빗 피부관리 전문샵 멜로우 스킨. 오늘의 피부보다 한 달 뒤의 피부를 생각하는 정성스러운 1인 스킨케어 스튜디오.',
};

export const CONCERNS_DATA: ConcernCard[] = [
  {
    id: 'elasticity',
    title: '탄력 저하 & 잔주름',
    subtitle: '무너지는 페이스 라인과 속탄력',
    description: '세월과 피로로 인해 서서히 무너지는 피부 턱선과 건조함으로 깊어지는 미세 주름을 부드럽고 촘촘하게 채워줍니다.',
    iconName: 'Sparkles',
    symptoms: ['베개 자국이 오래 남음', '턱선이 무뎌지고 탄력이 떨어짐', '눈가와 팔자 주변이 건조하고 그늘짐'],
  },
  {
    id: 'dryness',
    title: '극심한 건조함 & 속당김',
    subtitle: '크림을 덧발라도 푸석한 피부결',
    description: '피부 겉만 번들거리고 속은 바싹 마르는 유수분 불균형. 피부 장벽 본연의 보습 메커니즘을 편안하게 깨워줍니다.',
    iconName: 'Droplets',
    symptoms: ['세안 직후 심한 당김', '화장이 들뜨고 각질이 일어남', '기초 제품을 발라도 금세 흡수되지 않음'],
  },
  {
    id: 'dullness',
    title: '칙칙한 피부톤 & 피로감',
    subtitle: '투명함을 잃고 잿빛이 도는 안색',
    description: '순환 저하와 각질 턴오버 둔화로 어두워진 피부에 부드러운 순환 테크닉과 맑은 생기를 더해 자연스러운 윤기를 되찾습니다.',
    iconName: 'SunMedium',
    symptoms: ['주변에서 피곤해 보인다는 말을 자주 들음', '피부결이 거칠고 안색이 어두움', '자고 일어나도 피부가 맑아 보이지 않음'],
  },
  {
    id: 'trouble',
    title: '반복되는 민감 트러블',
    subtitle: '작은 자극에도 붉어지고 뒤집어지는 피부',
    description: '외부 환경과 스트레스로 예민해진 피부 장벽을 진정시키고, 자극 없이 피부 스스로 회복할 수 있는 힘을 길러줍니다.',
    iconName: 'ShieldAlert',
    symptoms: ['온도 변화나 마스크 마찰에 쉽게 붉어짐', '원인 모를 좁쌀과 트러블의 반복', '피부가 얇아지고 쉽게 가려움'],
  },
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'signature',
    nameEn: 'SIGNATURE CARE',
    nameKo: '시그니처 케어',
    summary: '탄력 · 보습 집중관리',
    durationMinutes: 80,
    price: 89000,
    formattedPrice: '89,000원',
    tag: 'MOST POPULAR',
    recommendedFor: '속당김이 심하고 푸석한 피부, 서서히 저하되는 피부 탄력이 고민인 분',
    features: [
      '피부 장벽 맞춤 딥하이드레이션',
      '부드러운 데콜테 & 페이셜 순환 테라피',
      '고밀도 탄력 리프팅 팩 & 냉각 진정',
      '피부결 정돈 및 유수분 보호막 형성',
    ],
    steps: ['클렌징 & 각질 연화', '수분 앰플 도포', '페이셜 순환 테라피', '탄력 모델링팩', '마무리 보습 보호막'],
  },
  {
    id: 'calming',
    nameEn: 'CALMING CARE',
    nameKo: '카밍 케어',
    summary: '민감 · 진정 집중관리',
    durationMinutes: 70,
    price: 79000,
    formattedPrice: '79,000원',
    tag: 'SENSITIVE CARE',
    recommendedFor: '외부 자극에 쉽게 붉어지는 피부, 환절기 장벽 무너짐과 가려움이 느껴지는 분',
    features: [
      '무자극 밸런싱 클렌징 & 수분 패치',
      '센텔라 & 판테놀 급속 진정 앰플 침투',
      '쿨링 크라이오 진정 릴랙싱',
      '장벽 복구 세라마이드 진정 팩',
    ],
    steps: ['저자극 클렌징', '진정 수딩 패치', '쿨링 진정 케어', '시카 모델링 팩', '장벽 강화 크림'],
  },
  {
    id: 'premium',
    nameEn: 'PREMIUM CARE',
    nameKo: '프리미엄 케어',
    summary: '맞춤형 프리미엄 관리',
    durationMinutes: 100,
    price: 129000,
    formattedPrice: '129,000원',
    tag: 'VIP ALL-IN-ONE',
    recommendedFor: '중요한 일정을 앞두고 있거나 복합적인 피부 노화와 피로를 한 번에 해결하고 싶은 분',
    features: [
      '정밀 피부 컨디션 체크 후 당일 앰플 커스터마이징',
      '승모근 · 쇄골 · 데콜테 집중 순환 릴랙싱',
      '프리미엄 펩타이드 & 콜라겐 2중 듀얼 팩',
      '두피 리프레시 및 맞춤 홈케어 솔루션 키트 안내',
    ],
    steps: ['정밀 피부 판독', '딥클렌징 & 림프 순환', '맞춤 고농축 앰플', '듀얼 리프팅 테라피', '두피 릴랙싱 & 마무리'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: '피부상담',
    subtitle: '생활 습관 및 피부 고민 파악',
    description: '따뜻한 차 한 잔과 함께 평소 홈케어 습관, 수면 패턴, 계절별 고민을 여유롭게 나눕니다.',
    details: ['홈케어 루틴 점검', '현재 사용하는 스킨케어 점검', '알레르기 및 민감도 확인'],
  },
  {
    step: 'STEP 02',
    title: '피부상태 체크',
    subtitle: '당일 피부 컨디션 정밀 확인',
    description: '육안 관찰과 촉진을 통해 유수분 밸런스, 피부 톤, 결, 장벽의 민감도를 꼼꼼히 확인합니다.',
    details: ['T존/U존 유수분 밸런스', '각질 두께 및 모공 상태', '붉은기 및 열감 체크'],
  },
  {
    step: 'STEP 03',
    title: '맞춤관리',
    subtitle: '오직 한 분을 위한 프라이빗 케어',
    description: '독립된 1인실에서 그날의 피부에 꼭 필요한 단계만을 선별하여 정성스럽게 관리합니다.',
    details: ['자극 없는 부드러운 관리', '소독된 청결 1회용 해면 사용', '편안한 조명과 아로마 힐링'],
  },
  {
    step: 'STEP 04',
    title: '홈케어 안내',
    subtitle: '관리 효과를 이어가는 일상 처방',
    description: '관리가 끝난 뒤 집에서도 피부 컨디션을 지킬 수 있도록 맞춤 세안법과 홈케어 가이드를 전해드립니다.',
    details: ['피부 맞춤 세안 팁', '수분 유지 생활 습관', '다음 관리 주기 추천'],
  },
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '김*은 고객님',
    ageGroup: '30대 직장인',
    careType: '시그니처 케어 (탄력·보습)',
    rating: 5,
    date: '2025. 11 방문',
    title: '"퇴근 후 공장형 피부과와 전혀 다른 힐링이었어요"',
    content: '매일 야근하고 히터 밑에 있다 보니 오후만 되면 볼이 땅기고 화장이 다 떴는데, 멜로우 스킨에서 시그니처 관리 받고 속당김이 거짓말처럼 편안해졌어요. 다른 손님 없이 저 혼자만 조용히 케어받는 시간이 너무 귀하고 행복했습니다.',
    tag: '속건조 완화 & 결 개선',
  },
  {
    id: 'rev-2',
    author: '이*정 고객님',
    ageGroup: '40대 워킹맘',
    careType: '프리미엄 케어 (맞춤 올인원)',
    rating: 5,
    date: '2025. 12 방문',
    title: '"다음 날 아침 세안할 때 피부 손끝 느낌이 달라요"',
    content: '나이가 들면서 피부가 힘없이 처지는 게 거울 볼 때마다 스트레스였는데, 데콜테부터 페이스까지 섬세하게 풀어주시니 얼굴선이 훨씬 가벼워졌어요. 과한 영업이나 회원권 강요가 전혀 없어서 원장님에 대한 신뢰가 더 깊어졌습니다.',
    tag: '페이스 라인 & 탄력 만족',
  },
  {
    id: 'rev-3',
    author: '박*서 고객님',
    ageGroup: '30대 프리랜서',
    careType: '카밍 케어 (민감·진정)',
    rating: 5,
    date: '2026. 01 방문',
    title: '"조금만 잘못 발라도 뒤집어지는 피부인데 편안해요"',
    content: '피부가 워낙 얇고 붉은기가 심해서 피부관리실 가는 걸 늘 망설였어요. 멜로우 스킨 원장님은 제 피부 상태를 오래 살피시고 자극 없는 제품으로만 차분하게 관리해주셨습니다. 관리 끝난 후 열감이 싹 가라앉아서 정기권 끊고 다닐 생각이에요.',
    tag: '붉은기 진정 & 편안한 무자극',
  },
];

export const PHILOSOPHY_POINTS = [
  {
    number: '01',
    title: '한 타임, 오직 한 분만을 위한 프라이빗 룸',
    description: '다른 고객과의 마주침 없이 오롯이 나만의 휴식을 누릴 수 있는 1인 독립 공간에서 편안한 관리가 진행됩니다.',
  },
  {
    number: '02',
    title: '기계적인 관리가 아닌, 매일 다른 피부 판독',
    description: '어제의 피부와 오늘의 피부는 다릅니다. 관리 전 충분한 문진과 피부 체크를 통해 그날 가장 필요한 처방을 드립니다.',
  },
  {
    number: '03',
    title: '무리한 자극 대신 피부 본연의 힘을 기르는 케어',
    description: '단기적인 겉포장이 아닌, 무너진 유수분 밸런스와 피부 장벽을 차분하게 회복시켜 건강한 지속성을 선물합니다.',
  },
];
