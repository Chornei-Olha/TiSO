// 'use client';

// import { useEffect, useRef, useState } from 'react';

// export default function BrandSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [showControl, setShowControl] = useState(false);

//   useEffect(() => {
//     const currentVideo = videoRef.current;
//     if (!currentVideo) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(currentVideo);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (isVisible && isPlaying) {
//       video.play().catch(() => {});
//     } else {
//       video.pause();
//     }
//   }, [isVisible, isPlaying]);

//   const toggleVideo = () => {
//     const video = videoRef.current;
//     if (!video) return;

//     if (video.paused) {
//       video.play().catch(() => {});
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
//         <h2 className="text-left text-[28px] font-medium text-[#cfcfcf] sm:text-center sm:text-[36px] lg:text-[44px]">
//           Any color. Perfect match with your interior.
//         </h2>

//         <div className="relative mt-10 sm:mt-14">
//           <div
//             className="group relative aspect-[16/9] overflow-hidden rounded-[5px] bg-black"
//             onMouseEnter={() => setShowControl(true)}
//             onMouseLeave={() => setShowControl(false)}
//           >
//             <video
//               ref={videoRef}
//               muted
//               loop
//               playsInline
//               className="h-full w-full object-cover"
//               onPlay={() => setIsPlaying(true)}
//               onPause={() => setIsPlaying(false)}
//             >
//               <source src="/video/brandsection.mp4" type="video/mp4" />
//             </video>

//             <button
//               type="button"
//               onClick={toggleVideo}
//               aria-label={isPlaying ? 'Pause video' : 'Play video'}
//               className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
//                 !isPlaying || showControl ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/60 bg-black/25 backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
//                 {isPlaying ? (
//                   <div className="flex gap-[6px]">
//                     <span className="block h-[22px] w-[6px] rounded-sm bg-white" />
//                     <span className="block h-[22px] w-[6px] rounded-sm bg-white" />
//                   </div>
//                 ) : (
//                   <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
//                 )}
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';

export default function BrandSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showControl, setShowControl] = useState(false);

  useEffect(() => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(currentVideo);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, isPlaying]);

  const startHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = setTimeout(() => {
      setShowControl(false);
    }, 2000);
  };

  const handleInteraction = () => {
    setShowControl(true);
    startHideTimer();
  };

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }

    handleInteraction();
  };

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-left text-[28px] font-medium text-[#cfcfcf] sm:text-center sm:text-[36px] lg:text-[44px]">
          Any color. Perfect match with your interior.
        </h2>

        <div className="relative mt-10 sm:mt-14">
          <div
            className="group relative aspect-[16/9] overflow-hidden rounded-[5px] bg-black"
            onMouseMove={handleInteraction}
            onClick={handleInteraction}
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/video/brandsection.mp4" type="video/mp4" />
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
      </div>
    </section>
  );
}
