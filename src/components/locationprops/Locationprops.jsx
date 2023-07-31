import React from "react";
const Locationprops = ({ img, place }) => {
  return (
    <div
      className="w-[310px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        border: "2px solid red",
      }}
    >
      <h1>{place}</h1>
    </div>
  );
};

export default Locationprops;
