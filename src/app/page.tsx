import Faqs from '@/components/faqs';
import ConnectWithCrypto from '@/components/homepage/connect-with-crypto';
import Hero from '@/components/homepage/hero';
import HowItWorks from '@/components/homepage/how-it-works';
import InvestInTheFuture from '@/components/invest-in-the-future';
import PopularNetworks from '@/components/homepage/popular-networks';
import SubHero from '@/components/homepage/sub-hero';


export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <ConnectWithCrypto />
      <HowItWorks />
      <PopularNetworks />
      <Faqs />
      <InvestInTheFuture yMargin />
    </>
  );
}
