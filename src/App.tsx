import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { SmallCards } from './components/SmallCards';
import { Footer } from './components/Footer';
import { NavigationDrawer } from './components/NavigationDrawer';
import { ReservationModal } from './components/ReservationModal';
import { RetreatsModal } from './components/RetreatsModal';
import { LessonsModal } from './components/LessonsModal';
import { AboutModal } from './components/AboutModal';
import { VouchersModal } from './components/VouchersModal';
import { GalleryModal } from './components/GalleryModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F1EA] text-[#24211D] flex flex-col font-sans selection:bg-[#65744B] selection:text-white relative">
      {/* Header over Hero */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onLogoClick={scrollToTop}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-1 w-full">
        {/* 1. Fullscreen Hero Section */}
        <Hero
          onOpenReservation={() => handleOpenModal('reservation')}
        />

        {/* 2. First Row Cards: Rezervace, Jógové pobyty a akce, Lekce */}
        <ServiceCards
          onOpenRetreats={() => handleOpenModal('retreats')}
          onOpenLessons={() => handleOpenModal('lessons')}
        />

        {/* 3. Second Row Cards: O mně, Fotogalerie, Dárkové poukazy */}
        <SmallCards
          onOpenAbout={() => handleOpenModal('about')}
          onOpenGallery={() => handleOpenModal('gallery')}
          onOpenVouchers={() => handleOpenModal('vouchers')}
        />
      </main>

      {/* 4. Footer Section */}
      <Footer
        onOpenPrivacy={() => handleOpenModal('privacy')}
        onOpenLogo={scrollToTop}
      />

      {/* Navigation Drawer Overlay */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive Feature Modals */}
      <ReservationModal
        isOpen={activeModal === 'reservation'}
        onClose={handleCloseModal}
      />

      <RetreatsModal
        isOpen={activeModal === 'retreats'}
        onClose={handleCloseModal}
        onOpenReservation={() => handleOpenModal('reservation')}
      />

      <LessonsModal
        isOpen={activeModal === 'lessons'}
        onClose={handleCloseModal}
        onOpenReservation={() => handleOpenModal('reservation')}
      />

      <AboutModal
        isOpen={activeModal === 'about'}
        onClose={handleCloseModal}
        onOpenReservation={() => handleOpenModal('reservation')}
      />

      <VouchersModal
        isOpen={activeModal === 'vouchers'}
        onClose={handleCloseModal}
      />

      <GalleryModal
        isOpen={activeModal === 'gallery'}
        onClose={handleCloseModal}
      />

      <PrivacyModal
        isOpen={activeModal === 'privacy'}
        onClose={handleCloseModal}
      />
    </div>
  );
}
