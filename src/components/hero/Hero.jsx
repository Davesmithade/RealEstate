import React, { useState } from "react";
import Locationprops from "../locationprops/Locationprops";
import { location } from "../data";
import img1 from "../../assets/poolVilla.jpg";
import img2 from "../../assets/charmmingHouse.jpg";
import img3 from "../../assets/isolatedHouse.jpg";
import img4 from "../../assets/landscapeCity.jpg";

const Hero = () => {
  const allBgImgs = [img1, img2, img3, img4];
  const [curImg, SetcurImg] = useState(0);
 
    const interval = setInterval(() => {
      switch (curImg) {
        case 0:
          SetcurImg(1)
          clearInterval(interval);
          break;
        case 1:
          SetcurImg(2)
          clearInterval(interval);
          break;
        case 2:
          SetcurImg(3)
          clearInterval(interval);
          break;
        case 3:
          SetcurImg(0)
          clearInterval(interval)
          break;
        default:
          SetcurImg(0)
          clearInterval(interval);
          break;
      }
    }, 4500);


  


  return (
    <>
      <div
        style={{ backgroundImage: "url(" + allBgImgs[curImg] + ")"}}
        className="hero duration-700 justify-start pt-16 items-start h-[90vh] md:h-full lg:h-full w-full px-[1rem] lg:pt-24 lg:pb-24 flex flex-col lg:justify-center lg:items-center text-center text-white leading-[1.5rem]"
      >
        <div className="text-[28px] leading-[2.7rem] lg:text-[40px] lg:leading-[50px] font-semibold lg:w-[745px]">
        We Are Where You Want To Live. Make Yourself And Find Your Place
        </div>
        <div>
          <p className="lg:w-[839px] text-[13px] lg:text-[16px] pb-[30px] lg:pb-[50px] pt-[15px] font-normal">
            Life is rich and live where you love. Browse through a wide
            selection of restaurants and effortlessly find the perfect table for
            any occasion, whether it's a romantic dinner for two, a birthday
            celebration with friends, or a business meeting with colleagues.
          </p>
        </div>

        <div className="flex items-center gap-10 justify-center text-center">
          <div className="featured text-[12px] lg:text-[14px]">
            FEATURED PROPERTIES
          </div>
          <div className="featured text-[12px] lg:text-[14px]">
            PAST TRANSACTIONS
          </div>
        </div>

        <div className="bg-[#fa9e42de] mt-8 rounded-lg mx-auto">
          <button className="py-3 p-12">Send a Message</button>
        </div>
      </div>

      <div className="mx-[1rem] mt-8 overflow-x-scroll flex h-[50vh] gap-5 pb-10 items-center">
        {location.map((data, index) => (
          <Locationprops key={index} img={data.images} place={data.locations} />
        ))}
      </div>
    </>
  );
};

export default Hero;
