import Image from 'next/image';

type HeroGateProps = {
  titleTop?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function HeroGate({
  titleTop = 'Your endless creativity',
  title = 'Sweeper-M',
  description = 'The first ever interactive gate',
  imageSrc = '/images/gate.png',
  imageAlt = 'Sweeper-M interactive gate',
}: HeroGateProps) {
  return (
    <section className="h-[650px] sm:h-[500px] w-full bg-[#303030] flex items-center">
      <div className="h-[600px] sm:h-[400px] w-full bg-[#222323]">
        <div
          className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16 h-full
    bg-[url('/images/gate-mobile.png')]
    bg-bottom bg-contain
    sm:bg-[url('/images/gate.png')]
    sm:bg-center sm:bg-cover
    bg-no-repeat"
        >
          <div className="flex h-full items-start sm:items-center justify-start pt-32 sm:pt-0">
            {' '}
            <div className="text-left text-[#B3B3B3]">
              <p className="text-[19px] sm:text-[23px] lg:text-[27px] font-normal ">{titleTop}</p>

              <h1 className="mt-2 text-[55px] sm:text-[60px] lg:text-[64px] font-bold ">{title}</h1>

              <p className="mt-2 text-[19px] sm:text-[23px] lg:text-[27px] lg:max-w-[300px] ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
