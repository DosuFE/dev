import React from 'react'
import WESTON from '../assets/images/WESTON.png'
import { BiMenuAltLeft } from "react-icons/bi";

  const Header = () => {
    
  return (
    <>
      <header className='px-5 py-3 md:px-12 lg:px-16 md:py-6'>
        <nav className='flex items-center justify-between'>
          
            <img src={WESTON} alt="Weston Logo" />
            <BiMenuAltLeft
            className='text-4xl font-bold cursor-pointer hover:scale-110 hover:transition-all 
            hover:duration-700 md:hidden'/>
          

          <ul className='hidden z-50 md:flex items-center md:space-x-10 lg:space-x-14'>
            <li className='border-b-2 border-black'><a href="" className='font-lato font-medium hover:text-slate-800'>Home</a></li>
            <li><a href="" className='font-lato font-medium hover:text-slate-800'>About</a></li>
            <li><a href="" className='font-lato font-medium hover:text-slate-800'>Properties</a></li>
            <li><a href="" className='font-lato font-medium hover:text-slate-800'>Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;