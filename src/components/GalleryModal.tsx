import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, Calendar, Maximize2 } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRetreats?: () => void;
}

interface GalleryPhoto {
  id: string;
  image: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'g-1', image: '/assets/aistudio/uvodni_bee4b995.jpeg' },
  { id: 'g-2', image: '/assets/aistudio/fotogalerie_9503de37.jpeg' },
  { id: 'g-3', image: '/assets/aistudio/IMG_4096_d48cf24a.jpeg' },
  { id: 'g-4', image: '/assets/aistudio/IMG_4098_7968d219.jpeg' },
  { id: 'g-5', image: '/assets/aistudio/IMG_4102_e629b527.jpeg' },
  { id: 'g-6', image: '/assets/aistudio/IMG_4097_d09f9c22.jpeg' },
  { id: 'g-7', image: '/assets/aistudio/IMG_4100_cfa08a84.jpeg' },
];

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  onOpenRetreats,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (event.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  if (!isOpen) return null;

  const activePhoto = activeLightboxIndex !== null ? GALLERY_PHOTOS[activeLightboxIndex] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <div className="min-h-screen px-3 sm:px-6 py-6 sm:py-8 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-6xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-[#E3DDD1] flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#F5F1EA]/95 backdrop-blur-md px-6 sm:px-10 py-5 sm:py-6 border-b border-[#E3DDD1] flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#65744B] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strážnické jógování</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E434C] font-normal">
                  Fotogalerie
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-white/70 hover:bg-white text-[#24211D] flex items-center justify-center transition-all duration-300 hover:rotate-90 cursor-pointer shadow-sm border border-[#E3DDD1]"
                aria-label="Zavřít galerii"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Gallery Grid Content */}
            <div className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-8">
              {/* Photos Grid - No text captions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {GALLERY_PHOTOS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    onClick={() => openLightbox(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#DCD4C8] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#ECE8E2]"
                  >
                    <img
                      src={item.image}
                      alt="Strážnické jógování"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm text-[#1E434C] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions Banner */}
              <div className="bg-[#EAE4D7] rounded-3xl p-6 sm:p-8 text-center border border-[#DDD5C5] space-y-4">
                <h4 className="font-serif text-2xl text-[#1E434C] font-normal">
                  Přijďte zažít atmosféru na vlastní kůži
                </h4>
                <p className="text-sm text-[#555] max-w-xl mx-auto">
                  Každé setkání, pobyt i běžná lekce je jedinečným prostorem pro zklidnění, sdílení a radost z pohybu.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.reservio.cz/b/straznicke-jogovani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Rezervovat lekci</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenRetreats?.();
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1E434C] hover:bg-[#16333a] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Přehled pobytů a akcí</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fullscreen Lightbox - Clean without captions */}
        <AnimatePresence>
          {activePhoto && (
            <div
              onClick={closeLightbox}
              className="fixed inset-0 z-60 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              {/* Top controls */}
              <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-70 pointer-events-none">
                <span className="text-xs sm:text-sm font-medium tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-sm pointer-events-auto">
                  {(activeLightboxIndex ?? 0) + 1} / {GALLERY_PHOTOS.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:rotate-90 cursor-pointer pointer-events-auto"
                  aria-label="Zavřít zobrazení"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Previous button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-70 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Předchozí fotografie"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-70 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Další fotografie"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Photo Display */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activePhoto.image}
                  alt="Strážnické jógování"
                  referrerPolicy="no-referrer"
                  className="max-h-[85vh] w-auto max-w-full object-contain select-none rounded-xl"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
