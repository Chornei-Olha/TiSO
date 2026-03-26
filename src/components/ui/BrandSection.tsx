export default function BrandSection() {
  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-left sm:text-center text-[28px] font-medium text-[#cfcfcf] sm:text-[36px] lg:text-[44px]">
          Any color. Perfect match with your interior.
        </h2>

        <div className="relative mt-10 sm:mt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[5px] bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src="/video/brandsection.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
