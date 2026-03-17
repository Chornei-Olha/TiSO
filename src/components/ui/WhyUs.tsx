'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Комплексний підхід',
    text: 'Ми поєднуємо юридичний супровід бізнесу, фінансовий аналіз та стратегічний консалтинг. Це дозволяє вирішувати складні бізнес-задачі комплексно та ефективно.',
  },
  {
    title: 'Досвід роботи з бізнесом',
    text: 'Наша команда має практичний досвід роботи з підприємцями, малим і середнім бізнесом та міжнародними компаніями. Ми добре розуміємо бізнес-процеси та пропонуємо рішення, які працюють на практиці.',
  },
  {
    title: 'Конфіденційність',
    text: 'Ми гарантуємо повну конфіденційність інформації клієнтів та дотримання професійних стандартів юридичної і фінансової етики.',
  },
  {
    title: 'Орієнтація на результат',
    text: 'Ми працюємо не заради процесу, а заради досягнення конкретного результату для клієнта: оптимізації бізнес-процесів, зменшення податкового навантаження та захисту інтересів компанії.',
  },
  {
    title: 'Міжнародні стандарти',
    text: 'У своїй роботі ми використовуємо сучасні підходи та міжнародні стандарти бізнес-консалтингу, що дозволяє нашим клієнтам ефективно працювати як в Україні, так і на міжнародних ринках.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Чому обирають TriVista Consulting{' '}
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Наш підхід базується на глибокому досвіді юридичного, фінансового та бізнес-консалтингу.
            Ми допомагаємо підприємцям і компаніям приймати стратегічні рішення, мінімізувати ризики
            та забезпечувати стабільний розвиток бізнесу.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                hover:border-blue-400
                transition
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#2E334E]">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
