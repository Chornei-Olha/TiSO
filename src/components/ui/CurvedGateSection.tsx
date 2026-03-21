export default function CurvedGateSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030] py-16 sm:py-20 lg:py-24">
      {/* purple curve */}
      {/* <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M-40 420 C 140 520, 260 500, 360 260 C 440 80, 560 350, 700 410 C 900 500, 1170 430, 1480 20"
            stroke="#5B21B6"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.95"
          />
        </svg>
      </div> */}
      <div className="w-full max-w-full">
        <img
          src="/images/gate-9.webp"
          alt="Turnstile composition"
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center"></div>

        <div className="mx-auto mt-8 max-w-[720px] text-center text-[#c7c7c7] sm:mt-10 lg:mt-12">
          <h2 className="text-[25px] font-bold leading-[1.15] sm:text-[28px] lg:text-[32px]">
            Lorem ipsum dolor sit amet
            <br />
            Consectetur adipiscing
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[18px] leading-[1.55] text-[#d0d0d0] sm:text-[20px] lg:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
