import React, { useState } from 'react'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    // <div className='bg-primary h-14 rounded-2xl mx-16 mt-9 flex items-center justify-between px-8 shadow-deep'>
    //   <img src='/assets/logo.svg' alt='brand-logo' />
    //   <div className='flex items-center gap-8'>
    //     <p className='text-white text-xs font-medium'>Find Work</p>
    //     <p className='text-white text-xs font-medium'>Find Talent</p>
    //     <p className='text-white text-xs font-medium'>Articles</p>
    //     <p className='text-white text-xs font-medium'>About Us</p>
    //     <p className='text-white text-xs font-medium'>Contact Us</p>
    //   </div>
    //   <div className='flex items-center gap-8'>
    //     <p className='text-white text-xs font-medium'>Log In</p>
    //     <div className='rounded-2xl px-8 py-4 bg-white'>
    //       <p className='text-secondary text-xs font-medium'>Join Now</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className='bg-primary h-14 rounded-2xl mx-4 md:mx-16 mt-9 flex items-center justify-between px-4 md:px-8 shadow-deep'>
        <img src='/assets/logo.svg' alt='brand-logo' className='h-8' />
        <div className='hidden md:flex items-center gap-4 md:gap-8'>
          <p className='text-white text-xs md:text-sm font-medium'>Find Work</p>
          <p className='text-white text-xs md:text-sm font-medium'>
            Find Talent
          </p>
          <p className='text-white text-xs md:text-sm font-medium'>Articles</p>
          <p className='text-white text-xs md:text-sm font-medium'>About Us</p>
          <p className='text-white text-xs md:text-sm font-medium'>
            Contact Us
          </p>
        </div>
        <div className='flex items-center gap-4 md:gap-8'>
          <p className='text-white text-xs md:text-sm font-medium'>Log In</p>
          <div className='rounded-2xl px-4 md:px-8 py-2 md:py-4 bg-white'>
            <p className='text-secondary text-xs md:text-sm font-medium'>
              Join Now
            </p>
          </div>
        </div>
        <div className='md:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-white focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary rounded-2xl mx-4 mt-4 px-4  shadow-deep transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'
        }`}
      >
        <p className='text-white text-xs font-medium py-1'>Find Work</p>
        <p className='text-white text-xs font-medium py-1'>Find Talent</p>
        <p className='text-white text-xs font-medium py-1'>Articles</p>
        <p className='text-white text-xs font-medium py-1'>About Us</p>
        <p className='text-white text-xs font-medium py-1'>Contact Us</p>
      </div>
    </div>
  )
}

export default NavBar
