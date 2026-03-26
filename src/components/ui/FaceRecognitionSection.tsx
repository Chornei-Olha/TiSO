export default function FaceRecognitionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* 🔵 DESKTOP BACKGROUND IMAGE (FULL WIDTH) */}
      <div
        className="pointer-events-none absolute inset-0 hidden sm:block bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/gate-5.webp')" }}
      />

      {/* 🔵 FADE LEFT (чтобы текст читался) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[500px] bg-gradient-to-r from-[#303030] via-[#303030]/80 to-transparent sm:block" />

      {/* 🔵 TOP + BOTTOM FADE (мягкость) */}
      <div className="pointer-events-none absolute top-0 left-0 hidden h-[120px] w-full bg-gradient-to-b from-[#303030] to-transparent sm:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[120px] w-full bg-gradient-to-t from-[#303030] to-transparent sm:block" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* 🖥 DESKTOP TEXT */}
        <div className="hidden min-h-[720px] items-center sm:flex">
          <div className="max-w-[300px] text-[#b3b3b3]">
            <h2 className="mt-2 text-[34px] font-bold leading-tight sm:text-[42px] lg:text-[48px]">
              Face recognition
            </h2>

            <p className="mt-6 text-[16px] leading-[1.6] sm:text-[18px]">
              Forget about physical access cards — Sweeper-M supports integration with facial
              recognition technology.
            </p>

            <p className="mt-4 text-[14px] leading-[1.6] text-[#9f9f9f] sm:text-[16px]">
              Experience a truly seamless entry experience with our integrated facial recognition
              technology. The system identifies authorized users in real-time as they approach,
              ensuring that Sweeper-M gates open exactly when they approach.
            </p>

            <div className="mt-8">
              <p className="text-[16px] font-semibold text-[#d0d0d0]">
                Why is this useful for your access control?
              </p>

              <ul className="mt-4 space-y-3 text-[14px] text-[#bdbdbd] sm:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Access to the passage cannot be transferred to a third party.
                </li>

                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Fast contactless passage.
                </li>

                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Easy usage and high level of accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 📱 MOBILE (как у тебя было) */}
        <div className="sm:hidden">
          <div className="text-[#b3b3b3]">
            <p className="text-[16px]">Contactless access control:</p>

            <h2 className="mt-2 text-[34px] font-bold leading-tight">Face recognition</h2>

            <p className="mt-6 text-[16px] leading-[1.6]">
              Forget about physical access cards — Sweeper-M supports integration with facial
              recognition technology.
            </p>

            <p className="mt-4 text-[14px] leading-[1.6] text-[#9f9f9f]">
              Experience a truly seamless entry experience with our integrated facial recognition
              technology. The system identifies authorized users in real-time as they approach,
              ensuring that Sweeper-M gates open exactly when they approach.
            </p>

            <div className="mt-8">
              <p className="text-[16px] font-semibold text-[#d0d0d0]">
                Why is this useful for your access control?
              </p>

              <ul className="mt-4 space-y-3 text-[14px] text-[#bdbdbd] sm:text-[16px]">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Access to the passage cannot be transferred to a third party.
                </li>

                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Fast contactless passage.
                </li>

                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-purple-500" />
                  Easy usage and high level of accuracy.
                </li>
              </ul>
            </div>
          </div>

          {/* 👇 твоя мобильная картинка */}
          <div className="relative mt-3 h-[320px] w-screen -mx-4 overflow-hidden">
            <div
              className="absolute inset-0 bg-contain bg-bottom bg-no-repeat"
              style={{ backgroundImage: "url('/images/gate-5-mobile.webp')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
