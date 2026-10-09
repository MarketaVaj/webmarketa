import React from 'react';
import { IMAGES } from '../assets/images';

interface SmallCardsProps {
  onOpenLessons: () => void;
  onOpenAbout: () => void;
  onOpenVouchers: () => void;
}

export const SmallCards: React.FC<SmallCardsProps> = ({
  onOpenLessons,
  onOpenAbout,
  onOpenVouchers,
}) => {
  return (
    <section className="w-full bg-[#F5F1EA] pb-12 sm:pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Card 1: Lekce */}
        <div
          onClick={onOpenLessons}
          className="group relative h-[250px] sm:h-[270px] rounded-[18px] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 text-white"
        >
          <img
            src={IMAGES.lesson}
            alt="Jógová lekce v prosvětleném studiu"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          <div className="relative z-10 space-y-1">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight drop-shadow-sm">
              Lekce
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              JÓGA PRO KAŽDÉHO
            </p>
          </div>
        </div>

        {/* Card 2: O mně */}
        <div
          onClick={onOpenAbout}
          className="group relative h-[250px] sm:h-[270px] rounded-[18px] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 text-white"
        >
          <img
            src={IMAGES.journal}
            alt="Zápisník, čaj a atmosféra pro O mně"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          <div className="relative z-10 space-y-1">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight drop-shadow-sm">
              O mně
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              MOJE JÓGOVÁ CESTA
            </p>
          </div>
        </div>

        {/* Card 3: Dárkové poukazy */}
        <div
          onClick={onOpenVouchers}
          className="group relative h-[250px] sm:h-[270px] rounded-[18px] overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 text-white sm:col-span-2 lg:col-span-1"
        >
          <img
            src={IMAGES.voucher}
            alt="Dárkový poukaz s stuhou"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          <div className="relative z-10 space-y-1">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-tight tracking-tight drop-shadow-sm">
              Dárkové poukazy
            </h3>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              POTĚŠTE SEBE I SVÉ BLÍZKÉ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
