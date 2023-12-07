import { activity, bitcoinConvert, moneys } from '@/assets/images';
import Image from 'next/image';

export default function SubHero() {
  return (
    <div className="mt-10 px-5 py-7 text-xl border-y border-blue blur-0 w-screen -ml-[50vw] left-1/2 relative">
      <div className="max-w-[1194px] mx-auto flex flex-col gap-4 sm-gap-0 sm:flex-row sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={activity} alt="logo" width={32} height={32} />
          <p className="bg-linear-gradient2 bg-clip-text text-transparent">
            Fuel your Crypto venture
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={bitcoinConvert} alt="logo" width={32} height={32} />
          <p className="bg-linear-gradient2 bg-clip-text text-transparent">
            Enhance your Crypto portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={moneys} alt="logo" width={32} height={32} />
          <p className="bg-linear-gradient2 bg-clip-text text-transparent">
            Pave way for your Crypto success
          </p>
        </div>
      </div>
    </div>
  );
}
