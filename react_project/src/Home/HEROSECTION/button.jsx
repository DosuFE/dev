import React from 'react'

const Button = (props) => {
  return (
    <div className='font-lato pl-4 py-5 flex justify-start space-x-2 sm:space-x-5 sm:items-center sm:justify-center md:justify-start md:pl-0'>
      <button className='bg-black text-white px-7 py-3 font-medium tracking-wider
       hover:bg-white hover:text-black hover:transition-all hover:duration-1000 sm:px-8 md:px-6'>
        {props.firstbutton}
      </button>
      <button className='px-4 py-3 font-medium tracking-wider hover:bg-black hover:text-white
       hover:transition-all hover:duration-1000 sm:px-8 md:px-10'>
        {props.secondbutton}
      </button>
    </div>
  )
}

export default Button