export default function SubscriptionTimeline() {
  return (
    <section className="border border-1 border-white rounded-[20px] bg-linear-gradient6 p-6 sm:p-10">
      <div className="flex flex-col">
        <h2 className="text-ld sm:text-3xl font-semibold">Generate Sale</h2>

        <ol className="border-l-2 border-primary dark:border-primary-500 ml-6 mt-7">
          <li>
            <div className="flex-start flex items-center">
              <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C23DF9]"></div>
              <h4 className="-mt-2 text-ld sm:text-2xl font-semibold">
                BTC Holding Calculation Period
              </h4>
            </div>
            <div className="mb-10 sm:mb-16 ml-6 pb-6">
              <a
                href="#!"
                className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                01/10/2023
              </a>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center">
              <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C23DF9]"></div>
              <h4 className="-mt-2 text-ld sm:text-2xl font-semibold">
                Subscription Period
              </h4>
            </div>
            <div className="mb-10 sm:mb-16 ml-6 pb-6">
              <a
                href="#!"
                className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                20/10/2023
              </a>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center">
              <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C23DF9]"></div>
              <h4 className="-mt-2 text-ld sm:text-2xl font-semibold">
                Calculation Period
              </h4>
            </div>
            <div className="mb-10 sm:mb-16 ml-6 pb-6">
              <a
                href="#!"
                className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 "
              >
                01/10/2023
              </a>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center">
              <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#C23DF9]"></div>
              <h4 className="-mt-2 text-ld sm:text-2xl font-semibold">
                Final Token Distribution
              </h4>
            </div>
            <div className="ml-6 pb-6">
              <a
                href="#!"
                className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                20/10/2023
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
