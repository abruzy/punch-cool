import React from 'react'

const WhyChooseCard = ({ imgSrc, imgAlt, title, details, bgColor }) => {
  return (
    <div className='flex-shrink-0 rounded-3xl bg-white shadow-deep-1 p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='mb-8 md:mb-0 md:mr-4'>
        <h2 className='text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>
          {title}
        </h2>
        {details.map((detail, index) => (
          <div key={index} className='flex items-center gap-4'>
            <div className={`rounded-3xl h-2 w-4 ${bgColor}`} />
            <p className='text-secondary opacity-80 text-lg sm:text-xl'>
              {detail}
            </p>
          </div>
        ))}
        <div className='flex items-center space-x-4 mt-12'>
          <div className='h-20 w-20 bg-secondary rounded-3xl flex items-center justify-center'>
            <img
              src='/assets/white-forward-arrow.svg'
              alt='white-forward-arrow'
            />
          </div>
          <p className='text-secondary font-medium text-xl'>Explore More</p>
        </div>
      </div>
      <img src={imgSrc} alt={imgAlt} className='w-full md:w-auto' />
    </div>
  )
}

export default WhyChooseCard
