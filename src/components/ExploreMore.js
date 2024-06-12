import React, { useState } from 'react'

const ExploreMore = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className='flex items-center space-x-4 cursor-pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className={`text-secondary font-medium text-xl transition-transform duration-500 ${
          hovered ? 'transform -translate-x-12' : ''
        }`}
      >
        Explore More
      </p>
      <div
        className={`h-20 w-20 bg-secondary rounded-3xl flex items-center justify-center transition-transform duration-500 ${
          hovered ? 'transform translate-x-12' : ''
        }`}
      >
        <img src='/assets/white-forward-arrow.svg' alt='white-forward-arrow' />
      </div>
    </div>
  )
}

export default ExploreMore
