import React from 'react';
import { IMAGES } from '../assets/images';

interface ServiceCardsProps {
  onOpenReservation?: () => void;
  onOpenRetreats: () => void;
  onOpenLessons: () => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({
  onOpenRetreats,
  onOpenLessons,
}) => {
  return (
    <section className="w-full bg-[#F5F1EA] py-8 sm:py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Card 1: Rezervace */}
        <a
          href="https://www.reservio.cz/b/straznicke-jogovani"
          target="_blank"
          rel="noopener noreferrer"
          id="reservio-card-link"
          className="group relative h-[340px] sm:h-[370px] lg:h-[380px] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 md:p-9 text-white block"
        >
          {/* Background image */}
          <img
            src={IMAGES.studio}
            alt="Jógové studio pro rezervaci lekcí"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          {/* Content at the bottom */}
          <div className="relative z-10 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-tight tracking-tight drop-shadow-sm">
              Rezervace
            </h2>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              REZERVUJTE SI LEKCI ONLINE
            </p>
          </div>
        </a>

        {/* Card 2: Jógové pobyty a akce */}
        <div
          onClick={onOpenRetreats}
          className="group relative h-[340px] sm:h-[370px] lg:h-[380px] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 md:p-9 text-white"
        >
          {/* Background image */}
          <img
            src={IMAGES.pobyty}
            alt="Jógová pozice na louce pro jógové pobyty a akce"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          {/* Content at the bottom */}
          <div className="relative z-10 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-tight tracking-tight drop-shadow-sm">
              Jógové pobyty a akce
            </h2>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              DOPŘEJTE SI NĚKOLIK CHVIL ČI DNÍ KLIDU
            </p>
          </div>
        </div>

        {/* Card 3: Lekce */}
        <div
          onClick={onOpenLessons}
          className="group relative h-[340px] sm:h-[370px] lg:h-[380px] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 md:p-9 text-white md:col-span-2 lg:col-span-1"
        >
          {/* Background image */}
          <img
            src={IMAGES.lesson}
            alt="Lekce jógy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

          {/* Content at the bottom */}
          <div className="relative z-10 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-tight tracking-tight drop-shadow-sm">
              Lekce
            </h2>
            <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[1.5px] text-[#ECE8E2] opacity-90">
              JÓGA PRO KAŽDÉHO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
