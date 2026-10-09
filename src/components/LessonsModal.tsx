import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, HeartHandshake, ShieldCheck, Ticket } from 'lucide-react';

interface LessonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const LessonsModal: React.FC<LessonsModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div key="lessons-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="lessons-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            key="lessons-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-4xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    Lekce jógy & Ceník
                  </h3>
                  <p className="text-xs text-[#ECE8E2] font-sans">
                    Jóga pro každého • Studio Strážnice
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

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              {/* Style cards */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-[#24211D]">
                  Styly lekcí, které u nás cvičíme
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Jemná Hatha jóga</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Pro všechny</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Harmonizační lekce zaměřená na vědomé setrvání v ásanách, dechové techniky (pránájámu) a závěrečnou hlubokou relaxaci.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Power jóga</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Energizující</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Plynulý pohyb propojený s dechem. Buduje sílu, flexibilitu a pomáhá pročišťovat tělo i mysl.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Jóga pro zdravá záda</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Zdravotní</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Specializovaný cvičební systém pro úlevu od bolesti páteře, uvolnění ztuhlých šíjových svalů a zpevnění středu těla.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Restorativní jóga</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Zklidňující</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Lekce, která vede k hlubokému uvolnění a obnovení těla a energie. Během praxe se využívají pomůcky, pomocí nichž se tělo ukotví a následně se v jednotlivých asánách zůstává 3-10 minut. Lekce ideální pro všechny, kteří hledají úlevu, klid a uvolnění.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Jógový kruháč</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Energetizující</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Dynamická lekce při níž se využívá princip kruhového tréningu s praxí jógových ásan. Po dobu 1 minuty se praktikuje dynamická verze ásany a následně se 15 sekund odpočívá.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif text-xl font-semibold text-[#24211D]">Jóga ve tmě</h5>
                      <span className="text-xs bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-0.5 rounded-full">Zklidňující</span>
                    </div>
                    <p className="text-sm text-[#56514A]">
                      Lekce propojuje jemnou jógovou praxi se zatemněným prostředím a vede k hlubšímu vnímání vlastního těla, dechu i mysli. Absence vizuálních podnětů pomáhá zklidnit mysl, podpořit koncentraci, uvolnit napětí a obrátit pozornost dovnitř k sobě. Tma se tak stává bezpečným prostorem pro sebepoznání, přijetí a nalezení vlastního vnitřního světla.
                    </p>
                  </div>
                </div>
              </div>

              {/* Price list */}
              <div className="space-y-4 pt-4 border-t border-[#DCD4C8]">
                <h4 className="font-serif text-2xl text-[#24211D]">Ceník lekcí & Permanentky</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] text-center space-y-2">
                    <Ticket className="w-8 h-8 text-[#65744B] mx-auto" />
                    <span className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">Jednotlivý vstup</span>
                    <div className="font-serif text-3xl font-bold text-[#24211D]">130 Kč</div>
                    <p className="text-xs text-[#56514A]">Lekce 60 minut. Platba v hotovosti nebo QR na místě. Restorativní jóga cena 150 Kč.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border-2 border-[#65744B] text-center space-y-2 relative shadow-md">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#65744B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      Nejoblíbenější
                    </span>
                    <Ticket className="w-8 h-8 text-[#65744B] mx-auto mt-1" />
                    <span className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">Permanentka 10 vstupů</span>
                    <div className="font-serif text-3xl font-bold text-[#24211D]">1 300 Kč</div>
                    <p className="text-xs text-[#56514A]">Platnost 1 rok.</p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] text-center space-y-2">
                    <ShieldCheck className="w-8 h-8 text-[#65744B] mx-auto" />
                    <span className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">Individuální lekce</span>
                    <div className="font-serif text-3xl font-bold text-[#24211D]">1 000 Kč</div>
                    <p className="text-xs text-[#56514A]">Soukromá praxe na míru pro vás.</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-[#DCD4C8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#56514A]">
                  Podložky, deky, bloky, popruhy i zakrytí očí jsou ve studiu zdarma k zapůjčení.
                </p>

                <a
                  href="https://www.reservio.cz/b/straznicke-jogovani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 shrink-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Rezervovat si místo na lekci</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
