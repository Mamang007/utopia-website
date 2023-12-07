import Image from 'next/image';
import Link from 'next/link';
import { connectBg, playstore, apple } from '@/assets/images';

export default function ConnectWithCrypto() {
  return (
    <div className="mt-10 sm:mt-28">
      <div className="w-full mx-auto">
        <div className="relative left-1/2 transform -translate-x-1/2 bg-linear-gradient4 py-6 md:py-10 xl:py-24 px-6 xl:pl-16 xl:pr-0 flex flex-col gap-10 xl:gap-0 xl:flex-row xl:items-center justify-between border border-1 border-white rounded-[20px]">
          <div className="flex flex-col gap-6 xl:max-w-[368px]">
            <h2 className="text-2xl sm:text-[2.5rem] font-semibold leading-tight xl:max-w-[330px]">
              The Ultimate Way to Share Moments and Crypto
            </h2>
            <p className="pr-6 sm:text-[1.25rem] xl:max-w-[368px]">
              The app provides a seamless and easy-to-use way to connect with
              others and gift them crypto (Utopia Coin). The app appeals to the
              growing interest in digital assets and the potential for future
              value appreciation.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="#"
                className="bg-linear-gradient3 flex border border-1 border-white px-4 py-2 rounded gap-2 w-full justify-center sm:w-auto sm:justify-start"
              >
                <Image src={apple} alt="" width={24} height={24} />
                <div>
                  <p className="text-xs">Get it on</p>
                  <p className="text-base font-bold">Play Store</p>
                </div>
              </Link>

              <Link
                href="#"
                className="bg-linear-gradient3 flex border border-1 border-white px-4 py-2 rounded gap-2 w-full justify-center sm:w-auto sm:justify-start"
              >
                <Image src={playstore} alt="" width={24} height={24} />
                <div>
                  <p className="text-xs">Download on</p>
                  <p className="text-base font-bold">Apple Store</p>
                </div>
              </Link>
            </div>
          </div>
          <Image
            src={connectBg}
            alt=""
            width={777}
            height={394}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
}
