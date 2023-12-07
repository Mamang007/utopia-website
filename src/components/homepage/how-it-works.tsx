import Image from 'next/image';
import { easyConnect, valuableGift } from '@/assets/images';

export default function HowItWorks() {
  return (
    <section className="mt-10 sm:mt-28">
      <h2 className="text-4xl sm:text-[3.125rem] font-bold text-center">
        How it works
      </h2>

      <div className="mt-6 sm:mt-20 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
        <Image alt="" src={easyConnect} width={526} height={613} />
        <div className="flex flex-col gap-8 sm:max-w-[442px]">
          <h3 className="text-2xl sm:text-4xl font-semibold">
            The Best New Livestream
          </h3>
          <p className="mb-4 sm:mb-0 sm:text-lg">
            <ul className="list-disc pl-10">
              <li>Business Meetings</li>
              <li>Educational Courses</li>
              <li>Business Startup Crowdfunding</li>
              <li>Entertainment and Gaming</li>
              <li>Professional Livestreaming</li>
              <li>Podcast</li>
              <li>Independent Film and Music Streaming</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mt-10 sm:mt-28 flex flex-col-reverse sm:items-center justify-between sm:flex-row-reverse gap-6">
        <Image alt="" src={valuableGift} width={526} height={613} />
        <div className="flex flex-col gap-8 sm:max-w-[442px]">
          <h3 className="text-2xl sm:text-4xl font-semibold">Appreciating Gifting</h3>
          <p className="mb-4 sm:mb-0 sm:text-lg">
            With utopia wallet, you gain income as a professional content
            creator from Utopia and gifters, all in cryptocurrency, a
            appreciating currency deemed more valuable than fiat currency.
          </p>
        </div>
      </div>
    </section>
  );
}
