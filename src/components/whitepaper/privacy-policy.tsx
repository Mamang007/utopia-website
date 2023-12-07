export default function PrivacyPolicy() {
  return (
    <section className="border border-1 border-white rounded-[20px] bg-linear-gradient6 py-6 sm:py-16 px-6 sm:px-28 flex flex-col items-center text-center gap-6 sm:gap-10">
      <div className="space-y-5">
        <h2 className="text-xl sm:text-[3.125rem] font-bold text-center">
          Privacy Policy
        </h2>
        <p>Last Updated: March 2023</p>
      </div>

      <a
        className="flex items-center justify-center h-[55px] w-[278px] sm:text-2xl font-semibold rounded-[10px] outline-none border border-white  bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white"
        href="/privacy-policy.docx"
        download
      >
        Download Now
      </a>
    </section>
  );
}
