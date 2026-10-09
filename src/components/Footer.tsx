import React from 'react';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenLogo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenLogo }) => {
  return (
    <footer className="w-full relative bg-gradient-to-b from-[#F4EFE6] to-[#ECE6DD] border-t border-[#E2DAD0]/60 text-[#24211D] pt-12 pb-8 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      {/* Subtle misty background texture effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, rgba(101,116,75,0.15), transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-[1920px] mx-auto space-y-10">
        {/* Upper row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
          {/* Column 1: Logo */}
          <div className="flex justify-start" onClick={onOpenLogo}>
            <Logo light={false} />
          </div>

          {/* Column 2: Contact info */}
          <div className="flex flex-col items-start md:items-center space-y-2.5 text-sm sm:text-base font-sans text-[#56514A]">
            <a
              href="mailto:straznickejogovani@gmail.com"
              className="flex items-center gap-2.5 hover:text-[#65744B] transition-colors group"
            >
              <Mail className="w-4 h-4 text-[#65744B] group-hover:scale-110 transition-transform" />
              <span>straznickejogovani@gmail.com</span>
            </a>
            <a
              href="tel:+420734182389"
              className="flex items-center gap-2.5 hover:text-[#65744B] transition-colors group"
            >
              <Phone className="w-4 h-4 text-[#65744B] group-hover:scale-110 transition-transform" />
              <span>+420 734 182 389</span>
            </a>
            <div className="text-sm sm:text-base text-[#56514A]">
              IČ: 02154005
            </div>
          </div>

          {/* Column 3: Social icons */}
          <div className="flex items-center justify-start md:justify-end gap-3.5">
            <a
              href="https://www.facebook.com/straznickejogovani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#36402B] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#586640] hover:scale-110 active:scale-95"
            >
              <Facebook className="w-4 h-4 fill-current stroke-none" />
            </a>
            <a
              href="https://www.instagram.com/marketavajcnerova/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#36402B] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#586640] hover:scale-110 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#DCD4C8]" />

        {/* Bottom row: Copyright, Love note, Privacy policy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#56514A] font-sans items-center">
          <div className="text-left font-sans">
            © 2026 Strážnické jógování
          </div>

          <div className="text-left md:text-center italic text-[#65744B] font-serif text-base">
            Tvořeno s láskou pro váš klid
          </div>

          <div className="text-left md:text-right">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#65744B] underline underline-offset-4 cursor-pointer transition-colors"
            >
              Zásady ochrany osobních údajů
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
