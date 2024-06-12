import React, { useState } from 'react'

const CardComponent = ({ step, title, children }) => {
  const [showText, setShowText] = useState(false)

  return (
    <div
      className='p-4 border border-tertiary rounded-lg sm:gap-8 mb-4 md:w-2/4 transition-transform transform hover:scale-110'
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <div className='flex items-center gap-4'>
        <div
          className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
            showText ? 'bg-teal-blue' : 'bg-grey-2'
          }`}
        >
          <img
            src={showText ? '/assets/white-play.svg' : '/assets/play.svg'}
            alt='play'
            className='transition-opacity duration-300'
          />
        </div>
        <h3 className='font-semibold text-secondary text-lg sm:text-xl'>
          {step}: <span className='font-normal'>{title}</span>
        </h3>
      </div>
      {showText && (
        <p className='text-secondary opacity-80 mt-4 transition-opacity duration-300'>
          {children}
        </p>
      )}
    </div>
  )
}

export default CardComponent
