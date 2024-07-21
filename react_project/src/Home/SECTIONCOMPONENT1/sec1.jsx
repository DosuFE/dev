import React from 'react'
import Sec1Image from './sec1image'

const Sec1 = () => {
  return (
    <>
      <section className='pt-10 md:pt-14'>
        <main>
          <div className='font-lato text-center'>
            <h1 className='text-lg font-semibold tracking-wider md:text-3xl md:uppercase'>
              What You Area Looking For?
            </h1>
            <p className='text-[#808080] pt-2 px-5 text-sm leading-6 font-medium md:text-base
             md:tracking-wider'>
              Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper
              tempor dictum faucibus habitasse.
            </p>
          </div>
          <Sec1Image/>
        </main>
      </section>
    </>
  )
}

export default Sec1