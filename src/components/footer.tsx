import Image from 'next/image';
import Link from 'next/link';
import {
  arrowLongRight,
  logoWhite,
  linkedin,
  tiktok,
  telegram,
  instagram,
  discord,
  youtube,
} from '@/assets/images';

export default function Footer() {
  return (
    <footer className="py-16 bg-linear-gradient relative w-screen -ml-[50vw] left-1/2 flex items-start flex-col-reverse lg:flex-row basis-full justify-between lg:justify-normal gap-10 lg:gap-[10.6%] px-6 md:px-10 lg:pl-[5.6%] lg:pr-[13.1%]">
      <div className="flex flex-col basis-[25.1%]">
        <p className="text-sm">
          This website provides general information only and we make no
          warranties about its accuracy or completeness. Your use of this
          information is at your own risk.{' '}
          <Link
            href="/"
            className="inline-flex items-baseline gap-[6px] text-blue"
          >
            <span className="leading-[1]">Learn More</span>
            <Image alt="arrow" src={arrowLongRight} width={16} height={6} />
          </Link>
        </p>

        <div className="mt-10 lg:mt-[72px]">
          <p className="text-sm font-semibold">Subscribe to our newsletter</p>
          <label htmlFor="email" className="relative">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              className="mt-2 pl-4 w-full rounded-[10px] outline outline-2 outline-blue h-[55px] text-sm font-medium text-grey focus:outline-none focus:ring-[3px] focus:ring-blue"
            />
            <Image
              src={arrowLongRight}
              alt="arrow"
              width={16}
              height={6}
              className="absolute right-5 top-1/2 transform -translate-y-1/2"
            />
          </label>
        </div>

        <div className="mt-10 lg:mt-16 space-y-5">
          <Image src={logoWhite} alt="logo" width={140.51} height={50.87} />
          <p className="text-sm font-medium">Powered by Ethereum</p>
        </div>

        <div className="flex gap-4 mt-9">
          <Link href="/">
            <Image src={linkedin} alt="linkedin" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src={tiktok} alt="tiktok" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src={telegram} alt="telegram" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src={instagram} alt="instagram" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src={discord} alt="discord" width={24} height={24} />
          </Link>
          <Link href="/">
            <Image src={youtube} alt="youtube" width={24} height={24} />
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-10 xl:gap-[116px] whitespace-nowrap basis-[45.8%] flex-wrap sm:flex-nowrap">
        <div className="flex flex-col gap-7 w-fit">
          <p className="font-semibold text-xl sm:text-2xl">Protocol</p>
          <div className="flex flex-col gap-7 text-sm">
            <Link href="/whitepaper">Whitepaper</Link>
            <Link href="/project">Application</Link>
            {/* <Link href="/">Developers</Link> */}
          </div>
        </div>
        <div className="flex flex-col gap-7 w-fit">
          <p className="font-semibold text-xl sm:text-2xl">Community</p>
          <div className="flex flex-col gap-7 text-sm">
            <Link href="/press-release">Press Release</Link>
            <Link href="/connect-with-us">Connect with us</Link>
            <Link href="/">Join Discord</Link>
            <Link
              href="/"
              className="inline-flex items-baseline gap-[6px] text-blue"
            >
              <span className="leading-[1]">Learn More</span>
              <Image alt="arrow" src={arrowLongRight} width={16} height={6} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-7 w-fit">
          <p className="font-semibold text-xl sm:text-2xl">Privacy</p>
          <div className="flex flex-col gap-7 text-sm">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link
              href="/"
              className="inline-flex items-baseline gap-[6px] text-blue"
            >
              <span className="leading-[1]">Learn More</span>
              <Image alt="arrow" src={arrowLongRight} width={16} height={6} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
