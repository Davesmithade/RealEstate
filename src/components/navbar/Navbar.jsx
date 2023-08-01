import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { BiMenu } from "react-icons/bi";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signUp/SignUp";

const Navbar = ({ toggleReg, setToggleReg }) => {
  const ToggleNav = () => {
    isSetNav(!setNav);
  };

  function handleShowLogin() {
    if (toggleReg.signUp) {
      setToggleReg({
        ...toggleReg,
        signUp: !toggleReg.signUp,
      });
    }

    setToggleReg({
      ...toggleReg,
      login: !toggleReg.login,
    });

    console.log(toggleReg.login);
  }

  function closeRegistration() {
    setToggleReg({
      login: false,
      signUp: false,
    });
  }

  function handleShowSignUp() {
    if (toggleReg.login) {
      setToggleReg({
        ...toggleReg,
        login: !toggleReg.login,
      });
    }

    setToggleReg({
      ...toggleReg,
      signUp: !toggleReg.signUp,
    });

    console.log(toggleReg.signUp);
  }

  function renderRegistration() {
    if (toggleReg.login) {
      return <Login handleCloseReg={closeRegistration} />;
    } else if (toggleReg.signUp) {
      return <SignUp handleCloseReg={closeRegistration} />;
    }
  }

  return (
    <>
      <div>
        <div className="navbar flex items-center px-[1rem] h-[10vh] lg:px-[4rem] lg:h-[75px] bg-[--primary-color]">
          <div className="logo flex items-center flex-1">
            <img src={Logo} alt="" width="70px" />
            <h1 className="text-[24px] font-medium">
              Real<span className="text-[--accent-color2]">Estate</span>
            </h1>
          </div>
          <div className="nav hidden lg:flex lg:items-center lg:gap-8 font-medium text-[14px] text-[--secondary-color]">
            <div className="active cursor-pointer">Home</div>
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Buy</div>
            <div className="cursor-pointer">Sell</div>
            <div className="cursor-pointer">Rent</div>
          </div>
          <div className="buttons hidden lg:flex items-center gap-5 font-medium ml-12 text-[--primary-color]">
            <div
              onClick={handleShowLogin}
              className="py-2 px-7 bg-[--accent-color1] rounded-[6px] cursor-pointer"
            >
              Log In
            </div>
            <div
              onClick={handleShowSignUp}
              className="py-2 px-6 bg-[--secondary-color] rounded-[6px] cursor-pointer"
            >
              Sign Up
            </div>
          </div>

          <div className="flex lg:hidden">
            <BiMenu
              className="text-[#ad7135] text-[45px]"
              onClick={ToggleNav}
            />
          </div>

          <div className=" absolute top-0 left-0 w-full z-[1000]">
            {renderRegistration()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
