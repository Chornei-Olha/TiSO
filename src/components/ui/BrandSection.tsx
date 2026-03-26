'use client';

import { useEffect, useRef, useState } from 'react';

export default function BrandSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Отслеживаем появление блока на экране
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% видео видно
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Управление автоплеем при скролле
  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible && isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVisible, isPlaying]);

  // Кнопка play/pause
  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-left sm:text-center text-[28px] font-medium text-[#cfcfcf] sm:text-[36px] lg:text-[44px]">
          Any color. Perfect match with your interior.
        </h2>

        <div className="relative mt-10 sm:mt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[5px] bg-black">
            <video ref={videoRef} muted loop playsInline className="h-full w-full object-cover">
              <source src="/video/brandsection.mp4" type="video/mp4" />
            </video>

            {/* Кнопка */}
            <button
              onClick={toggleVideo}
              className="absolute bottom-4 left-4 bg-white/80 px-4 py-2 text-sm rounded"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
