import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const [toggleReg, setToggleReg] = useState({
    login: false,
    signUp: false,
  });

  const [regData, setRegData] = useState({
    login: {
      email: "",
      password: "",
    },
    signUp: {
      email: "",
      password: "",
      checked: false,
      select: "",
      firstName: "",
      lastName: "",
      zipCode: "",
      phoneNo: "",
    },
  });
  //signIn collects & stores data from the SignUp.jsx

  return (
    <div className=" overflow-hidden">
      <Navbar
        toggleReg={toggleReg}
        setToggleReg={setToggleReg}
        regData={regData}
        setRegData={setRegData}
      />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
