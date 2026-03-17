'use client';

import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'Малий та середній бізнес',
    description:
      'Юридичний супровід бізнесу, податкове планування, розробка договорів, корпоративне право та захист інтересів компанії. ',
  },
  {
    title: 'Власники компаній',
    description:
      'Захист активів, корпоративне структурування бізнесу, стратегічний юридичний та фінансовий консалтинг для власників компаній. ',
  },
  {
    title: 'ФОП',
    description:
      'Податковий консалтинг для ФОП, юридичний супровід діяльності, підготовка договорів, допомога під час перевірок та вирішення спорів. ',
  },
  {
    title: 'Компанії з іноземним капіталом',
    description:
      'Міжнародне структурування бізнесу, трансфертне ціноутворення (ТЦУ), податкове резидентство, юридичний комплаєнс та супровід діяльності в Україні.',
  },
  {
    title: 'Бізнес у кризових або спірних ситуаціях',
    description:
      'Судові спори, банкрутство, реструктуризація бізнесу, антикризовий юридичний супровід та захист інтересів компанії.',
  },
];

export default function WhoWeHelp() {
  return (
    <section id='who-we-help"' className="who-we-help py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Кому ми допомагаємо
          </h2>
          <p
            id="section-description"
            className="section-description mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            TriVista Consulting надає юридичний та фінансовий консалтинг для бізнесу, підприємців та
            компаній з іноземним капіталом. Ми допомагаємо оптимізувати податки, структурувати
            бізнес, захищати активи та вирішувати складні юридичні питання.
          </p>
        </div>

        {/* Cards */}
        <div id="who-grid" className="who-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              id="who-card"
              className="who-card group rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Accent line */}
              <div className="w-12 h-1 bg-blue-700 rounded-full mb-4"></div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
