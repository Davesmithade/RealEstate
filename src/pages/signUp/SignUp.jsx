import React from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdClose } from "react-icons/md";

const inputStyle = {
  marginTop: "0.4rem",
  background: "var(--input-bg)",
  color: "#464846",
  borderRadius: "0.25rem",
  outline: "none",
  border: "1px solid var(--registration-bg-color)",
  height: "2.9rem",
  fontSize: "1.1rem",
  paddingLeft: "1rem",
};

const labelStyle = {
  fontSize: "0.9rem",
  fontWeight: "500",
  letterSpacing: "0.05rem",
};

const SignUp = () => {
  return (
    <section className="max-w bg-[--registration-bg-color] h-screen flex items-center justify-center border-2 border-blue-700">
      <div className="overflow-y flex flex-col md:rounded-lg lg:rounded-lg w-full md:w-3/6 lg:w-1/3 h-full md:h-[95%] lg:h-[90%] bg-[--primary-color] pt-7 pb-10 ">
        <i className=" text-[1.5rem] place-self-end sticky top-0 right-3 cursor-pointer">
          <MdClose />
        </i>
        <h1 className=" text-center lg:text-[1.5rem] lg:font-semibold">
          Welcome To RealEstate
        </h1>

        <div className=" mx-7  w-fit relative before:absolute before:bottom-0 before:left-0 before:border-t-[.3rem] before:border-[--secondary-color] before:w-full before:rounded-t-md">
          <h2 className=" mt-2 w-fit -rounded-b-md px-3 py-3">Sign Up</h2>
        </div>
        <form
          action=""
          className=" border-y border-[--registration-bg-color] pt-4 pb-4 mx-7 px-3 flex flex-col"
        >
          <label htmlFor="email" id="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            style={inputStyle}
            placeholder="Enter email"
          />

          <label
            htmlFor="password"
            id="password"
            style={labelStyle}
            className=" mt-5"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            style={inputStyle}
            placeholder="Create password"
          />

          <p className=" flex flex-col ml-4 mt-1 text-[.8rem] text-[#666]">
            <span>At least 8 characters </span>
            <span>Mix of letters and numbers </span>
            <span>At least 1 special character </span>
            <span>At least 1 lowercase letter and 1 uppercase letter </span>
          </p>

          <div className=" mt-5 flex gap-2">
            <label htmlFor="checkbox" className=" signup-checkbox-label">

            </label>
            <input type="checkbox" id="checkbox" className=" signup-checkbox-input" />
            <p>I am a landlord or industry professional</p>
          </div>

          <button
            type="submit"
            className="mt-8 text-[1.1rem] font-medium text-[--primary-color] bg-[--accent-color2] py-2 rounded-[.25rem] transition-all hover:bg-[--secondary-color]"
          >
            Submit
          </button>

          <small className=" mt-4 text-center text-[#666]">By submitting, I accept RealEstate's <span className=" underline text-[--secondary-color] cursor-pointer hover:no-underline">terms of use.</span></small>
        </form>

        <h2 className=" text-center text-[1.05rem] mt-4">Or connect with:</h2>

        <div className=" mx-7 flex flex-col">
          <button className="rounded-[.25rem] flex items-center px-4 py-[.65rem] text-[.95rem] mt-4 border border-[#000] bg-[#000] text-[--primary-color] hover:bg-transparent hover:text-[#000]">
            <i className=" text-[1.1rem]">
              <BsApple />
            </i>
            <p className="w-full text-center">Continue with Apple</p>
          </button>

          <button className="rounded-[.25rem] flex items-center px-4 py-[.55rem] text-[.95rem] mt-4 border border-[#1877F2] bg-[#1877F2] text-[--primary-color] hover:bg-transparent hover:text-[#4366B1] ">
            <i className=" text-[1.2rem]">
              <BsFacebook />
            </i>
            <p className="w-full text-center">Continue with Facebook</p>
          </button>

          <button className="rounded-[.25rem] flex items-center px-4 py-[.55rem] text-[.95rem] mt-4 border border-[--registration-bg-color] text-[#000] hover:bg-[--input-bg] hover:border-[#4366B1] transition-all duration-200 ease">
            <i className=" text-[1.2rem]">
              <FcGoogle />
            </i>
            <p className="w-full text-center">Continue with Google</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
