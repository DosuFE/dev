import React from 'react'
import Sec2image from './sec2image'

const Sec2 = () => {
  return (
    <>
        <section>
          <main className='pt-8 md:pt-16'>
            <div className='hidden font-lato text-center md:block'>
              <h1 className='text-lg font-semibold tracking-wider md:text-3xl md:uppercase'>
                Who We Are?
              </h1>
              <p className='text-[#808080] pt-2 px-5 text-sm leading-6 font-medium md:text-base
              md:tracking-wider'>
                Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper 
                tempor dictum faucibus habitasse.
              </p>
            </div>

            <div className='flex flex-col items-center justify-center space-y-5 md:flex-row 
             md:justify-between md:px-12'>
              <div className='font-lato'>
                <h2 className='font-medium text-lg text-center md:text-start md:text-xl md:max-w-80 
                 lg:text-3xl'>
                  MEET THE WESTON REAL ESTATE
                </h2>
                <p className='text-center text-sm font-normal text-[#808080] leading-6 pt-2 px-4 md:px-0
                 md:text-start md:max-w-xl lg:max-w-2xl'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu est nisl. Tincidunt molestie elit quisque nulla. Mi sed est imperdiet ipsum quam pellentesque cras blandit urna. Consequat odio non vel habitant pellentesque egestas. Nam libero, accumsan amet quam ut orci tristique risus, parturient.
                </p>

                <p className='text-center text-sm font-normal text-[#808080] leading-6
                  pt-5 px-4 md:px-0 md:text-start md:max-w-xl lg:max-w-2xl'>
                  Imperdiet mauris duis ut morbi non, a quam vehicula. Condimentum risus donec varius consectetur accumsan, metus. Sit at nec facilisis blandit sed adipiscing mauris tortor tincidunt. Viverra commodo id a dapibus enim. Felis, volutpat, diam duis posuere scelerisque mauris, venenatis nunc. Odio diam et, et a condimentum sed morbi. Vitae diam, sed suspendisse ullamcorper risus sit. Ac viverra urna gravida sed. Cursus auctor donec blandit neque, et. Id purus in suscipit orci.
                  Eget pharetra nisl vel arcu. Aliquam lorem praesent lectus eget sapien.
                </p>

                <button className='hidden md:block mt-4 uppercase border-2 border-black py-2 px-3 
                text-sm'>
                  Learn More
                </button>
              </div>
              <Sec2image/>
            </div>
          </main>
        </section>
    </>
  )
}

export default Sec2