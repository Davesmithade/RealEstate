import React from "react";
import { BsApple, BsFacebook, BsCheckLg } from "react-icons/bs";
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
  fontSize: "1.05rem",
  paddingLeft: "1rem",
};

const labelStyle = {
  fontSize: "0.9rem",
  fontWeight: "500",
  letterSpacing: "0.05rem",
};

const SignUp = ({ handleCloseReg, regData, setRegData }) => {
  //handleCloseReg is from Navbar.jsx
  //regData/setRegData is from Home.jsx store input data

  function handleEmail(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        email: e.target.value,
      },
    });
  }

  function handlePassword(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        password: e.target.value,
      },
    });
  }

  function handleCheckbox(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        checked: e.target.checked,
      },
    });
  }

  function handleSelect(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        select: e.target.value,
      },
    });
  }

  function handleFirstName(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        firstName: e.target.value,
      },
    });
  }

  function handleLastName(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        lastName: e.target.value,
      },
    });
  }

  function handleZipCode(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        zipCode: e.target.value,
      },
    });
  }

  function handlePhoneNo(e) {
    setRegData({
      ...regData,
      signUp: {
        ...regData.signUp,
        phoneNo: e.target.value,
      },
    });
  }

  return (
    <section className=" bg-[--registration-bg-color] h-screen flex items-center justify-center border-2 border-blue-700">
      <div className=" max-w-[620px] max-h-[900px] overflow-y flex flex-col md:rounded-lg lg:rounded-lg w-full md:w-3/6 lg:w-1/3 h-full md:h-[95%] lg:h-[90%] bg-[--primary-color] pt-7 pb-10 ">
        <i
          onClick={handleCloseReg}
          className=" text-[1.5rem] place-self-end sticky top-0 right-3 cursor-pointer"
        >
          <MdClose />
        </i>
        <h1 className=" text-center text-[1.5rem] font-semibold">
          Welcome To RealEstate
        </h1>

        <div className=" mx-7  w-fit relative before:absolute before:bottom-0 before:left-0 before:border-t-[.3rem] before:border-[--secondary-color] before:w-full before:rounded-t-md">
          <h2 className=" mt-2 w-fit -rounded-b-md px-3 py-3">Sign Up</h2>
        </div>
        <form
          action=""
          className=" border-y border-[--registration-bg-color] pt-4 pb-4 mx-7 px-3 flex flex-col"
        >
          <label htmlFor="email" id="register-email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="register-email"
            style={inputStyle}
            placeholder="Enter email"
            onChange={handleEmail}
            value={regData.signUp.email}
          />

          <label
            htmlFor="password"
            id="register-password"
            style={labelStyle}
            className=" mt-5"
          >
            Password
          </label>
          <input
            type="password"
            id="register-password"
            style={inputStyle}
            placeholder="Create password"
            onChange={handlePassword}
            value={regData.signUp.password}
          />

          <p className=" flex flex-col ml-4 mt-1 text-[.8rem] text-[#666]">
            <span>At least 8 characters </span>
            <span>Mix of letters and numbers </span>
            <span>At least 1 special character </span>
            <span>At least 1 lowercase letter and 1 uppercase letter </span>
          </p>

          <div className="tick mt-5 flex items-center gap-2">
            <input
              type="checkbox"
              id="checkbox"
              className="signup-checkbox-input"
              onChange={handleCheckbox}
              value={regData.signUp.checked}
            />
            <label htmlFor="checkbox" className=" signup-checkbox-label">
              <i>
                <BsCheckLg />
              </i>
            </label>
            <p>I am a landlord or industry professional</p>
          </div>

          <div className="professional-info flex-col">
            <h1>Professional Information</h1>

            <label htmlFor="select" style={labelStyle} className=" mt-5">
              Professional type
            </label>

            <select
              onChange={handleSelect}
              value={regData.signUp.select}
              name="professional type"
              id="professional"
              className=" relative cursor-pointer text-[1rem] border border-[--registration-bg-color] outline-none bg-[--input-bg] text-[#666] py-2 px-2 font-normal"
            >
              <option value="" className=" py-2 text-[#000]">
                Select your category
              </option>
              <option value="Realestate Agent or Broker" className=" py-2 text-[#000]">
                Realestate Agent or Broker
              </option>
              <option value="Mortgage Lender" className=" py-2 text-[#000]">
                Mortgage Lender
              </option>
              <option value="Home Imporvement Services" className=" py-2 text-[#000]">
                Home Imporvement Services
              </option>
              <option value="Landlord" className=" py-2 text-[#000]">
                Landlord
              </option>
              <option value="Photographer" className=" py-2 text-[#000]">
                Photographer
              </option>
              <option value="Home Builder" className=" py-2 text-[#000]">
                Home Builder
              </option>
              <option value="Home Inspector" className=" py-2 text-[#000]">
                Home Inspector
              </option>
              <option value="Property Manager" className=" py-2 text-[#000]">
                Property Manager
              </option>
            </select>

            <div className=" flex gap-4 mt-6">
              <div className="flex flex-col">
                <label htmlFor="fname" style={labelStyle}>
                  First name
                </label>
                <input
                  type="text"
                  id="fname"
                  className=" w-full"
                  placeholder="First name"
                  style={inputStyle}
                  onChange={handleFirstName}
                  value={regData.signUp.firstName}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lname" style={labelStyle}>
                  Last name
                </label>
                <input
                  type="text"
                  id="lname"
                  className=" w-full font-normal"
                  placeholder="Last name"
                  style={inputStyle}
                  onChange={handleLastName}
                  value={regData.signUp.lastName}
                />
              </div>
            </div>

            <label htmlFor="zip/postal" style={labelStyle} className=" mt-5">
              Zip/Postal
            </label>
            <input
              type="number"
              id="zip/postal"
              className=" w-full"
              placeholder="Zip/Postal"
              style={inputStyle}
              onChange={handleZipCode}
              value={regData.signUp.zipCode}
            />

            <label
              htmlFor="phone-number"
              style={labelStyle}
              className="no-spinner mt-5"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone-number"
              style={inputStyle}
              placeholder="Enter your number"
              onChange={handlePhoneNo}
              value={regData.signUp.phoneNo}
            />
          </div>

          <button
            type="submit"
            className="mt-8 text-[1.1rem] font-medium text-[--primary-color] bg-[--accent-color2] py-2 rounded-[.25rem] transition-all hover:bg-[--secondary-color]"
          >
            Submit
          </button>

          <small className=" mt-4 text-center text-[#666]">
            By submitting, I accept RealEstate's
            <span className="ml-1 underline text-[--secondary-color] cursor-pointer hover:no-underline">
              terms of use.
            </span>
          </small>
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

          <button className="rounded-[.25rem] flex items-center justify-center gap-3 px-4 py-[.55rem] text-[.95rem] mt-4 border  border-[--registration-bg-color] text-[#000] hover:bg-[--input-bg] hover:border-[#4366B1] transition-all duration-200 ease">
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

export default SignUp;
