'use client';

import { useRef, useState } from 'react';

export default function VideoFeatureSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControl, setShowControl] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="relative w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* VIDEO */}
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
            <div
              className="group relative overflow-hidden rounded-[6px]"
              onMouseEnter={() => setShowControl(true)}
              onMouseLeave={() => setShowControl(false)}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-[520px] w-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/gate-10.mp4" type="video/mp4" />
              </video>

              <button
                type="button"
                onClick={toggleVideo}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  !isPlaying || showControl ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/60 bg-black/25 backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
                  {isPlaying ? (
                    <div className="flex gap-[6px]">
                      <span className="block h-[22px] w-[6px] rounded-sm bg-white" />
                      <span className="block h-[22px] w-[6px] rounded-sm bg-white" />
                    </div>
                  ) : (
                    <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* TEXT */}
          <div className="relative text-[#b3b3b3]">
            <div className="pointer-events-none absolute -right-4 -top-4 h-[120px] w-[120px] border-t border-r border-purple-500" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-[120px] w-[120px] border-b border-l border-purple-500" />

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] text-[#b4b4b4] sm:text-[40px] lg:text-[50px]">
              The world’s first-of-Its-kind speed gate
            </h2>

            <p className="mt-6 max-w-[420px] text-[14px] leading-[1.6] text-white sm:text-[16px] lg:text-[18px]">
              We presented Sweeper-M to the world at exhibition this year — and it left everyone
              impressed and in love with its design and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
