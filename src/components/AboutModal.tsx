import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div key="about-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="about-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            key="about-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-4xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    O mně – Moje jógová cesta
                  </h3>
                  <p className="text-xs text-[#ECE8E2] font-sans">
                    Markéta • Zakladatelka Strážnického jogování
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 relative h-72 md:h-96 rounded-2xl overflow-hidden border border-[#DCD4C8] shadow-md">
                  <img
                    src={IMAGES.journal}
                    alt="Markéta - Strážnické jogování"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white font-serif text-lg">
                    Markéta, Strážnice
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4 font-sans text-sm sm:text-base text-[#56514A] leading-relaxed">
                  <h4 className="font-serif text-3xl font-normal text-[#24211D] leading-snug">
                    „Jóga pro mě není o dokonalé pozici, ale o návratu k vlastnímu dechu a vnímání přítomnosti.“
                  </h4>

                  <p>
                    Vítám vás ve svém komorním prostoru. Moje cesta k józe začala před více než osmi lety, kdy jsem v rušném životě hledala ostrůvek klidu, kde bych se mohla zastavit a zregenerovat síly.
                  </p>

                  <p>
                    Postupem času se z osobní praxe stala hluboká vášeň a touha předávat tento pocit rovnováhy dále. Založila jsem <strong className="text-[#24211D]">Strážnické jogování</strong> jako bezpečné místo bez hodnocení, kde může každý cvičit podle možností svého těla.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#65744B] bg-[#65744B]/10 px-3 py-1.5 rounded-full">
                      <Award className="w-4 h-4" />
                      <span>Certifikovaná lektorka Hatha & Vinyasa Yoga (RYT 200)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#65744B] bg-[#65744B]/10 px-3 py-1.5 rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span>Slovácko & Strážnice</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy quote */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCD4C8] space-y-3 text-center max-w-2xl mx-auto shadow-sm">
                <p className="font-serif italic text-xl text-[#24211D]">
                  „Když zklidníme dech, zklidní se i naše mysl. A v tichu mysli nacházíme odpovědi na to, co v životě opravdu potřebujeme.“
                </p>
                <span className="text-xs font-semibold text-[#65744B] uppercase tracking-widest block">
                  — MARKÉTA
                </span>
              </div>

              <div className="pt-4 border-t border-[#DCD4C8] flex items-center justify-between gap-4">
                <p className="text-sm text-[#56514A]">
                  Přijďte vyzkoušet první lekci a načerpat novou energii.
                </p>

                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => onOpenReservation(), 200);
                  }}
                  className="px-8 py-3 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Rezervovat si lekci</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
