import React from 'react'
import Sec4Image from './sec4image'

const Sec4 = () => {
  return (
    <>
        <section>
            <main>
                <div className='font-lato text-center pb-8 md:pt-10'>
                    <h1 className='text-lg font-semibold tracking-wider md:text-3xl md:uppercase'>
                        AREAS OF EXPERTISE
                    </h1>
                    <p className='text-[#808080] pt-2 px-5 text-sm leading-6 font-medium md:text-base
                        md:tracking-wider'>
                        Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse.
                    </p>
                </div>
                <Sec4Image/>
            </main>
        </section>
    </>
  )
}

export default Sec4