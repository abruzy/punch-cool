// WhyChooseCard.jsx
import React from 'react'

const WhyChooseCard = ({ imgSrc, imgAlt, title, details }) => {
  return (
    <div className='flex-shrink-0 rounded-3xl bg-white shadow-deep-1 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='mb-8 md:mb-0 md:mr-4'>
        <h2 className='text-secondary text-3xl sm:text-4xl md:text-5xl font-bold'>
          {title}
        </h2>
        {details.map((detail, index) => (
          <div key={index} className='flex items-center gap-4 mt-8'>
            <div className='rounded-3xl h-2 w-4 bg-light-purple' />
            <p className='text-secondary opacity-80 text-lg sm:text-xl'>
              {detail}
            </p>
          </div>
        ))}
      </div>
      <img src={imgSrc} alt={imgAlt} className='w-full md:w-auto' />
    </div>
  )
}

export default WhyChooseCard
