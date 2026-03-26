'use client';

import Image from 'next/image';
import { useState } from 'react';
import PopupForm from './PopupForm';

type HeaderProps = {
  logoSrc?: string;
  logoAlt?: string;
};

export default function Header({
  logoSrc = '/images/logo.png',
  logoAlt = 'TSO logo',
}: HeaderProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-[#363636]">
        <div className="mx-auto flex min-h-[60px] max-w-[1440px] items-center justify-between px-4 sm:min-h-[70px] md:min-h-[80px] lg:min-h-[90px]">
          <a href="/" aria-label="Go to homepage">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={160}
              height={70}
              priority
              className="
                h-auto
                w-[50px]
                object-contain
                sm:w-[65px]
                md:w-[80px]
                lg:w-[95px]
              "
            />
          </a>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="
              min-h-[40px]
              rounded-full bg-[#9000ff]
              px-5
              text-[14px] font-bold text-white
              shadow-[0_6px_20px_rgba(0,0,0,0.3)]
              transition-all duration-200
              hover:scale-[1.03] hover:bg-[#a020ff]
              active:scale-[0.98]
              sm:min-h-[44px] sm:px-6 sm:text-[16px]
              lg:px-8
            "
          >
            Contact us
          </button>
        </div>
      </header>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}
