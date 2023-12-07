import Image from "next/image";
import { discord } from "@/assets/images";

export default function InvestInTheFuture({
  yMargin = false,
}: {
  yMargin?: boolean;
}) {
  return (
    <section
      className={`${
        yMargin ? "my-10 sm:my-28" : ""
      } border border-1 border-white rounded-[20px] bg-linear-gradient6 py-6 sm:py-16 px-6 sm:px-28 flex flex-col items-center text-center gap-6 sm:gap-16`}
    >
      <h2 className="text-4xl sm:text-[3.125rem] font-bold text-center ">
        Invest in the Future with Utopia
      </h2>
      <p className="sm:text-xl max-w-[721px]">
        Are you ready to be part of something revolutionary? Utopia is the
        future of blockchain technology, and we invite you to join us on this
        journey to create a better world.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
        <button className="h-[55px] w-[278px] sm:text-2xl font-semibold rounded-[10px] outline-none border border-white  bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white">
          Join Utopia
        </button>
        <button className="flex items-center justify-center gap-4 h-[55px] w-[278px] sm:text-2xl font-semibold rounded-[10px] outline-none border border-white  bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white">
          <Image src={discord} alt="discord" width={29.48} height={21.2} />
          <span>Join Discord</span>
        </button>
      </div>
    </section>
  );
}
