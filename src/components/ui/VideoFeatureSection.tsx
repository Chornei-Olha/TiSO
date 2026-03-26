export default function VideoFeatureSection() {
  return (
    <section className="relative w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* 🎥 LEFT - VIDEO */}
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
            <div className="relative overflow-hidden rounded-[6px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-auto h-screen object-cover"
              >
                <source src="/video/gate-10.mp4" type="video/mp4" />
              </video>

              {/* ▶ PLAY BUTTON (опционально) */}
              {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur">
                  <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[18px] border-l-white" />
                </div>
              </div> */}
            </div>
          </div>

          {/* 📝 RIGHT - TEXT */}
          <div className="relative text-[#b3b3b3]">
            <div className="pointer-events-none absolute -right-4 -top-4 h-[120px] w-[120px] border-t border-r border-purple-500" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-[120px] w-[120px] border-b border-l border-purple-500" />

            <h2 className="mt-4 text-[32px] font-bold leading-[1.1] sm:text-[40px] lg:text-[50px] text-[#b4b4b4]">
              The world’s first-of-Its-kind speed gate
            </h2>

            <p className="mt-6 max-w-[420px] text-[14px] leading-[1.6] sm:text-[16px] lg:text-[18px] text-white">
              We presented Sweeper-M to the world at exhibition this year — and it left everyone
              impressed and in love with its design and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
