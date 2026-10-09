import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, User, CheckCircle2, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { YogaClass } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_CLASSES: YogaClass[] = [
  {
    id: 'c1',
    title: 'Jemná Hatha jóga',
    day: 'Pondělí',
    time: '17:30 – 18:30',
    duration: '60 min',
    instructor: 'Markéta',
    price: 130,
    capacity: 12,
    availableSpots: 4,
    description: 'Pomalé, vědomé protažení spojené s hlubokým dechem pro zklidnění po náročném dni.',
    level: 'Pro všechny pokročilosti',
  },
  {
    id: 'c2',
    title: 'Power jóga',
    day: 'Úterý',
    time: '18:00 – 19:00',
    duration: '60 min',
    instructor: 'Markéta',
    price: 130,
    capacity: 10,
    availableSpots: 2,
    description: 'Plynulý pohyb propojený s dechem. Buduje sílu, flexibilitu a pomáhá pročišťovat tělo i mysl.',
    level: 'Mírně pokročilí',
  },
  {
    id: 'c3',
    title: 'Jóga pro zdravá záda',
    day: 'Středa',
    time: '17:00 – 18:00',
    duration: '60 min',
    instructor: 'Markéta',
    price: 130,
    capacity: 12,
    availableSpots: 5,
    description: 'Specializovaná lekce zaměřená na uvolnění krční a bederní páteře a posílení hlubokého stabilizačního systému.',
    level: 'Pro všechny pokročilosti',
  },
  {
    id: 'c4',
    title: 'Restorativní jóga',
    day: 'Čtvrtek',
    time: '18:30 – 19:30',
    duration: '60 min',
    instructor: 'Markéta',
    price: 150,
    capacity: 10,
    availableSpots: 3,
    description: 'Lekce, která vede k hlubokému uvolnění a obnovení těla a energie s využitím pomůcek (3-10 min výdrže).',
    level: 'Pro všechny pokročilosti',
  },
  {
    id: 'c5',
    title: 'Jógový kruháč',
    day: 'Pátek',
    time: '17:00 – 18:00',
    duration: '60 min',
    instructor: 'Markéta',
    price: 130,
    capacity: 10,
    availableSpots: 4,
    description: 'Dynamická lekce s principy kruhového tréningu. 1 minuta dynamické ásany, 15 sekund odpočinek.',
    level: 'Energetizující',
  },
  {
    id: 'c6',
    title: 'Jóga ve tmě',
    day: 'Pátek',
    time: '18:30 – 19:30',
    duration: '60 min',
    instructor: 'Markéta',
    price: 130,
    capacity: 10,
    availableSpots: 5,
    description: 'Jemná jógová praxe se zatemněným prostředím pro hlubší vnímání vlastního těla a zklidnění mysli.',
    level: 'Zklidňující',
  },
];

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(SAMPLE_CLASSES[0]);
  const [step, setStep] = useState<'select' | 'form' | 'success'>('select');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setStep('success');
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep('select');
      setSelectedClass(SAMPLE_CLASSES[0]);
      setName('');
      setEmail('');
      setPhone('');
      setNote('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="reservation-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="reservation-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            key="reservation-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-3xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-8"
          >
            {/* Header bar */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    Online Rezervace Reservio
                  </h3>
                  <a
                    href="https://www.reservio.cz/b/straznicke-jogovani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3B18A] hover:underline font-sans flex items-center gap-1 mt-0.5"
                  >
                    <span>Otevřít přímo na reservio.cz</span>
                    <Sparkles className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Select class */}
            {step === 'select' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#24211D]">
                    Vyberte si lekci z nadcházejícího rozvrhu
                  </h4>
                  <p className="text-sm text-[#56514A]">
                    Kapacita sálu je omezená pro zajištění osobního přístupu.
                  </p>
                </div>

                <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                  {SAMPLE_CLASSES.map((cls) => {
                    const isSelected = selectedClass?.id === cls.id;
                    return (
                      <div
                        key={cls.id}
                        onClick={() => setSelectedClass(cls)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-white border-[#65744B] ring-2 ring-[#65744B]/20 shadow-md'
                            : 'bg-white/60 border-[#DCD4C8] hover:bg-white'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-lg font-semibold text-[#24211D]">
                              {cls.title}
                            </span>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E2DAD0] text-[#56514A] font-medium">
                              {cls.day}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#56514A]">
                            {cls.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-[#65744B] font-medium pt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {cls.time} ({cls.duration})
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="w-3.5 h-3.5" />
                              {cls.instructor}
                            </span>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E2DAD0]">
                          <span className="font-serif text-xl font-bold text-[#24211D]">
                            {cls.price} Kč
                          </span>
                          <span className="text-xs text-[#56514A] bg-[#65744B]/10 text-[#65744B] font-semibold px-2.5 py-1 rounded-full mt-1">
                            Volná místa: {cls.availableSpots}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-[#DCD4C8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#56514A]">
                    <MapPin className="w-4 h-4 text-[#65744B]" />
                    <span>Náměstí 15, Strážnice • Vybavení k zapůjčení zdarma</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <a
                      href="https://www.reservio.cz/b/straznicke-jogovani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto h-12 px-6 rounded-full border border-[#65744B] text-[#65744B] hover:bg-[#65744B] hover:text-white font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span>Reservio stránka</span>
                    </a>

                    <button
                      disabled={!selectedClass}
                      onClick={() => setStep('form')}
                      className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] disabled:bg-gray-400 text-white font-semibold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Pokračovat k rezervaci</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact form */}
            {step === 'form' && selectedClass && (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                <div className="bg-white/80 p-4 rounded-2xl border border-[#DCD4C8] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-semibold text-[#65744B] tracking-wider">Vybraná lekce:</span>
                    <h5 className="font-serif text-xl text-[#24211D]">{selectedClass.title}</h5>
                    <p className="text-xs text-[#56514A]">{selectedClass.day}, {selectedClass.time} ({selectedClass.duration})</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="text-xs text-[#65744B] hover:underline font-semibold"
                  >
                    Změnit
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-xl text-[#24211D]">Kontaktní údaje účastníka</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#56514A] uppercase">Jméno a příjmení *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jan Nováková"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#56514A] uppercase">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vase.jmeno@email.cz"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#56514A] uppercase">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+420 777 123 456"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#56514A] uppercase">Poznámka pro lektorku</label>
                      <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Např. zdravotní omezení, těhotenství..."
                        className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 pt-2 cursor-pointer text-xs text-[#56514A]">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 rounded text-[#65744B] focus:ring-[#65744B]"
                    />
                    <span>Souhlasím se zpracováním osobních údajů pro účely rezervace a storno podmínkami. Platba probíhá v hotovosti nebo QR kódem na místě.</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-[#DCD4C8] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep('select')}
                    className="px-6 py-3 rounded-full border border-[#DCD4C8] hover:bg-white text-sm font-semibold text-[#56514A]"
                  >
                    Zpět
                  </button>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className="h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] disabled:bg-gray-400 text-white font-semibold transition-all shadow-md cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Potvrdit rezervaci</span>
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {step === 'success' && selectedClass && (
              <div className="p-8 sm:p-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-[#65744B]/15 text-[#65744B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-3xl sm:text-4xl text-[#24211D]">
                    Rezervace byla úspěšně přijata!
                  </h4>
                  <p className="text-sm sm:text-base text-[#56514A] max-w-md mx-auto">
                    Děkujeme, <span className="font-semibold text-[#24211D]">{name}</span>. Potvrzení o rezervaci lekce <span className="font-semibold text-[#24211D]">{selectedClass.title}</span> jsme zaslali na <span className="font-semibold text-[#24211D]">{email}</span>.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] max-w-md mx-auto text-left space-y-2 text-sm text-[#56514A]">
                  <div className="flex justify-between border-b pb-2 border-[#E2DAD0]">
                    <span>Termín:</span>
                    <span className="font-semibold text-[#24211D]">{selectedClass.day}, {selectedClass.time}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#E2DAD0]">
                    <span>Místo:</span>
                    <span className="font-semibold text-[#24211D]">Studio Strážnice (Náměstí 15)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cena na místě:</span>
                    <span className="font-semibold text-[#65744B] text-base">{selectedClass.price} Kč</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={resetAndClose}
                    className="h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold shadow-md transition-all cursor-pointer"
                  >
                    Rozumím, těším se na lekci!
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
