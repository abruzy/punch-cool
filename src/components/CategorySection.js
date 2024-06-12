import React from 'react'

const CategorySection = ({
  title,
  description,
  stats,
  categoryTitle,
  items,
  arrow,
  arrowLast
}) => {
  return (
    <div className='px-4 sm:px-8 md:px-16 mt-10 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10'>
      <div className='flex-1'>
        <h4 className='text-xl sm:text-2xl text-secondary font-medium md:max-w-sm'>
          {description}
        </h4>
        <div className='flex flex-wrap mt-6 gap-4'>
          {stats.map((stat, index) => (
            <div className='flex items-center gap-2' key={index}>
              <img src={stat.icon} alt={stat.alt} />
              <p className='text-secondary opacity-80'>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='rounded-lg bg-white p-8 flex-1'>
        <h2 className='text-secondary font-medium mb-4'>{categoryTitle}</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4'>
          {arrowLast && (
            <div className='flex'>
              <img
                src={arrowLast.icon}
                alt={arrowLast.alt}
                className='self-start'
              />
            </div>
          )}
          {items.map((item, index) => (
            <div
              className='flex flex-col items-center justify-center'
              key={index}
            >
              <img src={item.icon} alt={item.alt} />
              <p className='mt-2 text-center'>{item.text}</p>
            </div>
          ))}
          {arrow && (
            <div className='flex'>
              <img src={arrow.icon} alt={arrow.alt} className='self-start' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategorySection
