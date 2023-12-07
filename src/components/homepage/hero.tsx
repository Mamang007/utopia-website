import Link from "next/link";

export default function Hero() {
  return (
    <section className="-mt-[99px] flex flex-col items-center py-20 sm:py-[140px] text-center bg-[url('../assets/images/hero-illustration.png')] bg-cover bg-no-repeat bg-center w-screen -ml-[50vw] left-1/2 relative px-4">
      <h1 className="mt-[99px] text-4xl sm:text-[5.25rem] font-bold tracking-[1.68px] leading-none">
        Crypto Gifting {" "}
        <span className="pt-[6px] block bg-linear-gradient2 bg-clip-text text-transparent">
          Livestream App
        </span>
      </h1>
      <p className="mt-6 sm:mt-10 max-w-[80%] sm:max-w-[589px] mx-auto text-lg sm:text-[1.625rem]">
        The first ever livestream cryptocurrency gifting app with Utopia coin
        offering, UTOP
      </p>
      <Link
        href="/"
        className="mt-6 sm:mt-20 flex items-center h-[55px] px-10 sm:text-2xl font-semibold rounded-[10px] outline-none border border-white  bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white"
      >
        Purchase Coin
      </Link>
    </section>
  );
}
