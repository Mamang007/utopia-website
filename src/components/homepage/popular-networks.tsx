import Image from 'next/image';
import {
  bitcoin,
  dash,
  eth,
  neo,
  renren,
  ripple,
  sol,
  tron,
} from '@/assets/images';

export default function PopularNetworks() {
  return (
    <section className="mt-10 sm:mt-28 w-screen -ml-[50vw] left-1/2 relative">
      <h2 className="text-4xl sm:text-[3.125rem] font-bold text-center">
        Popular Networks
      </h2>

      <div className="mt-14 py-14 blur-0 bg-linear-gradient5 border-y border-white">
        <div className="flex items-center justify-between max-w-[1120px] mx-auto px-4 flex-wrap">
          <Image src={ripple} alt="ripple" width={80} height={80} />
          <Image src={eth} alt="eth" width={80} height={80} />
          <Image src={neo} alt="neo" width={80} height={80} />
          <Image src={bitcoin} alt="bitcoin" width={80} height={80} />
          <Image src={tron} alt="tron" width={80} height={80} />
        </div>
        <div className="mt-20 flex items-center justify-around max-w-[1120px] mx-auto px-4">
          <Image src={sol} alt="sol" width={80} height={80} />
          <Image src={dash} alt="dash" width={80} height={80} />
          <Image src={renren} alt="renren" width={80} height={80} />
        </div>
      </div>
    </section>
  );
}
