import Image from 'next/image';
import { newsImg } from '@/assets/images';

export default function LatestNews() {
  return (
    <div className="mt-10 sm:mt-28">
      <h2 className="text-2xl sm:text-[2.5rem] font-semibold leading-tight">
        Latest News
      </h2>
      <p className="pr-6 sm:text-[1.25rem]">
        Keep up to date with the latest Utopia news and updates.
      </p>

      <div className="mt-[62px]">
        <div className="flex flex-col sm:flex-row items-center gap-11 mb-16">
          <div className="border-white bg-linear-gradient6 w-[350px] h-[200px] rounded-[20px]">
            <Image
              src={newsImg}
              alt="New Image"
              width={350}
              height={200}
              className="rounded-[20px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">
              Utopia launches in 20+ countries
            </h3>
            <p className="mt-5">
              UTOPIA Inc. and its subsidiaries and affiliates (collectively,
              "UTOPIA," "we" or "us") is committed to protecting the privacy and
              security of your personally identifying information. We have
              prepared this Privacy Policy to explain how we collect, use,
              protect, and disclose your Personal Information and Usage Data (as
              such terms are defined below) when you use any of the UTOPIA
              websites or services (the "Services").
            </p>
            <p className="mt-5">Utopia News | 23-09-2023 21:09</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-11">
          <div className="border-white bg-linear-gradient6 w-[350px] h-[200px] rounded-[20px]">
            <Image
              src={newsImg}
              alt="New Image"
              width={350}
              height={200}
              className="rounded-[20px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">
              Utopia releases Version 1.4.9
            </h3>
            <p className="mt-5">
              UTOPIA Inc. and its subsidiaries and affiliates (collectively,
              "UTOPIA," "we" or "us") is committed to protecting the privacy and
              security of your personally identifying information. We have
              prepared this Privacy Policy to explain how we collect, use,
              protect, and disclose your Personal Information and Usage Data (as
              such terms are defined below) when you use any of the UTOPIA
              websites or services (the "Services").
            </p>
            <p className="mt-5">Utopia Update | 23-09-2023 21:09</p>
          </div>
        </div>
      </div>
    </div>
  );
}
