// StepCard.jsx
import React from 'react'

const StepCard = ({
  imgSrc,
  stepNumber,
  title,
  description,
  bgColor,
  imgAlt,
  imgProfileSrc,
  imgProfileAlt
}) => {
  return (
    <div
      className={`h-auto md:h-96 ${bgColor} clip-diagonal-2 px-4 sm:px-8 py-8 md:py-0`}
    >
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-col md:flex-row items-start pt-8 gap-4 md:gap-6'>
          <img
            src={imgSrc}
            alt={imgAlt}
            className='w-12 h-12 md:w-auto md:h-auto'
          />
          <div>
            <h3 className='font-semibold text-secondary text-2xl sm:text-3xl md:text-4xl md:max-w-sm'>
              {title}
            </h3>
            <p className='text-secondary opacity-80 md:max-w-md my-4 md:my-6'>
              {description}
            </p>
          </div>
        </div>
        <div className='mt-8 md:mt-0'>
          <img
            src={imgProfileSrc}
            alt={imgProfileAlt}
            className='w-full md:w-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default StepCard
