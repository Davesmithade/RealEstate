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

const Login = ({handleCloseReg}) => {
  return (
    <section className=" bg-[--registration-bg-color] h-screen flex items-center justify-center border-2 border-blue-700">
      <div className=" max-w-[620px] max-h-[900px] overflow-y flex flex-col rounded-lg w-1/3 h-[90%] bg-[--primary-color] pt-7 pb-10 ">
        <i onClick={handleCloseReg} className=" text-[1.5rem] place-self-end sticky top-0 right-3 cursor-pointer">
          <MdClose />
        </i>
        <h1 className=" text-center text-[1.5rem] font-semibold">
          Welcome To RealEstate
        </h1>

        <div className=" mx-7  w-fit relative before:absolute before:bottom-0 before:left-0 before:border-t-[.3rem] before:border-[--secondary-color] before:w-full before:rounded-t-md">
          <h2 className=" mt-2 w-fit -rounded-b-md px-3 py-3">Sign In</h2>
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
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="mt-8 text-[1.1rem] font-medium text-[--primary-color] bg-[--accent-color2] py-2 rounded-[.25rem] transition-all hover:bg-[--secondary-color]"
          >
            Sign In
          </button>

          <h1 className=" text-center mt-3 font-medium text-[1.1rem] text-[--secondary-color] cursor-pointer hover:underline">
            Forgot your password?
          </h1>
        </form>

        <h2 className=" text-center text-[1.05rem] mt-4">Or connect with:</h2>

        <div className=" mx-7 flex flex-col">
          <button className="rounded-[.25rem] flex items-center justify-center gap-3 px-4 py-[.65rem] text-[.95rem] mt-4 border border-[#000] bg-[#000] text-[--primary-color] hover:bg-transparent hover:text-[#000]">
            <i className=" text-[1.1rem]">
              <BsApple />
            </i>
            <p>Continue with Apple</p>
          </button>

          <button className="rounded-[.25rem] flex items-center justify-center gap-3 px-4 py-[.55rem] text-[.95rem] mt-4 border border-[#1877F2] bg-[#1877F2] text-[--primary-color] hover:bg-transparent hover:text-[#4366B1] ">
            <i className=" text-[1.2rem]">
              <BsFacebook />
            </i>
            <p>Continue with Facebook</p>
          </button>

          <button className="rounded-[.25rem] flex items-center justify-center gap-3 px-4 py-[.55rem] text-[.95rem] mt-4 border border-[--registration-bg-color] text-[#000] hover:bg-[--input-bg] hover:border-[#4366B1] transition-all duration-200 ease">
            <i className=" text-[1.2rem]">
              <FcGoogle />
            </i>
            <p>Continue with Google</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
