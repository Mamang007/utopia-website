"use client";
import React, { useState } from "react";
import Modal from "@/components/modal";

export default function GenerateSale() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border border-1 border-white rounded-[20px] bg-linear-gradient6 py-6 sm:py-16 px-6 sm:px-28 flex flex-col items-center text-center gap-6 sm:gap-16">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl sm:text-[3.125rem] font-bold text-center">
          Generate Sale
        </h2>
        <p className="sm:text-xl">Creating your own sale only takes seconds!</p>
      </div>
      <p className="sm:text-xl max-w-[913px]">
        Disclaimer: This website offers general investment information. While we strive for accuracy, it's not
guaranteed. Consult a financial professional for personalized guidance. Your trust matters to us..
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="h-12 w-[278px] sm:text-2xl font-semibold rounded-[10px] outline-none border border-white bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white"
      >
        Start sale
      </button>

      <Modal visible={isOpen} onClose={() => setIsOpen(false)}>
        <div className="border border-white bg-linear-gradient6 rounded-[20px] w-full mx-4 sm:w-[60%] px-6 sm:px-14 py-10  flex flex-col items-start h-[90%] sm:h-auto overflow-auto">
          <h1 className="text-3xl sm:text-[3.125rem]  font-bold text-center w-full">
            Generate Sale
          </h1>

          <div className="w-full mt-9 sm:mt-12">
            <form>
              <div className="flex flex-col items-start">
                <label className="font-semibold">Currency</label>
                <input
                  type="text"
                  placeholder="Choose Currency"
                  className="w-full h-12 border border-blue px-5 text-[#322626] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col items-start mt-[27px]">
                <label>Currency</label>
                <input
                  type="text"
                  placeholder="Choose Currency"
                  className="w-full h-12 border border-blue px-5 text-[#A5A5A5] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                />
              </div>
              <div className="flex flex-col items-start mt-[27px]">
                <label>Wallet address you’re sending from</label>
                <input
                  type="text"
                  className="w-full h-12 border border-blue px-5 text-[#A5A5A5] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                  placeholder="Enter Wallet Address Here"
                />
              </div>
              <div className="flex flex-col items-start mt-[27px]">
                <label>You will receive</label>
                <input
                  type="text"
                  className="w-full h-12 border border-blue px-5 text-[#A5A5A5] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                  placeholder="UTOP tokens to receive"
                />
              </div>
              <div className="flex flex-col items-start mt-[27px]">
                <label>You will receive</label>
                <input
                  type="text"
                  className="w-full h-12 border border-blue px-5 text-[#A5A5A5] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                  placeholder="Enter wallet address to pay to"
                />
              </div>
              <div className="flex flex-col items-start mt-[27px] w-full">
                <label>Wallet Address to receive token</label>
                <input
                  type="text"
                  className="w-full h-12 border border-blue px-5 text-[#A5A5A5] rounded-[10px]  bg-white font-semibold outline-none focus:ring-[3px] focus:ring-blue focus:ring-opacity-50"
                  placeholder="Enter Wallet Address Here"
                />
              </div>

              <button className="mt-[27px] mx-auto border border-white flex items-center h-12 px-10 sm:text-2xl font-semibold rounded-[10px] outline-none bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white">
                Enter
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </section>
  );
}
