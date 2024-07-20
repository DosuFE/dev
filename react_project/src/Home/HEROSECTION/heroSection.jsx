import React from 'react'
import HeroImageSection from './heroImageSection';

const HeroSection = () => {
  return (
    <>
      <section className='font-lato'>
        <main className='font-lato flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
          <HeroImageSection/>
          <div className='text-center  md:text-start'>
            <h1 className='text-3xl font-semibold pt-4 px-10 leading-10'>
              Trusted Real Estate Property for you
            </h1> 
            <p className='text-lg text-[#808080] font-normal pt-3 px-3'>
              Looking for your dream house or property. Search here and select 
              your best one from more than 1 million listing
            </p>
          </div>
        </main>
      </section>
    </>
  )
}

export default HeroSection;