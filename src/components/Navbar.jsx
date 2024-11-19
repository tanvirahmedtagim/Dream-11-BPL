/* eslint-disable react/prop-types */
import logo from "../assets/logo-footer.png";
import coin from "../assets/coin.png";
const Navbar = ({ price }) => {
  return (
    <div className="z-50 sticky top-0 bg-base-100 bg-opacity-80">
      <div className="md:w-11/12 mx-auto navbar  bg-opacity-80 pb-6 sticky top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>
          <img className="w-16 h-16" src={logo} alt="" />
        </div>
        <div className="navbar-end lg:flex gap-12 lg:w-4/5">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:flex gap-12 items-start justify-start ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>

          <a className="btn">
            <span>{price}</span>Coin <img src={coin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
