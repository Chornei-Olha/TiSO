export default function HeroGateBg() {
  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* 🖼 BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gate-3.webp')" }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {/* затемнення по краях */}
        <div
          className="absolute inset-0 
    bg-[radial-gradient(circle_at_center,transparent_50%,#303030_100%)]
  "
        />
      </div>

      {/* 📝 CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1440px] h-full px-4 sm:px-6 lg:px-16 flex items-center">
        <div className="max-w-[550px] text-white">
          <h2 className="text-[40px] sm:text-[55px] lg:text-[62px] font-bold leading-tight">
            Lorem ipsum dolor sit amet. Consectetur adipiscing elit
          </h2>

          <p className="mt-6 text-[14px] sm:text-[16px] lg:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
