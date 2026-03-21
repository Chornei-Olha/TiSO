'use client';

import Image from 'next/image';
import { useRef } from 'react';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/images/gallery-1.png', alt: 'Gallery image 1' },
  { id: 2, src: '/images/gallery-2.png', alt: 'Gallery image 2' },
  { id: 3, src: '/images/gallery-3.png', alt: 'Gallery image 3' },
  { id: 4, src: '/images/gallery-4.png', alt: 'Gallery image 4' },
  { id: 5, src: '/images/gallery-5.png', alt: 'Gallery image 5' },
  { id: 6, src: '/images/gallery-6.png', alt: 'Gallery image 6' },
  { id: 6, src: '/images/gallery-7.png', alt: 'Gallery image 7' },
];

export default function GallerySlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>('[data-gallery-card]');
    const gap = 16;
    const cardWidth = firstCard?.offsetWidth ?? 180;
    const offset = cardWidth + gap;

    track.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#303030] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[40px] font-bold leading-none text-[#bdbdbd] sm:text-[56px] lg:text-[68px]">
          Gallery
        </h2>

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <button
            type="button"
            onClick={() => scrollByCard('left')}
            aria-label="Previous images"
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 lg:flex"
          >
            ←
          </button>

          <div
            ref={trackRef}
            className="
              flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              lg:px-16
            "
          >
            {galleryItems.map((item) => (
              <article
                key={item.id}
                data-gallery-card
                className="
                  relative shrink-0 snap-center overflow-hidden rounded-[4px]
                  h-[220px] w-[110px]
                  sm:h-[260px] sm:w-[130px]
                  lg:h-[300px] lg:w-[150px]
                "
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 130px, 150px"
                  className="object-cover transition duration-300 hover:scale-[1.03]"
                />
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard('right')}
            aria-label="Next images"
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/80 backdrop-blur-sm transition hover:bg-black/35 lg:flex"
          >
            →
          </button>
        </div>

        <p className="mt-5 text-center text-sm text-white/40 lg:hidden">Swipe left or right</p>
      </div>
    </section>
  );
}
