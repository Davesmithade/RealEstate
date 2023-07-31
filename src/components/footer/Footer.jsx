import React from "react";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/facebookicon.svg";
import Instagram from "../../assets/instagramicon.svg";
import Discord from "../../assets/discordicon.svg";
import Twitter from "../../assets/twittericon.svg";

const Footer = () => {
  return (
    <>
      <div className="footerlg min-h-max w-full bg-[#2B2B2B] gap-8 text-[#FFFFFF] px-8 pt-12 lg:hidden">
        <div className=" grid grid-cols-1 gap-5">
          <div className="logo flex items-center flex-1">
            <img src={Logo} alt="" width="80px"/>
          </div>
          <div className="paragraph">
            <p>
              With its innovative use of technology, Reisty is revolutionizing
              the hospitality industry by providing cutting-edge solutions to
              some of the world's finest dining establishments.
            </p>
          </div>
          <div className="socials flex gap-7">
            <div className="facebook ">
              <img
                src={Facebook}
                alt=""
                className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
              />
            </div>
            <div className="facebook">
              <img
                src={Instagram}
                alt=""
                className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
              />
            </div>
            <div className="facebook">
              <img
                src={Discord}
                alt=""
                className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
              />
            </div>
            <div className="facebook">
              <img
                src={Twitter}
                alt=""
                className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="w-[100%] grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="">
              <ul className="grid gap-3">
                <li className="text-[20px] font-medium">Discover</li>
                <li className="border-b-2 w-[35px] border-white"></li>
                <li className="text-[16px]">Trending Housing</li>
                <li className="text-[16px]">Nearby Estate</li>
                <li className="text-[16px]">New on RealEstate</li>
                <li className="text-[16px]">GoodToGo</li>
              </ul>
            </div>

            <div className="">
              <ul className="grid gap-3">
                <li className="text-[20px] font-medium">About</li>
                <li className="border-b-2 w-[35px] border-white"></li>
                <li className="text-[16px]">About us</li>
                <li className="text-[16px]">Terms and Conditions</li>
                <li className="text-[16px]">Privacy policy</li>
              </ul>
            </div>

            <div className="">
              <ul className="grid gap-3">
                <li className="text-[20px] font-medium">Top Housings</li>
                <li className="border-b-2 w-[35px] border-white"></li>
                <li className="text-[16px]">5 star Estates</li>
                <li className="text-[16px]">Rooftop</li>
              </ul>
            </div>

            <div className="">
              <ul className="grid gap-3">
                <li className="text-[20px] font-medium">For Housing</li>
                <li className="border-b-2 w-[35px] border-white"></li>
                <li className="text-[16px]">RealEstate Overview</li>
                <li className="text-[16px]">Plans and Pricing</li>
                <li className="text-[16px]">Features</li>
                <li className="text-[16px]">Help Desk</li>
              </ul>
            </div>
          </div>

          <div className=" flex justify-center mt-14 text-center  border-white  border-t-[1px]">
            <div className="grid lg:flex justify-between pt-3 text-[10px]">
              <div className="flex justify-center text-center">
                <p>&copy; 2023 RealEstate. All rights reserved.</p>
              </div>
              <div className="flex justify-center pb-6 gap-3">
                <p>Global Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerlg min-h-max w-[100%] bg-[#2B2B2B] gap-8 text-[#FFFFFF] px-16 hidden lg:block">
        <div className="footerTop grid grid-cols-2 lg:flex gap-16 py-10 w-[100%]">
          <div className="h-[200px] w-[33%] grid grid-cols-1 gap-5">
            <div className="logo">
              <img src={Logo} alt="" width="80px"/>
            </div>
            <div className="paragraph">
              <p>
                With its innovative use of technology, RealEstate is revolutionizing
                the hospitality industry by providing cutting-edge solutions to
                some of the world's finest housing establishments.
              </p>
            </div>
            <div className="socials grid grid-cols-2 lg:flex gap-5 items-center">
              <div className="facebook ">
                <img
                  src={Facebook}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Instagram}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Discord}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
                />
              </div>
              <div className="facebook">
                <img
                  src={Twitter}
                  alt=""
                  className="bg-[#838080] h-[30px] w-[30px] p-2 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="w-[63%]">
            <div className="w-[100%] grid grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="">
                <ul className="grid gap-3">
                  <li className="text-[20px] font-medium">Discover</li>
                  <li className="border-b-2 w-[35px] border-white"></li>
                  <li className="text-[16px]">Trending Estates</li>
                  <li className="text-[16px]">Nearby Estates</li>
                  <li className="text-[16px]">New on RealEstate</li>
                  <li className="text-[16px]">GoodToGo</li>
                </ul>
              </div>

              <div className="">
                <ul className="grid gap-3">
                  <li className="text-[20px] font-medium">About</li>
                  <li className="border-b-2 w-[35px] border-white"></li>
                  <li className="text-[16px]">About us</li>
                  <li className="text-[16px]">Terms and Conditions</li>
                  <li className="text-[16px]">Privacy policy</li>
                </ul>
              </div>

              <div className="">
                <ul className="grid gap-3">
                  <li className="text-[20px] font-medium">Top Housings</li>
                  <li className="border-b-2 w-[35px] border-white"></li>
                  <li className="text-[16px]">5 star Estates</li>
                  <li className="text-[16px]">Rooftop</li>
                </ul>
              </div>

              <div className="">
                <ul className="grid gap-3">
                  <li className="text-[20px] font-medium">For Restuarants</li>
                  <li className="border-b-2 w-[35px] border-white"></li>
                  <li className="text-[16px]">RealEstate Overview</li>
                  <li className="text-[16px]">Plans and Pricing</li>
                  <li className="text-[16px]">Features</li>
                  <li className="text-[16px]">Help Desk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbottom lg:pb-8 mt-16 border-white  border-t-[1px]">
          <div className="grid lg:flex justify-between pt-3 text-[14px]">
            <div>
              <p>&copy; 2023 RealEstate. All rights reserved.</p>
            </div>
            <div className="flex gap-3">
              <p>Global Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
