export default function Copyright() {
  return (
    <section className="pb-16 bg-[#2E256E] relative w-screen -ml-[50vw] left-1/2 px-6 md:px-10 lg:pl-[5.6%] lg:pr-[13.1%]">
      <div className="border-t border-t-white pt-6">
        <div className="flex flex-col sm:flex-row">
          <div className="w-[40%]">
            <p className="text-sm">© 2023 Utopia Inc. All rights reserved.</p>
          </div>

          <div className="flex-1 py-8 sm:py-0">
            <p className="text-justify text-sm">
              Disclaimer: This website offers general investment information. While we strive for accuracy, it's not
guaranteed. Consult a financial professional for personalized guidance. Your trust matters to us..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
