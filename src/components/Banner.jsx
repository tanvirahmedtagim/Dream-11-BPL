/* eslint-disable react/prop-types */
import banner from "../assets/bg-shadow.png";
import img from "../assets/banner-main.png";
const Banner = ({ handleClaimFreeCredit }) => {
  return (
    <div
      className="w-11/12  mx-auto bg-cover bg-black flex flex-col lg:py-[72px] text-center items-center"
      style={{
        borderRadius: "1rem",
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="lg:w-80 w-56 lg:pt-0 pt-4">
        <img className="w-full" src={img} alt="" />
      </div>
      <h1 className="md:text-[40px] font-bold text-white lg:mt-3 ">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="md:text-[24px] font-medium text-gray-300 m-3">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="lg:pb-0 pb-4">
        
        <button
          onClick={() => handleClaimFreeCredit(1800000)}
          className="btn mt-3 hover:bg-[#E7FE29] bg-[#E7FE29] outline outline-offset-4 hover:outline-[#E7FE29]"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
