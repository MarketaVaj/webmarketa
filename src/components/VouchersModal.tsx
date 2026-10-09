import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, CheckCircle, Sparkles, Send, Mail, CreditCard, ArrowLeft } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface VouchersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VouchersModal: React.FC<VouchersModalProps> = ({ isOpen, onClose }) => {
  // 1. Design selection
  const [selectedDesign, setSelectedDesign] = useState<'bezovy' | 'kvetinovy' | 'elegantni'>('bezovy');

  // 2. Value selection
  const [selectedOption, setSelectedOption] = useState<string>('1000 Kč');
  const [customValue, setCustomValue] = useState<string>('');

  // 3. Personal dedication
  const [personalNote, setPersonalNote] = useState<string>('');

  // 4. Delivery method
  const [deliveryMethod, setDeliveryMethod] = useState<'elektronicky' | 'tisteny'>('elektronicky');
  const [email, setEmail] = useState<string>('');

  // 5. Payment method
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'hotove'>('qr');

  // Modal flow states
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [orderedSuccess, setOrderedSuccess] = useState<boolean>(false);

  const designLabels: Record<'bezovy' | 'kvetinovy' | 'elegantni', string> = {
    bezovy: 'Béžový',
    kvetinovy: 'Květinový, žlutý',
    elegantni: 'Elegantní',
  };

  const activeValueDisplay = selectedOption === 'custom'
    ? (customValue.trim() ? customValue : 'Vlastní hodnota')
    : selectedOption;

  const handleOpenSummary = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleFinalOrder = () => {
    // Generate mailto link to straznickejogovani@gmail.com
    const subject = encodeURIComponent(`Objednávka dárkového poukazu - ${designLabels[selectedDesign]} (${activeValueDisplay})`);
    const body = encodeURIComponent(
      `Dobrý den,\n\nObjednávám dárkový poukaz s následujícími parametry:\n\n` +
      `• Design poukazu: ${designLabels[selectedDesign]}\n` +
      `• Hodnota / Počet lekcí: ${activeValueDisplay}\n` +
      `• Osobní věnování: ${personalNote.trim() || 'Bez věnování'}\n` +
      `• Způsob doručení: ${deliveryMethod === 'elektronicky' ? 'Elektronicky' : 'Tištěný s osobním předáním'}\n` +
      `• E-mailová adresa: ${email.trim() || 'Nezadána'}\n` +
      `• Způsob platby: ${paymentMethod === 'qr' ? 'QR kód' : 'Hotově'}\n\n` +
      `Děkuji.`
    );

    // Open mailto trigger
    window.open(`mailto:straznickejogovani@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setShowSummary(false);
    setOrderedSuccess(true);
  };

  const handleReset = () => {
    setShowSummary(false);
    setOrderedSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="vouchers-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <motion.div
            key="vouchers-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            key="vouchers-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative z-10 w-full max-w-5xl bg-[#F5F1EA] rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] my-6 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#24211D] text-white px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#65744B] flex items-center justify-center text-white shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal">
                    Dárkové poukazy
                  </h3>
                  <p className="text-xs text-[#ECE8E2] font-sans">
                    Nakonfigurujte poukaz pro své blízké
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-8 space-y-6 overflow-y-auto">
              {!orderedSuccess ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Form Configuration */}
                  <form onSubmit={handleOpenSummary} className="md:col-span-7 space-y-6">
                    {/* 1. Design Selection */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                        1. Zvolte design poukazu
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'bezovy', label: 'Béžový' },
                          { id: 'kvetinovy', label: 'Květinový, žlutý' },
                          { id: 'elegantni', label: 'Elegantní' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedDesign(item.id as 'bezovy' | 'kvetinovy' | 'elegantni')}
                            className={`py-2.5 px-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
                              selectedDesign === item.id
                                ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                                : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Value / Lessons Selection */}
                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                        2. Zvolte hodnotu poukazu
                      </label>

                      {/* Currency options */}
                      <div className="grid grid-cols-3 gap-2">
                        {['500 Kč', '1000 Kč', '1300 Kč'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSelectedOption(opt);
                              setCustomValue('');
                            }}
                            className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                              selectedOption === opt
                                ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                                : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {/* Lesson options */}
                      <div className="grid grid-cols-3 gap-2">
                        {['5 lekcí', '10 lekcí', '15 lekcí'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSelectedOption(opt);
                              setCustomValue('');
                            }}
                            className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                              selectedOption === opt
                                ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                                : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      {/* Custom value / lessons option */}
                      <div className="pt-1">
                        <input
                          type="text"
                          required={selectedOption === 'custom'}
                          placeholder="Nebo zadejte vlastní částku nebo počet lekcí..."
                          value={customValue}
                          onFocus={() => setSelectedOption('custom')}
                          onChange={(e) => {
                            setCustomValue(e.target.value);
                            setSelectedOption('custom');
                          }}
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#65744B] ${
                            selectedOption === 'custom'
                              ? 'bg-white border-[#65744B] text-[#24211D] shadow-sm ring-1 ring-[#65744B]'
                              : 'bg-white/70 border-[#DCD4C8] text-[#56514A] hover:bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* 3. Personal Dedication */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                        3. Osobní věnování
                      </label>
                      <textarea
                        rows={3}
                        value={personalNote}
                        onChange={(e) => setPersonalNote(e.target.value)}
                        placeholder="Pokud chcete na poukazu osobní věnování napište ho zde"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#DCD4C8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#65744B] placeholder:text-[#8C8479]"
                      />
                    </div>

                    {/* 4. Delivery Method */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                        4. Způsob doručení
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('elektronicky')}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            deliveryMethod === 'elektronicky'
                              ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                              : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                          }`}
                        >
                          Elektronicky
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeliveryMethod('tisteny')}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            deliveryMethod === 'tisteny'
                              ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                              : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                          }`}
                        >
                          Tištěný s osobním předáním
                        </button>
                      </div>

                      {/* Email input field for both delivery methods */}
                      <div className="pt-1.5 space-y-1">
                        <label className="text-xs text-[#56514A] font-medium flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#65744B]" />
                          {deliveryMethod === 'elektronicky'
                            ? 'E-mailová adresa pro doručení:'
                            : 'E-mailová adresa pro komunikaci:'}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vas.email@domena.cz"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#DCD4C8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#65744B]"
                        />
                      </div>
                    </div>

                    {/* 5. Payment Method */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                        5. Způsob platby
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('qr')}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            paymentMethod === 'qr'
                              ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                              : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                          }`}
                        >
                          QR kód nebo převodem
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('hotove')}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                            paymentMethod === 'hotove'
                              ? 'bg-[#65744B] text-white border-[#65744B] shadow-sm'
                              : 'bg-white border-[#DCD4C8] text-[#24211D] hover:bg-[#EFEAE2]'
                          }`}
                        >
                          Hotově
                        </button>
                      </div>
                    </div>

                    {/* Submit Order Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full h-12 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Objednat poukaz</span>
                      </button>
                    </div>
                  </form>

                  {/* Right Column: Voucher Designs Stacked */}
                  <div className="md:col-span-5 space-y-3">
                    <span className="text-xs font-semibold text-[#56514A] uppercase tracking-wider block">
                      Náhled dárkového poukazu
                    </span>

                    <div className="space-y-5 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
                      {/* Design 1: Béžový */}
                      <div
                        onClick={() => setSelectedDesign('bezovy')}
                        className={`space-y-1.5 cursor-pointer transition-all ${
                          selectedDesign === 'bezovy' ? 'opacity-100 scale-[1.01]' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#65744B] uppercase tracking-wide">
                            Béžový
                          </span>
                          {selectedDesign === 'bezovy' && (
                            <span className="text-[11px] bg-[#65744B] text-white px-2 py-0.5 rounded-full font-medium">
                              Vybráno
                            </span>
                          )}
                        </div>
                        <div className={`rounded-2xl overflow-hidden border bg-white transition-all ${
                          selectedDesign === 'bezovy'
                            ? 'border-[#65744B] ring-2 ring-[#65744B]/30 shadow-md'
                            : 'border-[#DCD4C8] shadow-sm'
                        }`}>
                          <img
                            src={IMAGES.voucherDesign1}
                            alt="Náhled dárkového poukazu - Béžový"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Design 2: Květinový, žlutý */}
                      <div
                        onClick={() => setSelectedDesign('kvetinovy')}
                        className={`space-y-1.5 cursor-pointer transition-all ${
                          selectedDesign === 'kvetinovy' ? 'opacity-100 scale-[1.01]' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#65744B] uppercase tracking-wide">
                            Květinový, žlutý
                          </span>
                          {selectedDesign === 'kvetinovy' && (
                            <span className="text-[11px] bg-[#65744B] text-white px-2 py-0.5 rounded-full font-medium">
                              Vybráno
                            </span>
                          )}
                        </div>
                        <div className={`rounded-2xl overflow-hidden border bg-white transition-all ${
                          selectedDesign === 'kvetinovy'
                            ? 'border-[#65744B] ring-2 ring-[#65744B]/30 shadow-md'
                            : 'border-[#DCD4C8] shadow-sm'
                        }`}>
                          <img
                            src={IMAGES.voucherDesign2}
                            alt="Náhled dárkového poukazu - Květinový, žlutý"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Design 3: Elegantní */}
                      <div
                        onClick={() => setSelectedDesign('elegantni')}
                        className={`space-y-1.5 cursor-pointer transition-all ${
                          selectedDesign === 'elegantni' ? 'opacity-100 scale-[1.01]' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#65744B] uppercase tracking-wide">
                            Elegantní
                          </span>
                          {selectedDesign === 'elegantni' && (
                            <span className="text-[11px] bg-[#65744B] text-white px-2 py-0.5 rounded-full font-medium">
                              Vybráno
                            </span>
                          )}
                        </div>
                        <div className={`rounded-2xl overflow-hidden border bg-white transition-all ${
                          selectedDesign === 'elegantni'
                            ? 'border-[#65744B] ring-2 ring-[#65744B]/30 shadow-md'
                            : 'border-[#DCD4C8] shadow-sm'
                        }`}>
                          <img
                            src={IMAGES.voucherDesign3}
                            alt="Náhled dárkového poukazu - Elegantní"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Confirmation Screen */
                <div className="py-10 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-[#65744B]/15 text-[#65744B] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>

                  <div className="space-y-3 max-w-lg mx-auto">
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#24211D]">
                      Děkuji za Vaši objednávku!
                    </h4>
                    <p className="text-base sm:text-lg text-[#3B3731] font-sans leading-relaxed bg-white p-6 rounded-2xl border border-[#DCD4C8] shadow-sm whitespace-pre-line">
                      {"Vaše objednávka byla odeslána, budu Vás kontaktovat jakmile bude váš poukaz připraven.\nKrásný den, Markéta"}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-8 py-3 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
                    >
                      Zavřít
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Order Summary Popup Overlay */}
          <AnimatePresence>
            {showSummary && (
              <div key="summary-overlay-wrapper" className="fixed inset-0 z-60 flex items-center justify-center p-4">
                <motion.div
                  key="summary-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowSummary(false)}
                  className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
                />

                <motion.div
                  key="summary-modal"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#DCD4C8] text-[#24211D] p-6 sm:p-8 space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-[#ECE6DD] pb-4">
                    <h4 className="font-serif text-2xl font-normal text-[#24211D]">
                      Shrnutí objednávky
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowSummary(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-[#24211D]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4 text-sm divide-y divide-[#ECE6DD]">
                    <div className="flex justify-between items-start pt-1">
                      <span className="text-[#656057] font-medium">Design poukazu:</span>
                      <span className="font-semibold text-[#24211D]">{designLabels[selectedDesign]}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="text-[#656057] font-medium">Hodnota / Počet lekcí:</span>
                      <span className="font-semibold text-[#24211D]">{activeValueDisplay}</span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="text-[#656057] font-medium">Osobní věnování:</span>
                      <span className="font-normal text-[#24211D] max-w-[220px] text-right italic">
                        {personalNote.trim() ? `"${personalNote}"` : 'Bez věnování'}
                      </span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="text-[#656057] font-medium">Způsob doručení:</span>
                      <span className="font-semibold text-[#24211D] text-right">
                        {deliveryMethod === 'elektronicky'
                          ? `Elektronicky (${email || 'E-mail nezadán'})`
                          : `Tištěný s osobním předáním (${email || 'E-mail nezadán'})`}
                      </span>
                    </div>

                    <div className="flex justify-between items-start pt-3">
                      <span className="text-[#656057] font-medium">Způsob platby:</span>
                      <span className="font-semibold text-[#24211D]">
                        {paymentMethod === 'qr' ? 'QR kód nebo převodem' : 'Hotově'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setShowSummary(false)}
                      className="flex-1 py-3 px-4 rounded-full border border-[#DCD4C8] hover:bg-gray-50 text-[#56514A] font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Upravit</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFinalOrder}
                      className="flex-1 py-3 px-4 rounded-full bg-[#65744B] hover:bg-[#586640] text-white font-semibold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dokončit objednávku</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
};
