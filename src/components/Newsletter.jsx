const Newsletter = () => {
  return (
    <div className="w-11/12 bg-base-100 bg-opacity-50 mx-auto bg-cover rounded-2xl absolute md:-top-40 -top-72 right-2 md:right-12 z-30 p-6 border">
      <div className="py-20 flex flex-col gap-5 items-center bg-gradient-to-tr from-[#b5ade7] via-white to-[#feb47b] rounded-xl">
        <h1 className="md:text-3xl text-xl font-bold text-black md:text-left text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="md:text-lg font-medium md:text-left text-center text-gray-700">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex md:flex-row flex-col gap-5 ">
          <input
            className="md:py-4 p-3 md:px-16 rounded-xl border"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="bg-gradient-to-r from-[#b5ade7] via-white to-[#feb47b] p-4 rounded-xl font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
