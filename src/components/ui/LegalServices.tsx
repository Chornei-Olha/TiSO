'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

const directions = [
  {
    title: 'Договірний супровід',
    content: `Підготовка, аналіз та юридична перевірка договорів для бізнесу. Ми допомагаємо мінімізувати ризики під час укладання угод та забезпечуємо юридичну безпеку співпраці з партнерам`,
  },
  {
    title: 'Податкове право',
    content: `Консультації з податкового законодавства, супровід податкових перевірок, вирішення податкових спорів та допомога у питаннях податкового планування. `,
  },
  {
    title: 'Корпоративне право',
    content: `Юридичний супровід створення та діяльності компаній, зміна структури бізнесу, підготовка корпоративних документів та супровід корпоративних рішень.
`,
  },
  {
    title: 'Судовий захист',
    content: `Представництво інтересів клієнтів у судах, підготовка процесуальних документів, супровід судових спорів та захист прав компаній і підприємців. 
`,
  },
  {
    title: 'Взаємодія з державними органами',
    content: `Юридична допомога під час перевірок контролюючих органів, підготовка документів та супровід взаємодії з державними установами.`,
  },
];

export default function LegalPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative w-full min-h-[600px] flex items-center overflow-hidden py-8">
        <Image
          src="/images/2.webp"
          alt="Legal and business consulting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-0">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Юридичні послуги для бізнесу та приватних клієнтів
          </h1>
          <h2 className="text-lg md:text-xl mt-10 text-gray-200 max-w-3xl">
            TriVista Consulting надає професійні юридичні послуги для бізнесу, підприємців та
            приватних клієнтів.
          </h2>
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <a
              onClick={() => setOpen(true)}
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 hover:text-white transition text-center 
             shadow-lg animate-pulse-slow"
            >
              Отримати консультацію
            </a>

            <Link
              href="/#services"
              className="inline-block text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition text-center"
            >
              Наші послуги
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Коротке описання */}
        <div className="mb-12">
          {/* <h1 className="text-3xl sm:text-4xl font-bold mb-4">Юридичні та фінансові послуги</h1> */}
          <h3 className="text-gray-600">
            Наша команда допомагає вирішувати правові питання, захищати інтереси компаній та
            будувати безпечну юридичну структуру бізнесу.
            <br />
            <br />
            Ми надаємо комплексний юридичний супровід діяльності компаній, допомагаємо оптимізувати
            правові процеси, підготувати договори, вирішити податкові питання та представляємо
            інтереси клієнтів у судових спорах.{' '}
          </h3>
        </div>

        {/* Поднапрямки - аккордеон */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Наші напрямки юридичних послуг
          </h2>
          <h3 className="mb-16">
            Ми надаємо комплексні юридичні послуги для бізнесу, підприємців та приватних клієнтів.
            Наші юристи супроводжують договірні відносини, податкові питання, судові спори та
            корпоративну діяльність компаній.{' '}
          </h3>
          <div className="space-y-4 whitespace-pre-line">
            {directions.map((item, idx) => (
              <Disclosure as="div" key={idx} className="border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
                      <span className="font-medium">{item.title}</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''} w-5 h-5 text-blue-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      {item.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Як ми працюємо */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-20 text-center">Як ми працюємо</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Аналіз потреб клієнта та визначення задач</li>
            <li>Розробка стратегії та плану дій</li>
            <li>Виконання робіт та супровід</li>
            <li>Звітність та контроль результату</li>
          </ol>
        </div>
      </div>
      {/* POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
