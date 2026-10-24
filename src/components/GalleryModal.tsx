import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, MapPin, Tag } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'retreats' | 'studio' | 'events';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Ranní protažení na louce',
    category: 'retreats',
    categoryLabel: 'Jógové pobyty',
    location: 'Luhačovice / Bílé Karpaty',
    image: IMAGES.pobyty,
    description: 'Klidné ranní lekce v náručí přírody, kde čerstvý vzduch a zpěv ptáků doplňují každý nádech a výdech.',
  },
  {
    id: 'g-2',
    title: 'Jógové studio Strážnice',
    category: 'studio',
    categoryLabel: 'Studio a lekce',
    location: 'Strážnice, Skácelova 898',
    image: IMAGES.studio,
    description: 'Prosvětlený, voňavý prostor vytvořený pro vaše zklidnění, protažení a načerpání nové životní energie.',
  },
  {
    id: 'g-3',
    title: 'Plynulá vinyasa v sále',
    category: 'studio',
    categoryLabel: 'Studio a lekce',
    location: 'Strážnice',
    image: IMAGES.lesson,
    description: 'Společná praxe zaměřená na vědomý pohyb, správné nastavení těla a hluboký dech v harmonickém kruhu.',
  },
  {
    id: 'g-4',
    title: 'Víkendový wellness pobyt – Žítková',
    category: 'retreats',
    categoryLabel: 'Jógové pobyty',
    location: 'Penzion Žítková, Bílé Karpaty',
    image: IMAGES.zitkovaPoster,
    description: 'Kouzelná krajina Žítkové, bylinky, jóga, masáže a hluboký odpočinek uprostřed karpatkých strání.',
  },
  {
    id: 'g-5',
    title: 'Jógový víkend – Hotel Niva Luhačovice',
    category: 'retreats',
    categoryLabel: 'Jógové pobyty',
    location: 'Luhačovice – Pozlovice',
    image: IMAGES.poster,
    description: 'Kombinace jógových bloků, luxusního wellness, minerálních pramenů a společného sdílení.',
  },
  {
    id: 'g-6',
    title: 'Beseda: Indie – země chutí, vůní a jógy',
    category: 'events',
    categoryLabel: 'Akce a besedy',
    location: 'Strážnice',
    image: IMAGES.indiePoster,
    description: 'Cestovatelské povídání o kolébce jógy, úchvatných chrámech, indickém koření a životě plném kontrastů.',
  },
  {
    id: 'g-7',
    title: 'Jóga v přírodě a lesní klid',
    category: 'retreats',
    categoryLabel: 'Jógové pobyty',
    location: 'Bílé Karpaty',
    image: IMAGES.outdoor,
    description: 'Zastavení v rychlém tempu všedních dnů, bosá chůze trávou a propojení s elementy přírody.',
  },
  {
    id: 'g-8',
    title: 'Čajový rituál a chvíle pro sebe',
    category: 'studio',
    categoryLabel: 'Studio a lekce',
    location: 'Strážnice',
    image: IMAGES.journal,
    description: 'Hřejivý bylinkový čaj po lekci, prostor pro zápisky, zklidnění mysli a příjemný rozhovor.',
  },
  {
    id: 'g-9',
    title: 'Západ slunce u vody a meditace',
    category: 'retreats',
    categoryLabel: 'Jógové pobyty',
    location: 'Přehrada Luhačovice',
    image: IMAGES.hero,
    description: 'Chvíle ticha a ztišení při západu slunce, kdy se hladina zklidní stejně jako naše mysl.',
  },
];

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'retreats' | 'studio' | 'events'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const activePhoto = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

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
        <div className="min-h-screen px-4 sm:px-6 py-8 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-6xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-[#E3DDD1] flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#F5F1EA]/95 backdrop-blur-md px-6 sm:px-10 py-6 border-b border-[#E3DDD1] flex items-center justify-between">
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

            {/* Filter Tabs & Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { id: 'all', label: 'Všechny fotografie' },
                  { id: 'retreats', label: 'Jógové pobyty' },
                  { id: 'studio', label: 'Studio & lekce' },
                  { id: 'events', label: 'Akce a besedy' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-[#1E434C] text-white shadow-md'
                        : 'bg-white/80 text-[#555] hover:bg-white border border-[#E3DDD1]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    onClick={() => openLightbox(index)}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D6] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                  >
                    {/* Image thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#ECE8E2]">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-xs font-medium tracking-wide uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                          Zvětšit foto
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1E434C] text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Card Description */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-[#65744B] font-medium mb-1">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-[#1E434C] group-hover:text-[#65744B] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#666] line-clamp-2 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom warm note */}
              <div className="bg-[#EAE4D7] rounded-2xl p-6 sm:p-8 text-center border border-[#DDD5C5]">
                <h4 className="font-serif text-xl text-[#1E434C] mb-2 font-medium">
                  Přijďte zažít atmosféru na vlastní kůži
                </h4>
                <p className="text-sm text-[#555] max-w-xl mx-auto mb-4">
                  Každé setkání, pobyt i běžná lekce je jedinečným prostorem pro zklidnění, sdílení a radost z pohybu.
                </p>
                <a
                  href="https://www.reservio.cz/b/straznicke-jogovani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Rezervovat lekci online</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {activePhoto && (
            <div
              onClick={closeLightbox}
              className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-70 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:rotate-90 cursor-pointer"
                aria-label="Zavřít zobrazení"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-70 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Předchozí fotografie"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Next button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-70 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Další fotografie"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Lightbox content card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#1E2325] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <div className="max-h-[68vh] overflow-hidden flex items-center justify-center bg-black/40">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[68vh] w-auto max-w-full object-contain"
                  />
                </div>
                <div className="p-5 sm:p-6 w-full bg-[#1E2325] border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A3B18A] uppercase tracking-wider mb-1 font-semibold">
                    <span>{activePhoto.categoryLabel} &bull; {activePhoto.location}</span>
                    <span>
                      {(activeLightboxIndex ?? 0) + 1} / {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-normal mb-2">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {activePhoto.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
