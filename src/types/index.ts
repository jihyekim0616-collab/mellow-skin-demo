export interface Program {
  id: string;
  nameEn: string;
  nameKo: string;
  summary: string;
  durationMinutes: number;
  price: number;
  formattedPrice: string;
  tag?: string;
  features: string[];
  recommendedFor: string;
  steps: string[];
}

export interface ConcernCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  symptoms: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  ageGroup: string;
  careType: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  tag: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  concern: string;
  preferredProgram?: string;
  preferredTime: string;
  memo?: string;
  agreedToPrivacy: boolean;
}

export interface ConsultationSubmitResult {
  success: boolean;
  message: string;
  submittedData?: ConsultationFormData;
  timestamp?: string;
}
