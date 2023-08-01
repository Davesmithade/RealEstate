import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

const Home = () => {

  const [toggleReg, setToggleReg] = useState({
    login: false,
    signUp: false,
  })



  return (
    <div className=' overflow-hidden'>
        <Navbar toggleReg={toggleReg} setToggleReg={setToggleReg}/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home