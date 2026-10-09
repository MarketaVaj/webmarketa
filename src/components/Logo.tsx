import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }[size];

  return (
    <div className={`flex items-center gap-3.5 cursor-pointer group select-none ${className}`}>
      {/* Circle Icon matching exact brand graphic design */}
      <div className={`relative ${sizeClasses} rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Green Sage Circle Background */}
          <circle cx="50" cy="50" r="50" fill="#65744B" />

          {/* Dark Charcoal Yoga Figure */}
          {/* Head Dot */}
          <circle cx="42.5" cy="18.5" r="6.8" fill="#24211D" />

          {/* Body & Arm Swoop */}
          <path
            d="M 31 42.5 C 43 32.5 56 22 61.5 21 L 77.5 14.5 L 61.5 25.5 C 69.5 38 81.5 53 81.5 65 C 81.5 77.5 69.5 87 53 87 C 69.5 83 76.5 70 71 58 C 64.5 43.5 51 30.5 31 42.5 Z"
            fill="#24211D"
          />

          {/* White Spiral Wave Motif */}
          <path
            d="M 17 48.5 C 13 38 27.5 37 28 47.5 C 28.5 58 17 65.5 26.5 78 C 34.5 88.5 52.5 85 58 75 C 64 63.5 55.5 48.5 42 48.5 C 32 48.5 26.5 58 32.5 67 C 37 74 47 73 49 67.5 C 51 61.5 44 58.5 40 61.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className={`font-serif text-xl xs:text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-wide whitespace-nowrap ${light ? 'text-white' : 'text-[#24211D]'}`}>
        Strážnické jógování
      </span>
    </div>
  );
};

