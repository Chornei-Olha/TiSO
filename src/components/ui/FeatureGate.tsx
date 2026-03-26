type FeatureGateProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function FeatureGate({
  eyebrow = 'Consectetur adipiscing elit',
  title = 'Key features:',
  description = `✦ BMDrive® — a reliable mechanism with a powerful BLDC gear motor that ensures long-term, maintenance-free operation.

✦ Sweeper-M features 65,500 LEDs integrated across its panels and housing, providing full illumination.

✦ The speed gate is equipped with a smart self-diagnosing system.

✦ An innovative controller with an OLED display and buttons enables easy setup and configuration without the need for special programmers.

✦ Digital control of force and leaf speed, combined with safety sensors, prevents a person from being struck by a leaf, even in the case of unauthorised passage.`,
}: FeatureGateProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* desktop / tablet video background */}
      <div className="absolute inset-0 hidden sm:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/video/featuregate.mp4" type="video/mp4" />
        </video>
      </div>

      {/* desktop / tablet overlay */}
      <div className="absolute inset-0 hidden sm:block bg-black/30 z-10" />

      {/* content */}
      <div className="relative z-20 mx-auto flex min-h-[300px] sm:min-h-screen max-w-[1440px] items-start px-4 pt-10 sm:items-center sm:px-6 sm:pt-0 lg:px-16">
        <div className="relative w-full">
          <div className="flex justify-start sm:justify-end">
            <div className="max-w-[560px] text-[#b3b3b3] lg:text-left">
              <p className="text-[20px] font-bold sm:text-[25px] lg:text-[30px]">{eyebrow}</p>

              <h2 className="mt-5 text-[55px] font-bold leading-[60px] sm:mt-7 sm:text-[70px] sm:leading-[80px] lg:text-[75px]">
                {title}
              </h2>

              <p className="mt-5 whitespace-pre-line text-[14px] sm:mt-7 sm:text-[16px] lg:text-[18px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile video under text */}
      <div className="relative z-20 mt-16 w-full sm:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-contain object-bottom scale-150"
        >
          <source src="/video/featuregate.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
