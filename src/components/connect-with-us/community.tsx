import Image from 'next/image';
import { discord, telegram } from '@/assets/images';

export default function Community() {
  return (
    <div className="mt-10 sm:mt-28">
      <h2 className="text-2xl sm:text-[2.5rem] font-semibold leading-tight">
        Community Management
      </h2>
      <p className="pr-6 sm:text-xl max-w-[605px]">
        Join our communities to connect with active Utopia users, and also
        discuss the possibilities around UTOP coin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={discord} alt="discord" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">
            Discord
          </p>
          <p className="text-sm text-center">discord.com/utopiaproject</p>
          <p className="text-blue mt-9 text-lg fontsemibold text-center">
            VIEW
          </p>
        </div>

        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={telegram} alt="tiktok" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">
            Telegram
          </p>
          <p className="text-sm text-center">t.me/utopiaproject</p>
          <p className="text-blue mt-9 text-lg fontsemibold text-center">
            VIEW
          </p>
        </div>
      </div>
    </div>
  );
}
