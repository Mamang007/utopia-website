import Card from "../card";

export default function GetInTouch() {
  return (
    <section className="mt-10 sm:mt-28 flex flex-col gap-11 sm:flex-row">
      <div className="sm:w-[56%]">
        <Card>
          <h3 className="text-2xl sm:text-[2.5rem] font-semibold">
            Get in touch
          </h3>
          <p className="sm:text-xl">Send a Message</p>

          <form className="mt-6">
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-10 border-b border-b-white bg-transparent px-6 text-sm text-white"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full h-10 border-b border-b-white bg-transparent px-6 text-sm text-white"
              />
            </div>

            <div className="flex gap-6 mt-8">
              <select
                placeholder="Country Code"
                className="w-full h-10 border-b border-b-white bg-transparent px-6 text-sm text-white"
              >
                <option value="1">+1</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full h-10 border-b border-b-white bg-transparent px-6 text-sm text-white"
              />
            </div>

            <div className="mt-10">
              <textarea
                placeholder="Message"
                className="w-full h-16 border-b border-b-white bg-transparent px-6 text-sm text-white"
              />
            </div>
            <button className="mt-20 even:h-[55px] w-[278px] sm:text-2xl font-semibold rounded-[10px] outline-none border border-white  bg-linear-gradient3 hover:opacity-90 transition-all duration-200 ease-in-out focus:outline-none focus:ring-[3px] focus:ring-white">
              Submit
            </button>
          </form>
        </Card>
      </div>

      <div className="flex-1">
        <Card>
          <h3 className="text-xl sm:text-3xl font-semibold">
            Reach out to us for inquiries, partnerships, or support
          </h3>

          <h3 className="text-xl sm:text-3xl font-semibold mt-7">Email Us</h3>
          <p className="text-sm">
            Email is the most professional way to reach us.
          </p>
          <p className="text-lg text-blue mt-3">support@utopia.stream</p>

          <h3 className="text-xl sm:text-3xl font-semibold mt-7" >
          <a>
            Chat with Us
            </a>
          </h3>
          
          <p className="text-sm">
            Our chat team is available 24/7 at your disposal.
          </p>
          <p className="text-lg text-blue mt-3">Chat Now</p>
        </Card>
      </div>
    </section>
  );
}
