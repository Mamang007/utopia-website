export default function CurrentFees() {
  return (
    <section className="mt-10 sm:mt-28 border border-1 border-white rounded-[20px] bg-linear-gradient6 p-6 sm:p-10">
      <h3 className="text-3xl font-semibold mb-8">Token Information</h3>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 sm:mb-16"> 
        <div className="flex flex-col flex-1 mr-10">
          <p className="sm:text-xl">Tokens Offered</p>
          <p className="text-xl sm:text-2xl font-semibold">
            50,000,000.000 UTOP
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="sm:text-xl">Participants</p>
          <p className="text-xl sm:text-2xl font-semibold">11,546</p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="sm:text-xl">Hard Cap per User</p>

          <p className="text-xl sm:text-2xl font-semibold">
            6000 UTOP = 0.000456 BTC
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col flex-1 mr-10">
          <p className="sm:text-xl">Sale Price</p>
          <p className="text-xl sm:text-2xl font-semibold">
            1 UTOP = 0.000000456 BTC
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="sm:text-xl">Total Committed</p>
          <p className="text-xl sm:text-2xl font-semibold">1,435.4356 BTC</p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="sm:text-xl">End Date</p>
          <p className="text-xl sm:text-2xl font-semibold">20/10/2023</p>
        </div>
      </div>
    </section>
  );
}
