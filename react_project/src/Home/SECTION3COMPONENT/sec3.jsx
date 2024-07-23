import React from 'react'
import SliderImage from './sliderimage';

const Sec3 = () => {
  return (
    <>  
      <section>
        <main>
            <div className='font-lato text-center pt-8 md:pt-10'>
              <h1 className='text-lg font-semibold tracking-wider md:text-3xl md:uppercase'>
                EXCLUSIVE LISTINGS
              </h1>
              <p className='text-[#808080] pt-2 px-5 text-sm leading-6 font-medium md:text-base
                md:tracking-wider'>
                Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper 
                tempor dictum faucibus habitasse.
              </p>
            </div>
            <SliderImage/>
        </main>
      </section>
    </>
  )
}

export default  Sec3;