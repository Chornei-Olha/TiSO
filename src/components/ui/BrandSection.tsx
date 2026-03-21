export default function BrandSection() {
  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* 📝 TITLE */}
        <h2 className="text-center text-[28px] font-medium text-[#cfcfcf] sm:text-[36px] lg:text-[44px]">
          A speed gate that speaks your brand
        </h2>

        {/* 🎬 VIDEO / IMAGE */}
        <div className="relative mt-10 sm:mt-14">
          <div className="relative overflow-hidden rounded-[5px] bg-black">
            <img
              src="/images/gate-6.webp" // поставь свою картинку
              alt="Brand gate preview"
              className="w-full h-full object-cover"
            />

            {/* затемнение (как в макете) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* ▶️ play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition hover:scale-105">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
