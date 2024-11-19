import footerLogo from "../assets/logo-footer.png";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-black relative pt-[240px]">
      <div className="w-11/12 mx-auto ">
        <div className=" flex justify-center items-center pb-16">
          <img src={footerLogo} alt="" />
        </div>
        <div className="md:grid md:grid-cols-3 pb-[72px] gap-10 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-3 w-2/3 md:text-left text-center">
            <h3 className="text-white text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="pl-2 list-disc list-inside flex flex-col gap-3 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:text-left text-center ">
            <h3 className="text-white text-lg font-semibold">Subscribe</h3>
            <p className="text-gray-400 lg:w-2/3">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="">
              <input
                className="lg:p-4 p-2 rounded-sm lg:rounded-l-xl"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="bg-gradient-to-r from-blue-300 via-orange-300 to-pink-300 lg:p-4  rounded-sm p-2 md:rounded-r-xl lg:mt-0 mt-2 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 text-center border-t border-gray-400">
        <h1 className="text-gray-300">
          @2024 Your Company All Rights Reserved.
        </h1>
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Footer;
