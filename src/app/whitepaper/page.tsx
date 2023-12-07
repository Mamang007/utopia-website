import InvestInTheFuture from '@/components/invest-in-the-future';
import PrivacyPolicy from '@/components/whitepaper/privacy-policy';
import TermsOfUse from '@/components/whitepaper/terms-of-use';
import WhitePaperCard from '@/components/whitepaper/whitepaper';
import Link from 'next/link';

export default function Whitepaper() {
  return (
    <main className="grow flex flex-col gap-10 sm:gap-16 pb-10 sm:pb-20">
      <WhitePaperCard />
      
      <PrivacyPolicy />
      <TermsOfUse />
      <InvestInTheFuture />
    </main>
  );
}
