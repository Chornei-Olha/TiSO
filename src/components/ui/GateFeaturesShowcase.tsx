import Image from 'next/image';

type FeatureCard = {
  title: string;
  text: string;
};

const leftFeatures: FeatureCard[] = [
  {
    title: 'MATERIAL, COLOUR AND LED FLEXIBILITY',
    text: 'Integrated LED panels with 65,000 diodes enable the display of any visual content - seamlessly aligned with interior design or brand identity.',
  },
  {
    title: 'COMPACTNESS AND CLEAN GEOMETRY',
    text: 'Minimalist form factor integrates effortlessly into contemporary interiors, maintaining spatial clarity without visual clutter.',
  },
  {
    title: 'BIM-READY',
    text: 'Prepared for inclusion in project documentation and streamlined coordination with engineering teams.',
  },
];

const rightFeatures: FeatureCard[] = [
  {
    title: 'MODULARITY',
    text: 'Configurable for different passage widths and access scenarios, allowing adaptation to a variety of spatial layouts.',
  },
  {
    title: 'ACCESS CONTROL COMPATIBILITY',
    text: 'Supports all modern identification methods: RFID, MIFARE, EM cards, QR codes, mobile credentials, NFC, biometric authentication (fingerprint, facial recognition), PIN codes, and smart bracelets.',
  },
];

export default function GateFeaturesShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030] py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[90px] sm:top-[36%] sm:h-[360px] sm:w-[360px] sm:blur-[120px] lg:top-[42%] lg:h-[520px] lg:w-[520px] lg:blur-[160px]" />
        <div className="absolute left-1/2 top-[54%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[80px] sm:h-[280px] sm:w-[280px] sm:blur-[110px] lg:h-[400px] lg:w-[400px] lg:blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[32px] font-bold leading-[1.08] text-[#b3b3b3] sm:text-[46px] lg:text-[53px]">
            Lorem ipsum dolor sit amet
            <br className="hidden sm:block" /> Consectetur adipiscing
          </h2>
        </div>

        <div className="relative mt-10 lg:mt-14">
          {/* desktop background object */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute left-1/2 top-[30%] h-[900px] w-full -translate-x-1/2 -translate-y-1/2">
              <Image src="/images/gate-11.webp" alt="" fill priority className="object-contain" />
            </div>

            <div className="absolute left-1/2 top-[71%] h-[120px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/25 blur-[35px]" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:min-h-[720px] lg:grid-cols-[1fr_420px_1fr] lg:items-center lg:gap-6">
            <div className="order-2 flex flex-col gap-5 lg:order-1 lg:items-end lg:pr-2">
              {leftFeatures.map((item) => (
                <div key={item.title} className="w-full max-w-[360px] p-5 text-left">
                  <h3 className="text-[17px] font-bold uppercase leading-[1.2] text-white sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.45] text-white sm:text-[16px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="order-1 flex flex-col items-center lg:order-2">
              {/* mobile / tablet image */}
              <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:hidden">
                <Image
                  src="/images/gate-11-mobile.webp"
                  alt="Gate product"
                  width={900}
                  height={1100}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              <button
                type="button"
                className="
    mt-8
    w-[100%]
    sm:w-auto sm:mx-0 sm:px-14
    min-h-[54px] sm:min-h-[58px]
    rounded-full bg-[#9000ff]
    text-[22px] font-bold text-white
    shadow-[0_10px_28px_rgba(0,0,0,0.35)]
    transition-transform duration-200 hover:scale-[1.02]
    lg:mt-[390px]
  "
              >
                BUTTON
              </button>
            </div>

            <div className="order-3 flex flex-col gap-5 lg:items-start lg:pl-2">
              {rightFeatures.map((item) => (
                <div key={item.title} className="w-full max-w-[400px] p-5 text-left">
                  <h3 className="text-[17px] font-bold uppercase leading-[1.2] text-white sm:text-[19px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.45] text-white sm:text-[16px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
