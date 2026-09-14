import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Concerns } from './components/Concerns';
import { Programs } from './components/Programs';
import { BrandStory } from './components/BrandStory';
import { CareProcess } from './components/CareProcess';
import { Reviews } from './components/Reviews';
import { ConsultationSection } from './components/ConsultationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { NoticeModal, type ModalType } from './components/NoticeModal';

export function App() {
  const [selectedProgram, setSelectedProgram] = useState<string>('');
  const [selectedConcern, setSelectedConcern] = useState<string>('');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleSelectProgram = (progName: string) => {
    setSelectedProgram(progName);
  };

  const handleSelectConcern = (concernTitle: string) => {
    setSelectedConcern(concernTitle);
  };

  const handleScrollToConsultation = () => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoAction = (actionType: 'phone' | 'kakao' | 'naver') => {
    setActiveModal(actionType);
  };

  return (
    <div className="app-root">
      {/* 1. Header with brand logo, nav links & hamburger drawer */}
      <Header />

      {/* Main Single-page Landing Sections */}
      <main id="main-content">
        {/* 2. Hero Section with Luxury Skincare Visual, Copy & Dual CTAs */}
        <Hero />

        {/* 3. Skin Concerns (요즘 피부, 이런 고민 있으신가요?) */}
        <Concerns onSelectConcern={handleSelectConcern} />

        {/* 4. Programs Introduction (3 Care Packages with prices & times) */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* 5. Brand Philosophy (하루에 많은 고객을 받지 않습니다) */}
        <BrandStory />

        {/* 6. Care Process (STEP 01 ~ STEP 04) */}
        <CareProcess />

        {/* 7. Customer Reviews (3 realistic Korean testimonials + demo notice) */}
        <Reviews />

        {/* 8. Free Skin Consultation Form (Mock submission + future DB integration) */}
        <ConsultationSection
          initialProgram={selectedProgram}
          initialConcern={selectedConcern}
          onPrivacyClick={() => setActiveModal('privacy')}
        />

        {/* 9. Location, Hours, Directions & Action Buttons */}
        <LocationSection onDemoActionClick={handleDemoAction} />
      </main>

      {/* 10. Footer with Portfolio Disclaimer & Business info */}
      <Footer />

      {/* Mobile Sticky Floating CTA Bar (상담하기 & 예약하기) */}
      <MobileStickyBar
        onConsultClick={handleScrollToConsultation}
        onReserveClick={() => setActiveModal('naver')}
      />

      {/* Demo Action Modal (Phone, Kakao, Naver Booking, Privacy Policy) */}
      <NoticeModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onGoToConsultation={handleScrollToConsultation}
      />
    </div>
  );
}

export default App;
