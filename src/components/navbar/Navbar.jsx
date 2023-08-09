import React from "react";
import Logo from "../../assets/logo.png";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const ToggleNav = () => {
    isSetNav(!setNav);
  };
  return (
    <>
      <div>
        <div className="navbar flex items-center px-[1rem] h-[10vh] lg:px-[4rem] lg:h-[75px] bg-white">
          <div className="logo flex items-center flex-1">
            <img src={Logo} alt="" width="70px" />
            <h1 className="text-[24px] font-medium">
             Real<span className="text-[#ad7135]">Estate</span>
            </h1>
          </div>
          <div className="nav hidden lg:flex lg:items-center lg:gap-8 font-medium text-[14px] text-[#9e6e3d]">
            <div className="active cursor-pointer">Home</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Buy</div>
            <div className="cursor-pointer">Sell</div>
            <div className="cursor-pointer">Rent</div>
          </div>
          <div className="buttons hidden lg:flex items-center gap-5 font-medium ml-12 text-white">
            <div className="py-2 px-7 bg-[#fa9e427f] rounded-[6px] cursor-pointer">
              Log In
            </div>
            <div className="py-2 px-6 bg-[#9e6e3d] rounded-[6px] cursor-pointer">
              Sign Up
            </div>
          </div>

          <div className="flex lg:hidden">
          <BiMenu
                className="text-[#ad7135] text-[45px]"
                onClick={ToggleNav}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
