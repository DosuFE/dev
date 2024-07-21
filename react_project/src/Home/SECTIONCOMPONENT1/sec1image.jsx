import React from 'react'
import storey from '../../assets/images/storey.png'
import houseApartment from '../../assets/images/houseApartment.png'
import houseVilla from '../../assets/images/houseVilla.png'
import officeFloor from '../../assets/images/officeFloor.png'


const Sec1Image = () => {
  return (
    <>
        <section className='pt-5 md:pt-10 md:px-12 md:grid md:grid-cols-2 md:justify-items-center md:gap-10 lg:grid-cols-4 
          lg:gap-5 lg:px-10'>
          <img src={storey} alt="Living Home" className='w-full hover:scale-95 md:hover:scale-105 hover:transition-all
           hover:duration-1000
           brightness-75 px-5 md:px-0 hover:brightness-95 md:w-full lg:w-auto'/>
          <img src={houseApartment} alt="House Apartment" className='hidden hover:scale-105 hover:transition-all hover:duration-1000
           brightness-75 hover:brightness-95 md:w-full lg:w-auto md:block'/>
          <img src={houseVilla} alt="House Villa" className='hidden hover:scale-105 hover:transition-all hover:duration-1000
           brightness-75 hover:brightness-95 md:w-full lg:w-auto md:block'/>
          <img src={officeFloor} alt="Office Floor" className='hidden hover:scale-105 hover:transition-all hover:duration-1000
           brightness-75 hover:brightness-95 md:w-full lg:w-auto md:block'/>
        </section> 
    </>
  )
}

export default Sec1Image