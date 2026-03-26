type ExperienceSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  benefitsTitle?: string;
  benefits?: string[];
};

export default function ExperienceSection({
  title = 'Elevate the user experience',
  subtitle = 'security of your building with the integration of Sweeper-M and Elevator Destination Control Systems',
  description = "This combination transforms the lobby from a simple checkpoint into an intelligent transit hub. Instead of the traditional two-step process, our integrated solution automates the passenger's journey. The moment a user is authorized at the Sweeper-M speed gate, the system",
  benefitsTitle = 'Benefits & Features:',
  benefits = [
    'Prevents unauthorized movement within the facility.',
    "Reduced waiting time. The integrated algorithm analyzes the user's destination by card reader.",
    'Energy efficiency by reducing unnecessary floor trips.',
  ],
}: ExperienceSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#303030]">
      {/* DESKTOP / TABLET BACKGROUND */}
      <div
        className="absolute inset-y-0 left-0 hidden w-full bg-cover bg-right bg-no-repeat sm:block lg:w-[75%]"
        style={{ backgroundImage: "url('/images/gate-4.webp')" }}
      />

      {/* DESKTOP / TABLET RIGHT BACKGROUND */}
      <div className="absolute inset-y-0 right-0 hidden w-full bg-[#303030] sm:block lg:w-[25%]" />

      {/* DESKTOP / TABLET FADES */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[300px] bg-gradient-to-r from-[#303030] to-transparent sm:block" />
      <div className="pointer-events-none absolute top-0 hidden h-full w-[400px] bg-gradient-to-l from-[#303030] to-transparent sm:block lg:right-[25%]" />
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[100px] w-full bg-gradient-to-b from-[#303030] to-transparent sm:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[100px] w-full bg-gradient-to-t from-[#303030] to-transparent sm:block" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-10 sm:min-h-[800px] sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        {/* MOBILE LAYOUT */}
        <div className="sm:hidden">
          <div className="text-[#fff]">
            <h2 className="max-w-[320px] text-[30px] font-bold leading-[0.98]">{title}</h2>

            <p className="mt-5 max-w-[330px] text-[20px] leading-[1.35]">{subtitle}</p>

            <p className="mt-8 max-w-[340px] text-[14px] leading-[1.55]">{description}</p>

            <div className="mt-8">
              <h3 className="text-[24px] font-semibold">{benefitsTitle}</h3>

              <ul className="mt-4 space-y-3 text-[14px] leading-[1.5]">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full border border-[#a855f7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MOBILE IMAGE UNDER TEXT */}
          <div className="relative mt-10 h-[320px] w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden">
            {' '}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/gate-4.webp')" }}
            />
          </div>
        </div>

        {/* DESKTOP / TABLET TEXT */}
        <div className="hidden text-[#fff] sm:block lg:absolute lg:right-[6%] lg:top-[52%] lg:w-[34%] lg:max-w-[520px] lg:-translate-y-1/2">
          <h2 className="max-w-[520px] text-[30px] font-bold leading-[0.98] sm:text-[35px] lg:text-[42px]">
            {title}
          </h2>

          <p className="mt-5 max-w-[560px] text-[20px] leading-[1.35] sm:text-[28px] lg:text-[32px]">
            {subtitle}
          </p>

          <p className="mt-8 max-w-[600px] text-[14px] leading-[1.55] sm:text-[16px] lg:text-[18px]">
            {description}
          </p>

          <div className="mt-8">
            <h3 className="text-[24px] font-semibold sm:text-[28px]">{benefitsTitle}</h3>

            <ul className="mt-4 space-y-3 text-[14px] leading-[1.5] sm:text-[18px]">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full border border-[#fff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
