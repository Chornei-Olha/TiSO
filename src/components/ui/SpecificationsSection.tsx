export default function SpecificationsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* glow background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]" />
        <div className="absolute left-1/2 top-[65%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
      </div> */}

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <h2 className="px-4 sm:px-6 lg:px-8 text-left sm:text-center text-[28px] font-medium text-[#cfcfcf] sm:text-[36px] lg:text-[44px]">
          Support for Architects
        </h2>
        <p className="px-4 sm:px-6 lg:px-8 text-left sm:text-center text-[18px] font-medium text-[#cfcfcf] sm:text-[22px] lg:text-[25px] pt-8">
          We work closely with architects at concept and detailed design stages to ensure accurate
          specification and seamless integration into the overall scheme.{' '}
        </p>
        <div className="flex justify-center">
          <div className="relative w-full max-w-full -mx-4">
            <img
              src="/images/gate-7.webp"
              alt="Dimensional specifications of Sweeper-M turnstile"
              className="h-auto w-full object-contain hidden sm:block"
            />
            <img
              src="/images/gate-7.webp"
              alt="Dimensional specifications of Sweeper-M turnstile"
              className="h-auto w-full object-contain sm:hidden"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://tiso-turnstiles.com/support/607-sweeper-m-project-specification-resources"
            target="_blank"
            rel="noopener noreferrer"
            className="
      mt-8
      w-[80%]
      sm:w-auto sm:px-14
      min-h-[54px] sm:min-h-[58px]
      flex items-center justify-center
      rounded-full bg-[#9000ff]
      text-[22px] font-bold text-white
      shadow-[0_10px_28px_rgba(0,0,0,0.35)]
      transition-transform duration-200 hover:scale-[1.02]
    "
          >
            Download Architect Kit
          </a>
        </div>
      </div>
    </section>
  );
}
