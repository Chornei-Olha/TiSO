import Image from 'next/image';

type HeaderProps = {
  logoSrc?: string;
  logoAlt?: string;
};

export default function Header({
  logoSrc = '/images/logo.png',
  logoAlt = 'TSO logo',
}: HeaderProps) {
  return (
    <header className="w-full bg-[#363636]">
      <div className="mx-auto flex min-h-[60px] max-w-[1920px] items-center justify-center px-4 sm:min-h-[84px] md:min-h-[100px] lg:min-h-[120px]">
        <a href="/" aria-label="Go to homepage">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={160}
            height={70}
            priority
            className="
              w-[50px]
              sm:w-[65px]
              md:w-[80px]
              lg:w-[95px]
              h-auto
              object-contain
            "
          />
        </a>
      </div>
    </header>
  );
}
