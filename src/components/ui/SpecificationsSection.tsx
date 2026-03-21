export default function SpecificationsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* glow background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute left-1/2 top-[65%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex justify-center">
          <div className="relative w-full max-w-full -mx-4">
            <img
              src="/images/gate-7.webp"
              alt="Dimensional specifications of Sweeper-M turnstile"
              className="h-auto w-full object-contain hidden sm:block"
            />
            <img
              src="/images/gate-7-mobile.png"
              alt="Dimensional specifications of Sweeper-M turnstile"
              className="h-auto w-full object-contain sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
