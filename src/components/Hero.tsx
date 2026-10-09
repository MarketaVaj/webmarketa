import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenReservation?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full h-[100dvh] min-h-[500px] max-h-[1080px] flex items-start overflow-hidden bg-[#24211D]">
      {/* Background image - framed so sky is at top and figure is lower center/right */}
      <img
        src={IMAGES.hero}
        alt="Lesní dřevěný chodník s meditující ženou"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-[50%_10%] sm:object-[50%_15%] md:object-center transition-transform duration-1000"
      />

      {/* Dark overlay with upper gradient for high text readability in sky region */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/35 md:to-transparent" />

      {/* Hero Content container - shifted up ~0.5 cm */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-8 md:pl-14 lg:pl-20 pt-26 xs:pt-28 sm:pt-30 md:pt-28 lg:pt-30">
        <div className="max-w-[250px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[460px] text-white space-y-2.5 sm:space-y-4 md:space-y-5">
          {/* Main Headline H1 - sans font matching body paragraph font size & family, 2 lines */}
          <h1 className="font-sans text-xs sm:text-sm md:text-base font-normal leading-relaxed text-[#ECE8E2] drop-shadow whitespace-pre-line">
            {'Přijď zpomalit, nadechnout se\na najít rovnováhu.'}
          </h1>

          {/* Body Paragraph */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#ECE8E2] leading-relaxed font-normal max-w-[250px] xs:max-w-[270px] sm:max-w-[320px] md:max-w-[380px] drop-shadow">
            Objevte prostor, kde se propojuje pohyb, dech a klid. Lekce jógy, víkendové pobyty i inspirace pro každodenní život.
          </p>

          {/* Social Icons row */}
          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2.5 sm:gap-4">
              <a
                href="https://www.facebook.com/straznickejogovani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Strážnické jógování"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-[48px] md:h-[48px] rounded-full bg-[#F3EEE7] text-[#36402B] flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current stroke-none" />
              </a>

              <a
                href="https://www.instagram.com/marketavajcnerova/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Strážnické jógování"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-[48px] md:h-[48px] rounded-full bg-[#F3EEE7] text-[#36402B] flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

