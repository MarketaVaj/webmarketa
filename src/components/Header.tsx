import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenMenu: () => void;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onLogoClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 h-[90px] px-6 sm:px-10 md:px-16 flex items-center justify-between">
      <div onClick={onLogoClick}>
        <Logo light={true} />
      </div>

      <button
        onClick={onOpenMenu}
        aria-label="Otevřít navigaci"
        id="hamburger-menu-button"
        className="w-11 h-11 rounded-full bg-black/20 hover:bg-black/30 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 text-white group cursor-pointer"
      >
        <span className="w-5 h-[2px] bg-white rounded-full transition-transform group-hover:w-6" />
        <span className="w-5 h-[2px] bg-white rounded-full transition-transform" />
        <span className="w-5 h-[2px] bg-white rounded-full transition-transform group-hover:w-4" />
      </button>
    </header>
  );
};
