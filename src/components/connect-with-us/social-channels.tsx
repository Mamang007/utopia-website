import Image from 'next/image';
import { linkedin, tiktok, youtube, instagram } from '@/assets/images';

export default function SocialChannels() {
  return (
    <div className="mt-10 sm:mt-28">
      <h2 className="text-2xl sm:text-[2.5rem] font-semibold leading-tight">
        Social Channels
      </h2>
      <p className="pr-6 sm:text-xl">
        Don’t miss out on the latest content from Utopia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={linkedin} alt="linkedin" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">Linkedin</p>
          <p className="text-sm text-center">linkedin.com/utopiaproject</p>
          <p className="text-blue mt-9 text-lg fontsemibold text-center">
            VIEW
          </p>
        </div>

        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={tiktok} alt="tiktok" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">TikTok</p>
          <p className="text-sm text-center">tiktok.com/utopiaproject</p>
          <p className="text-blue mt-9 text-lg fontsemibold text-center">
            VIEW
          </p>
        </div>

        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={youtube} alt="youtube" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">YouTube</p>
          <p className="text-sm text-center">instagram.com/utopiaproject</p>
          <p className="text-blue mt-9 text-lg font-semibold text-center">
            VIEW
          </p>
        </div>

        <div className="border rounded-[20px] bg-linear-gradient6 flex flex-col items-center p-7">
          <Image src={instagram} alt="instagram" width={32} height={32} />
          <p className="text-center text-2xl font-semibold mt-[22px]">Instagram</p>
          <p className="text-sm text-center">instagram.com/utopiaproject</p>
          <p className="text-blue mt-9 text-lg font-semibold text-center">
            VIEW
          </p>
        </div>
      </div>
    </div>
  );
}
