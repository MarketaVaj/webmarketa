import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { ModalType } from '../types';
import { Logo } from './Logo';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: (modal: ModalType) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onOpenModal,
}) => {
  const handleNavClick = (modal: ModalType) => {
    onClose();
    if (modal) {
      setTimeout(() => {
        onOpenModal(modal);
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment key="drawer-wrapper">
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Off-canvas panel */}
          <motion.div
            key="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-[#24211D] text-white p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl border-l border-white/10"
          >
            {/* Header row */}
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <div onClick={() => handleNavClick(null)}>
                <Logo light={true} />
              </div>
              <button
                onClick={onClose}
                aria-label="Zavřít menu"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="my-auto py-8 space-y-6">
              <button
                onClick={() => handleNavClick(null)}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>Úvodní stránka</span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>

              <button
                onClick={() => handleNavClick('reservation')}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span>Rezervace</span>
                  <span className="text-xs font-sans uppercase bg-[#65744B] text-white px-2.5 py-1 rounded-full tracking-wider">Online</span>
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>

              <button
                onClick={() => handleNavClick('retreats')}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>Jógové pobyty a akce</span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>

              <button
                onClick={() => handleNavClick('lessons')}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>Lekce & Rozvrh</span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>O mně</span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>

              <button
                onClick={() => handleNavClick('vouchers')}
                className="w-full text-left font-serif text-3xl sm:text-4xl hover:text-[#A3B18A] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <span>Dárkové poukazy</span>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#A3B18A]" />
              </button>
            </nav>

            {/* Quick Contact & Info Footer */}
            <div className="pt-6 border-t border-white/10 space-y-3.5 text-sm text-[#ECE8E2] font-sans">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <span>Strážnice & okolí, Jihomoravský kraj</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <a href="mailto:straznickejogovani@gmail.com" className="hover:underline">
                  straznickejogovani@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <a href="tel:+420734182389" className="hover:underline">
                  +420 734 182 389
                </a>
              </div>
              <div className="text-sm text-[#ECE8E2] pl-7">
                IČ: 02154005
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/straznickejogovani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Strážnické jógování"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/marketavajcnerova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Strážnické jógování"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.reservio.cz/b/straznicke-jogovani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-center transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Rezervovat lekci přes Reservio</span>
                </a>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
