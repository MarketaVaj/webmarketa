import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Award, Sparkles, MapPin } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

const courses = [
  {
    title: 'Vzdělávací program: Instruktor jógy (150 hodin)',
    year: '2020',
    issuer: 'Majda agency s.r.o.',
  },
  {
    title: 'Principy zdravého pohybu a vývojová kineziologie (20 hodin)',
    year: '2020',
    issuer: 'Lenka Oravcová',
  },
  {
    title: 'Seminář Fyziologie a bolesti krční páteře (12 hodin)',
    year: '2022',
    issuer: 'Yoga World s.r.o.',
  },
  {
    title: 'Nadstavbový kurz Jóga pro zdravá záda (50 hodin)',
    year: '2023',
    issuer: 'Yoga World s.r.o.',
  },
  {
    title: 'Učitelský trénink Chakra Vinyasa Yoga & Aromatherapy (30 hodin)',
    year: '2024',
    issuer: 'DVA JÓGA ATELIÉR',
  },
  {
    title: 'Restorativní jóga (20 hodin)',
    year: '2026',
    issuer: 'Karma Škola Jógy',
  },
  {
    title: 'Yoga & Dance Spring Festival Ostrava – účastník',
    year: '2024, 2025, 2026',
    issuer: 'Ostrava',
  },
  {
    title: 'Jógabraní Hustopeče – účastník',
    year: '2022, 2024, 2025, 2026',
    issuer: 'Hustopeče',
  },
];

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
                    Markéta Vajčnerová • Strážnické jógování
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
              <div className="block">
                {/* Heading */}
                <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#24211D] leading-snug mb-5">
                  „Zdraví, klid, dech, učení se, pomoc, zastavení, nekončící proces....“
                </h4>

                {/* Floated image in right corner */}
                <div className="w-full sm:w-[280px] md:w-[330px] sm:float-right sm:ml-6 md:ml-8 mb-5 rounded-2xl overflow-hidden border border-[#DCD4C8] shadow-md relative group">
                  <img
                    src={IMAGES.templeAbout}
                    alt="Markéta v chrámu - Strážnické jógování"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[460px] object-cover object-center"
                  />
                </div>

                {/* Flowing text wrapping around image and continuing full-width */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-[#3B3731] leading-relaxed">
                  <p className="leading-relaxed">
                    Moje jógová cesta začala po utlumení jiné cesty, folklorní. Od mala jsem se věnovala lidovému tanci, rodiče vedoucí souborů, aktivní folkloristi. Co jsem se naučila chodit, začala jsem tancovat. Pak ale přišla práce, osm a více hodin denně na židli, na dojíždění do Strážnice nebylo tolik času a na pravidelné páteční a nedělní nácviky také ne. Tato kombinace se podepsala na mých zádech a začali se objevovat první bolístky. A protože všechno zlé je k něčemu dobré, dostala se do mého života nová &quot;pohybová aktivita&quot;, které zafungovala. Tak se stalo, že folklorní nácviky vystřídaly ranní lekce jógy a jak čas plynul a práce bylo více a více začala jsem zjišťovat, že pohybová aktivita není jenom o tom pohybu, ale také o sklidnění, urovnání si myšlenek, dechu, stabilitě, a že to do sebe pěkně zapadá.
                  </p>

                  <p className="leading-relaxed">
                    Po cca 5ti letech praxe přišel dotaz od mojí lektorky na instruktorský kurz, který jsem brala jako fajn příležitost na prohloubení své vlastní jógové praxe. Postupem času, malými krůžky, přicházeli první lekce v Brně a po Covidovém stěhování i vlastní lekce ve Strážnici. Někteří si možná ještě vzpomenou na jejich &quot;skromé lekce&quot;, kdy přišel jeden, dva a tři účastníci už byli obrovský svátek, ale postupek let se to změnilo a jógová komunita se začala rozrůstat.
                  </p>

                  <p className="leading-relaxed">
                    Pro mně obrosvký závazek a chuť posouvat svou vlastní praxi, své znalosti, a zkušenosti dál a dál a moci je předávat ostatním. Je to nekončící process, člověk je věčným studentem, ale je to krásná cesta poznání a pomoci a pomoci zároveň.
                  </p>
                </div>

                {/* Badges */}
                <div className="clear-both pt-4 flex flex-wrap gap-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#65744B] bg-[#65744B]/10 px-3.5 py-1.5 rounded-full">
                    <Award className="w-4 h-4" />
                    <span>Instruktorka jógy</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#65744B] bg-[#65744B]/10 px-3.5 py-1.5 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>Strážnice & Slovácko</span>
                  </div>
                </div>
              </div>

              {/* Courses Table */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-[#24211D]">
                  <Award className="w-5 h-5 text-[#65744B]" />
                  <h5 className="font-serif text-xl sm:text-2xl font-normal">
                    Přehled kurzů a vzdělání
                  </h5>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#DCD4C8] bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#EFEAE2]/75 text-[#24211D] border-b border-[#DCD4C8] font-semibold">
                        <th className="py-3.5 px-4 sm:px-6">Název školení / akce</th>
                        <th className="py-3.5 px-4 sm:px-6 text-center whitespace-nowrap">Rok absolvování</th>
                        <th className="py-3.5 px-4 sm:px-6">Kdo certifikát vydal / Místo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECE6DD] text-[#3B3731]">
                      {courses.map((course, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF7F2] transition-colors">
                          <td className="py-3.5 px-4 sm:px-6 font-medium text-[#24211D]">
                            {course.title}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-center whitespace-nowrap font-semibold text-[#65744B]">
                            {course.year}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-[#56514A]">
                            {course.issuer}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
