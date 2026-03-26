// import Image from 'next/image';

// type HeroGateProps = {
//   titleTop?: string;
//   title?: string;
//   description?: string;
//   imageSrc?: string;
//   imageAlt?: string;
// };

// export default function HeroGate({
//   titleTop = 'Your endless creativity',
//   title = 'Sweeper-M',
//   description = 'The first ever interactive gate',
// }: HeroGateProps) {
//   return (
//     <section className="min-h-screen h-[650px] sm:h-[500px] w-full bg-[#303030] flex items-center">
//       {/* 👉 ВАЖНО: relative + overflow-hidden */}
//       <div className="relative min-h-[calc(100vh-0px)] h-[600px] sm:h-[400px] w-full overflow-hidden">
//         {/* 🎥 VIDEO */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/video/herogate.mp4" type="video/mp4" />
//         </video>

//         {/* 🔲 затемнение */}
//         <div className="absolute inset-0 bg-black/40 z-10" />

//         {/* 📦 контент */}
//         <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-16 relative z-20 flex h-full items-center sm:items-center justify-start pb-32 sm:pb-0">
//           <div className="text-left text-[#B3B3B3]">
//             <p className="text-[19px] sm:text-[23px] lg:text-[27px]">{titleTop}</p>

//             <h1 className="mt-2 text-[55px] sm:text-[60px] lg:text-[64px] font-bold">{title}</h1>

//             <p className="mt-2 text-[19px] sm:text-[23px] lg:text-[27px] lg:max-w-[300px]">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

type HeroGateProps = {
  titleTop?: string;
  title?: string;
  description?: string;
};

export default function HeroGate({
  titleTop = 'Your endless creativity',
  title = 'Sweeper-M',
  description = 'The first ever interactive gate',
}: HeroGateProps) {
  return (
    <section className="w-full bg-[#303030]">
      {/* DESKTOP */}
      <div className="relative hidden min-h-screen h-[650px] w-full overflow-hidden sm:flex sm:items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/herogate.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-[1440px] items-center justify-start px-4 sm:px-6 lg:px-16">
          <div className="text-left text-[#B3B3B3]">
            <p className="text-[19px] sm:text-[23px] lg:text-[27px]">{titleTop}</p>

            <h1 className="mt-2 text-[55px] sm:text-[60px] lg:text-[64px] font-bold">{title}</h1>

            <p className="mt-2 text-[19px] sm:text-[23px] lg:text-[27px] lg:max-w-[300px]">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="min-h-screen sm:hidden">
        {/* TEXT */}
        <div className="mx-auto max-w-[1440px] px-4 pt-32 pb-10">
          <div className="text-left text-[#B3B3B3]">
            <p className="text-[19px]">{titleTop}</p>

            <h1 className="mt-2 text-[55px] font-bold leading-none">{title}</h1>

            <p className="mt-2 max-w-[300px] text-[19px]">{description}</p>
          </div>
        </div>

        {/* VIDEO UNDER TEXT */}
        <div className="relative h-[450px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain translate-x-[-35%] scale-[2.5]"
          >
            <source src="/video/herogate.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
