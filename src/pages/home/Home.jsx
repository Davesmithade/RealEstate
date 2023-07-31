import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
        <Navbar/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home