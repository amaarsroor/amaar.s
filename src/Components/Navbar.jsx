import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='w-full h-25 fixed  top-0 left-0 right-0 z-10 shadow-md
                    bg-gradient-to-l from-purple-200 via-white to-blue-200 
                    flex items-center justify-between px-4 py-8 backdrop-blur-3xl 
                    backdrop:backdrop-blur-3xl'>

      <div className=' text-4xl font-bold text-teal-700 cursor-default'>Amaar.s</div>

      <ul className='hidden md:flex items-center gap-6'>
        <a className='text-xl text-black hover:text-teal-600 duration-300' href="#home">Home</a>
        <a className='text-xl text-black hover:text-teal-600 duration-300' href="#about">About</a>
        <a className='text-xl text-black hover:text-teal-600 duration-300' href="#skills">Skills</a>
        <a className='text-xl text-black hover:text-teal-600 duration-300' href="#projects">Projects</a>
      </ul>

      <button className='hidden md:block bg-teal-600 text-black px-8 py-2 rounded-full hover:bg-teal-700 duration-300'>
        <a href="#contact">CONTACT</a>
      </button>

      <FaBars onClick={() => setMobileMenu(true)} className='md:hidden' />

      {/* Mobile Menu */}

      <div className={`fixed top-0 right-0 w-full bg-white overflow-hidden transition-all duration-500 ease z-50
         ${mobileMenu ? "h-screen opacity-100" : "h-0 opacity-0"}`
      }>
        <div className='flex p-8  justify-end'>
          <AiOutlineClose onClick={() => setMobileMenu(false)} size={30} />
        </div>
        <ul className=' flex flex-col  items-center px-3  gap-3'>
          <a onClick={() => setMobileMenu(false)} className='text-xl text-black hover:text-teal-600 duration-300 transition-transform' href="#home">Home</a>
          <a onClick={() => setMobileMenu(false)} className='text-xl text-black hover:text-teal-600 duration-300 transition-transform' href="#projects">Projects</a>
          <a onClick={() => setMobileMenu(false)} className='text-xl text-black hover:text-teal-600 duration-300 transition-transform' href="#about">About</a>
          <a onClick={() => setMobileMenu(false)} className='text-xl text-black hover:text-teal-600 duration-300 transition-transform' href="#skills">Skills</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
