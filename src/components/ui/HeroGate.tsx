'use client';

type HeroGateProps = {
  titleTop?: string;
  title?: string;
  description?: string;
  description2?: string;
};

export default function HeroGate({
  titleTop = 'Your endless creativity',
  title = 'Sweeper-M',
  description = 'The first ever interactive gate',
  description2 = 'Sweeper-M is a unique solution with integrated media panels that transform a standard speed gate into a dynamic communication platform, allowing you to display your own visuals — from brand identity to promotional content.',
}: HeroGateProps) {
  return (
    <section className="w-full bg-[#303030]">
      {/* DESKTOP */}
      <div className="relative hidden min-h-screen h-[700px] w-full overflow-hidden sm:flex sm:items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-contain"
        >
          <source src="/video/herogate2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] items-center justify-start px-4 sm:px-6 lg:px-16">
          <div className="text-left text-[#B3B3B3]">
            <p className="text-[19px] sm:text-[23px] lg:text-[27px]">{titleTop}</p>

            <h1 className="mt-2 text-[55px] sm:text-[60px] lg:text-[64px] font-bold">{title}</h1>

            <p className="mt-6 text-[19px] sm:text-[23px] lg:text-[27px] lg:max-w-[540px]">
              {description}
            </p>
            <p className="mt-6 text-[15px] sm:text-[18px] lg:text-[20px] lg:max-w-[540px]">
              {description2}
            </p>
            <button
              onClick={() => {
                document.getElementById('more-info')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-16
    min-h-[40px]
    rounded-full bg-[#9000ff]
    px-5
    text-[14px] font-bold text-white
    shadow-[0_6px_20px_rgba(0,0,0,0.3)]
    transition-all duration-200
    hover:scale-[1.03] hover:bg-[#a020ff]
    active:scale-[0.98]
    sm:min-h-[60px] sm:px-16 sm:text-[20px]
    lg:px-32
  "
            >
              Find more
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="min-h-screen sm:hidden">
        {/* TEXT */}
        <div className="mx-auto max-w-[1440px] px-4 pt-32 pb-10">
          <div className="text-left text-[#B3B3B3]">
            <p className="text-[19px]">{titleTop}</p>

            <h1 className="mt-2 text-[55px] font-bold leading-none">{title}</h1>

            <p className="mt-6 max-w-full text-[19px]">{description}</p>
            <p className="mt-6 max-w-full text-[14px]">{description2}</p>
            <button
              onClick={() => {
                document.getElementById('more-info')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8
    min-h-[50px]
    rounded-full bg-[#9000ff]
    px-5
    text-[18px] font-bold text-white
    shadow-[0_6px_20px_rgba(0,0,0,0.3)]
    transition-all duration-200
    hover:scale-[1.03] hover:bg-[#a020ff]
    active:scale-[0.98]
    sm:min-h-[44px] sm:px-6 sm:text-[16px]
    lg:px-16
    w-full
  "
            >
              Find more
            </button>
          </div>
        </div>

        {/* VIDEO UNDER TEXT */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain translate-x-[-25%] scale-[1.5]"
          >
            <source src="/video/herogate2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
