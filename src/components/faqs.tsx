'use client';

import { SetStateAction, useState } from 'react'; // Import useState hook
import Image from 'next/image';
import { chevronDown } from '@/assets/images';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAnswer = (index: SetStateAction<number>) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const faqData = [
    {
      question: 'What is Utopia?',
      answer:
        'Utopia is the bridge to your crypto future, simplifying connections and sharing moments.',
    },
    {
      question: 'How can I participate in the Utopia ICO?',
      answer: "It's simple! Join the ICO and be part of the crypto revolution.",
    },
    {
      question: 'What benefits do Utopia token holders receive?',
      answer: 'Utopia token holders unlock exclusive perks and opportunities.',
    },
    {
      question: 'What cryptocurrencies are accepted for the Utopia ICO?',
      answer: 'Multiple cryptocurrencies are accepted. Discover your options.',
    },
  ];

  return (
    <section className="mt-10 sm:mt-28">
      <h2 className="text-4xl sm:text-[3.125rem] font-bold text-center">
        FAQ&apos;s
      </h2>

      <div className="mt-14 flex flex-col gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="rounded-[20px] bg-linear-gradient6 py-6 sm:py-8 px-6 sm:px-11 border border-1 border-white"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(index)}
              tabIndex={0}
            >
              <h4 className="text-lg sm:text-2xl font-semibold w-4/5">
                {item.question}
              </h4>
              <button
                className={`w-6 h-4 right-14 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              >
                <Image
                  src={chevronDown}
                  alt="chevron-down"
                  width={24}
                  height={16}
                />
              </button>
            </div>
            <p
              className={`transition-opacity max-w-[95%] ${
                openIndex === index
                  ? 'mt-7 opacity-100'
                  : 'opacity-0 h-0 overflow-hidden'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
