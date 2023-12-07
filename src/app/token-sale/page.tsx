import CurrentFees from '@/components/token-sale/current-fees';
import GenerateSale from '@/components/token-sale/generate-sale';
import SubscriptionTimeline from '@/components/token-sale/subsription-timeline';
import TokenSaleEconomy from '@/components/token-sale/token-sale-economy';

export default function TokenSale() {
  return (
    <main className="grow flex flex-col gap-10 sm:gap-28 pb-20">
      <CurrentFees />
      <GenerateSale />
      <SubscriptionTimeline />
      <TokenSaleEconomy />
    </main>
  );
}
