import React from 'react'
import HeroImageSection from './heroImageSection';
import Button from './button';

const HeroSection = () => {
  return (
    <>
      <section className='font-lato md:pl-12 lg:pl-16'>
        <main className='font-lato flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
          <HeroImageSection/>
          <div className='text-center md:text-start'>
            <h1 className='text-3xl font-semibold pt-4 px-10 leading-10 md:px-0 lg:max-w-2xl lg:text-6xl'>
              Trusted Real Estate Property for you
            </h1> 
            <p className='text-lg text-[#808080] font-normal pt-3 px-3 md:max-w-3xl lg:max-w-xl'>
              Looking for your dream house or property. Search here and select 
              your best one from more than 1 million listing
            </p>
            <Button firstbutton='Discover More' secondbutton='Learn More'/>

            <div className='py-2 mx-4 font-medium md:font-semibold flex items-center justify-center 
             bg-slate-50 shadow-md shadow-slate-400 gap-5 sm:gap-10 lg:w-[600px] md:mx-0'>
              <div className='font-lato flex flex-col items-center'>
                <p className='font-lato text-sm md:text-[12px] lg:text-lg'>35+</p>
                <p className='font-lato text-[8px] md:text-[10px]'>YEARS IN BUSINESS</p>
              </div>

              <div className='font-lato flex flex-col items-center'>
                <p className='font-lato text-sm  md:text-[12px] lg:text-lg'>200+M</p>
                <p className='font-lato text-[8px] md:text-[10px]'>DEAL VOLUME IN PAST 12 MONTHS</p>
              </div>

              <div className='font-lato flex flex-col items-center'>
                <p className='font-lato text-sm  md:text-[12px] lg:text-lg'>$1B+</p>
                <p className='font-lato text-[8px] md:text-[10px]'>IN TOTAL SALES</p>
              </div>
            </div>
          </div>  
        </main>
      </section>
    </>
  )
}

export default HeroSection;