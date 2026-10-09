import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div key="privacy-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            key="privacy-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            key="privacy-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-3xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-8 max-h-[85vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    Zásady ochrany osobních údajů
                  </h3>
                  <p className="text-xs text-[#ECE8E2] font-sans">
                    Strážnické jogování • GDPR Informace
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

            {/* Scrollable text */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm text-[#56514A] leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold text-[#24211D]">1. Správce osobních údajů</h4>
                <p>
                  Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů (GDPR) je provozovatel projektu Strážnické jogování (IČ: 02154005, e-mail: straznickejogovani@gmail.com, tel: +420 734 182 389).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold text-[#24211D]">2. Účely a rozsah zpracování údajů</h4>
                <p>
                  Zpracováváme osobní údaje, které nám poskytujete v souvislosti s rezervací lekcí, objednávkou dárkových poukazů nebo přihlášením na jógové pobyty:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Jméno a příjmení</li>
                  <li>E-mailová adresa</li>
                  <li>Telefonní číslo</li>
                  <li>Případné poznámky týkající se zdravotního stavu či preference stravování na pobytech</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold text-[#24211D]">3. Právní základ pro zpracování</h4>
                <p>
                  Právním důvodem zpracování osobních údajů je plnění smlouvy o poskytování služeb (rezervace lekcí, pobytů), vyřízení objednávky dárkových poukazů a oprávněný zájem správce na komunikaci se zákazníky.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold text-[#24211D]">4. Doba uchovávání údajů</h4>
                <p>
                  Osobní údaje uchováváme po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu a dále po dobu požadovanou příslušnými právními předpisy ČR.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl font-semibold text-[#24211D]">5. Vaše práva</h4>
                <p>
                  Máte právo na přístup k osobním údajům, opravu nebo výmaz osobních údajů, omezení zpracování, vznesení námitky proti zpracování a právo na přenositelnost údajů. V případě dotazů nás neváhejte kontaktovat na straznickejogovani@gmail.com.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD4C8] text-right">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-sm transition-all shadow cursor-pointer"
                >
                  Rozumím a zavřít
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
