import React from "react";
const Locationprops = ({ img, place }) => {
  return (
    <div
      className="min-w-[310px] rounded-md bg-cover hover:scale-[1.07] duration-150 h-full  text-white font-bold bg-[#00000040] flex flex-col justify-end"
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <h1 className=" bg-[#00000040] p-2">{place}</h1>
    </div>
  );
};

export default Locationprops;
