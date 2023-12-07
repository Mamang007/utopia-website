"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Counter() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const targetDate = new Date("Oct 31, 2023 00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="-mt-[99px] flex flex-col items-center justify-center py-20 sm:py-[130px] text-center bg-[url('../assets/images/bg-img.png')] bg-cover bg-no-repeat bg-center w-screen -ml-[50vw] left-1/2 relative px-4 h-screen">
      <div>
        <h4 className="text-center font-semibold text-[40px] mb-20">
          Get ready for UTOPIA
        </h4>
        <div className="flex items-center justify-center gap-5 sm:gap-24">
          <div>
            <p className="text-blue text-3xl sm:text-[84px] font-bold">
              {timeRemaining.days}
            </p>
            <p className="text-xl mt-3">Days</p>
          </div>
          <div>
            <p className="text-blue text-3xl sm:text-[84px] font-bold">:</p>
          </div>
          <div>
            <p className="text-blue text-3xl sm:text-[84px] font-bold">
              {timeRemaining.hours}
            </p>
            <p className="text-xl mt-3">Hours</p>
          </div>
          <div>
            <p className="text-blue text-3xl sm:text-[84px] font-bold">:</p>
          </div>
          <div>
            <p className="text-blue text-3xl sm:text-[84px] font-bold">
              {timeRemaining.minutes}
            </p>
            <p className="text-xl mt-3">Minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
