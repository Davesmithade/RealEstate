import React from 'react'
import Locationprops from '../locationprops/Locationprops'
import { location } from '../data'

const Hero = () => {
  return (
   <>
    <div className='hero justify-start pt-16 items-start h-[90vh] md:h-full lg:h-full w-full px-[1rem] lg:pt-24 lg:pb-24 flex flex-col lg:justify-center lg:items-center text-center text-white leading-[1.5rem]'>
      <div className='text-[28px] leading-[2.7rem] lg:text-[40px] lg:leading-[50px] font-semibold lg:w-[745px]'>We Are Where You Want To Live. Make Yourself And Find Your Place</div>
      <div>
        <p className='lg:w-[839px] text-[13px] lg:text-[16px] pb-[30px] lg:pb-[50px] pt-[15px] font-normal'>Life is rich and live where you love.
        Browse through a wide selection of restaurants and effortlessly find the perfect table for any occasion, whether it's a romantic dinner for two, a birthday celebration with friends, or a business meeting with colleagues.
        </p>
      </div>

      <div className='flex items-center gap-10 justify-center text-center'>
        <div className='featured text-[12px] lg:text-[14px]'>FEATURED PROPERTIES</div>
        <div className='featured text-[12px] lg:text-[14px]'>PAST TRANSACTIONS</div>
      </div>

      <div className='bg-[#fa9e42de] mt-8 rounded-lg mx-auto'>
        <button className='py-3 p-12'>Send a Message</button>
      </div>
      </div>

      <div className='mx-[1rem] mt-8 overflow-x-scroll min-w-max flex h-[50vh]'>
      {location.map((data, index) => (
  <Locationprops key={index} img={data.images} place={data.locations} />
))}

      </div>

      
   </>
  )
}

export default Hero