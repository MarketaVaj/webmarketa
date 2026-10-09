import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, CheckCircle, Sparkles, Send, Users, Coffee, Heart } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface RetreatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

interface RetreatItem {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  priceLabel: string;
  badge: string;
  image: string;
  description: string;
  highlights: string[];
  externalLink?: string;
  ctaText?: string;
}

const RETREATS: RetreatItem[] = [
  {
    id: 'r-nivamare',
    title: 'Wellness pobyt s jógou',
    date: '20. 11. – 22. 11. 2026',
    location: 'Wellness hotel Nivamare Luhačovice',
    price: 4700,
    priceLabel: 'Celková cena pobytu:',
    badge: 'Poslední 2 místa',
    image: IMAGES.poster,
    description: 'Předvánoční zklidnění naplněné jógou, se dvěma lektorkami, wellness odpočinkem a to vše v krásném prostředí Luhačovické přehrady.',
    highlights: [
      'Ubytování na 2 noci s polopenzí',
      '7 klasických lekcí jógy',
      '1 lekce jógy ve tmě',
      'Neomezený vstup do wellness a saunového světa',
      'Zapůjčení županu',
      'Místní poplatek v ceně'
    ]
  }
];

export const RetreatsModal: React.FC<RetreatsModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [selectedRetreat, setSelectedRetreat] = useState<string | null>(RETREATS[0].id);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isPosterLightboxOpen, setIsPosterLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setShowForm(false);
    setSubmitted(false);
    onClose();
  };

  const activeRetreat = RETREATS.find(r => r.id === selectedRetreat) || RETREATS[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="retreats-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="retreats-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            key="retreats-container"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-4xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    Jógové pobyty a akce
                  </h3>
                  <p className="text-xs text-[#ECE8E2] font-sans">
                    Dopřejte si několik dní hluboké relaxace, jógy a přírody
                  </p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
              {!showForm ? (
                <>
                  {/* Retreat cards list */}
                  <div className="space-y-6">
                    {RETREATS.map((retreat) => (
                      <div
                        key={retreat.id}
                        onClick={() => setSelectedRetreat(retreat.id)}
                        className={`group relative rounded-2xl overflow-hidden border transition-all cursor-pointer ${
                          selectedRetreat === retreat.id
                            ? 'bg-white border-[#65744B] ring-2 ring-[#65744B]/20 shadow-lg'
                            : 'bg-white/70 border-[#DCD4C8] hover:bg-white'
                        }`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                          {/* Image column displaying poster flyer */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRetreat(retreat.id);
                              setIsPosterLightboxOpen(true);
                            }}
                            className="md:col-span-5 relative min-h-[300px] md:min-h-[380px] bg-[#1E434C] overflow-hidden flex items-center justify-center cursor-pointer group/poster p-1.5"
                          >
                            <img
                              src={retreat.image}
                              alt={retreat.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain transition-transform duration-700 group-hover/poster:scale-[1.03]"
                            />
                            <div className="absolute top-3 left-3 bg-[#65744B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
                              {retreat.badge}
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedRetreat(retreat.id);
                                setIsPosterLightboxOpen(true);
                              }}
                              className="absolute bottom-3 right-3 bg-black/75 hover:bg-black/90 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-md z-10 cursor-pointer"
                            >
                              <span>Zobrazit plakát</span>
                              <Sparkles className="w-3.5 h-3.5 text-[#A3B18A]" />
                            </button>
                          </div>

                          {/* Detail column */}
                          <div className="md:col-span-7 p-6 space-y-4 flex flex-col justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3 text-xs text-[#65744B] font-semibold">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {retreat.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5" />
                                  {retreat.location}
                                </span>
                              </div>

                              <h4 className="font-serif text-2xl font-normal text-[#24211D]">
                                {retreat.title}
                              </h4>

                              <p className="text-sm text-[#56514A] leading-relaxed">
                                {retreat.description}
                              </p>
                            </div>

                            {/* Program Highlights */}
                            <div className="space-y-1.5 pt-2 border-t border-[#E2DAD0]">
                              <p className="text-xs font-semibold text-[#56514A] uppercase tracking-wider">Cena zahrnuje:</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#56514A]">
                                {retreat.highlights.map((h, i) => (
                                  <div key={i} className="flex items-center gap-1.5">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#65744B] shrink-0" />
                                    <span>{h}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Price and CTA */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2DAD0]">
                              <div>
                                <span className="text-xs text-[#56514A]">{retreat.priceLabel || 'Cena:'}</span>
                                <div className="font-serif text-2xl font-bold text-[#24211D]">
                                  {retreat.price.toLocaleString('cs-CZ')} Kč
                                </div>
                              </div>

                              {retreat.externalLink ? (
                                <a
                                  href={retreat.externalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                  className="px-6 py-2.5 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-sm transition-all shadow cursor-pointer inline-flex items-center justify-center gap-1.5"
                                >
                                  {retreat.ctaText || 'Mám zájem'}
                                </a>
                              ) : (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedRetreat(retreat.id);
                                    setShowForm(true);
                                  }}
                                  className="px-6 py-2.5 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-sm transition-all shadow cursor-pointer"
                                >
                                  Mám zájem o pobyt
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : !submitted ? (
                /* Application form for selected retreat */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="bg-white p-5 rounded-2xl border border-[#DCD4C8] space-y-2">
                    <span className="text-xs uppercase font-semibold text-[#65744B] tracking-wider">Vybraný pobyt:</span>
                    <h4 className="font-serif text-2xl text-[#24211D]">{activeRetreat.title}</h4>
                    <div className="flex items-center gap-4 text-xs text-[#56514A]">
                      <span>{activeRetreat.date}</span>
                      <span>•</span>
                      <span>{activeRetreat.location}</span>
                      <span>•</span>
                      <span className="font-bold text-[#65744B]">{activeRetreat.price.toLocaleString('cs-CZ')} Kč</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-serif text-xl text-[#24211D]">Nezávazná přihláška / Rezervace pobytu</h5>
                      <span className="text-xs text-[#65744B] font-medium bg-[#65744B]/10 px-3 py-1 rounded-full">
                        Rezervace také na: straznickejogovani@gmail.com
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#56514A] uppercase">Jméno a příjmení *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jan Nováková"
                          className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#56514A] uppercase">E-mail *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+420 777 123 456"
                          className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-[#56514A] uppercase">Poznámka / Stravování / Spolucestující</label>
                        <input
                          type="text"
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          placeholder="Např. bezlepková strava, jedu s kamarádkou..."
                          className="w-full px-4 py-3 rounded-xl border border-[#DCD4C8] bg-white focus:outline-none focus:ring-2 focus:ring-[#65744B] text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DCD4C8] flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 rounded-full border border-[#DCD4C8] hover:bg-white text-sm font-semibold text-[#56514A]"
                    >
                      Zpět k pobytům
                    </button>

                    <button
                      type="submit"
                      className="h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold transition-all shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Odeslat přihlášku</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success state */
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#65744B]/15 text-[#65744B] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-3xl sm:text-4xl text-[#24211D]">
                      Vaše přihláška byla úspěšně odeslána!
                    </h4>
                    <p className="text-sm sm:text-base text-[#56514A] max-w-md mx-auto">
                      Děkujeme за zájem o <span className="font-semibold text-[#24211D]">{activeRetreat.title}</span>. Ozveme se vám do 24 hodin na e-mail <span className="font-semibold text-[#24211D]">{formData.email}</span> s podrobnými informacemi k platbě zálohy a ubytování.
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={handleReset}
                      className="h-12 px-8 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold shadow-md transition-all cursor-pointer"
                    >
                      Zavřít
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* High-Resolution Poster Lightbox Pop-Up Modal */}
      {isPosterLightboxOpen && (
        <div key="poster-lightbox-wrapper" className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="poster-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPosterLightboxOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Lightbox Modal Box */}
          <motion.div
            key="poster-lightbox-container"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="relative z-10 max-w-2xl sm:max-w-3xl w-full max-h-[94vh] bg-[#1E434C] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-between border border-white/20"
          >
            {/* Top Bar */}
            <div className="w-full bg-[#17353C] text-white px-5 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A3B18A]" />
                <span className="font-serif text-lg text-white">Plakát – {activeRetreat.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setIsPosterLightboxOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Zavřít"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image Container */}
            <div className="p-3 sm:p-5 overflow-auto max-h-[80vh] flex items-center justify-center w-full">
              <img
                src={activeRetreat.image}
                alt={`Plakát - ${activeRetreat.title}`}
                referrerPolicy="no-referrer"
                className="max-h-[76vh] w-auto object-contain rounded-xl shadow-lg border border-white/10"
              />
            </div>

            {/* Footer */}
            <div className="w-full bg-[#17353C] px-5 py-3 flex items-center justify-between border-t border-white/10 text-xs text-[#A3B18A] shrink-0">
              <span>{activeRetreat.location} • {activeRetreat.date}</span>
              <button
                type="button"
                onClick={() => setIsPosterLightboxOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#65744B] hover:bg-[#586640] text-white text-xs font-medium cursor-pointer transition-colors"
              >
                Zavřít náhled
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
