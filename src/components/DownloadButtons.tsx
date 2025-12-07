import React from 'react';
import { Apple } from 'lucide-react';

interface DownloadButtonsProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function DownloadButtons({ variant = 'dark', className = '' }: DownloadButtonsProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {/* App Store Button */}
      <a
        href="#"
        className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-black text-white hover:bg-gray-900' 
            : 'bg-white text-black border-2 border-gray-200 hover:border-gray-300'
        }`}
        style={{ minWidth: '160px', height: '48px' }}
      >
        <Apple className="w-8 h-8" strokeWidth={2} fill="currentColor" />
        <div className="text-left">
          <div className="text-[10px] leading-none opacity-80">Baixar na</div>
          <div className="text-base leading-tight -mt-0.5">App Store</div>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
          isDark 
            ? 'bg-black text-white hover:bg-gray-900' 
            : 'bg-white text-black border-2 border-gray-200 hover:border-gray-300'
        }`}
        style={{ minWidth: '180px', height: '48px' }}
      >
        <svg 
          className="w-7 h-7" 
          viewBox="0 0 24 24" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3.609 1.814L13.792 12l-10.183 10.186a2.153 2.153 0 01-.109-0.677V2.491c0-0.238 0.04-0.469 0.109-0.677z" 
            fill="#32BBFF"
          />
          <path 
            d="M14.5 12.707l3.386 3.386-11.18 6.285a2.149 2.149 0 01-0.915 0.208c-0.286 0-0.562-0.057-0.815-0.161l10.524-9.718z" 
            fill="#32BBFF"
          />
          <path 
            d="M3.609 1.814a2.147 2.147 0 011.482-0.395l11.795 6.634L14.5 11.293 3.609 1.814z" 
            fill="#32BBFF"
          />
          <path 
            d="M17.886 15.386l3.428-1.927a2.145 2.145 0 010-3.836l-3.428-1.927-3.386 3.386 3.386 3.386v0.918z" 
            fill="#32BBFF"
          />
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-none opacity-80 uppercase">Disponível no</div>
          <div className="text-base leading-tight -mt-0.5">Google Play</div>
        </div>
      </a>
    </div>
  );
}
