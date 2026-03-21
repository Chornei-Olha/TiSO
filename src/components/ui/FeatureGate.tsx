import Image from 'next/image';

type FeatureGateProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
};

export default function FeatureGate({
  eyebrow = 'Consectetur adipiscing elit',
  title = 'Lorem ipsum dolor sit amet',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText = 'BUTTON',
}: FeatureGateProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* desktop / tablet background */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute h-full w-full">
          <Image src="/images/gate-2.webp" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[200px] max-w-[1440px] items-start px-4 pt-10 sm:min-h-[200px] sm:items-center sm:px-6 sm:pt-0 lg:min-h-[570px] lg:px-16">
        <div className="relative w-full">
          <div className="flex justify-start sm:justify-end">
            <div className="max-w-[560px] text-[#b3b3b3] lg:text-left">
              <p className="text-[20px] font-bold sm:text-[25px] lg:text-[30px]">{eyebrow}</p>

              <h2 className="mt-5 text-[55px] font-bold leading-[60px] sm:leading-[80px] sm:mt-7 sm:text-[70px] lg:text-[75px]">
                {title}
              </h2>

              <p className="mt-5 text-[14px] sm:mt-7 sm:text-[16px] lg:text-[18px]">
                {description}
              </p>

              <button className="mt-5 rounded-full bg-[#9000ff] px-20 py-5 text-[20px] font-bold text-white sm:mt-7 sm:text-[24px]">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile image block under text */}
      <div className="relative inset-0 h-[300px] w-full sm:hidden">
        <div className="absolute inset-x-0 bottom-0 h-full ">
          <Image
            src="/images/gate-2-mobile.webp"
            alt=""
            fill
            className="object-contain object-bottom [mask-image:radial-gradient(circle,white_50%,transparent_100%)]"
          />
        </div>
      </div>
    </section>
  );
}
