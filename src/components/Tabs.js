import React from 'react'

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className='rounded-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-mint w-full md:w-fit mx-auto p-2'>
      {tabs.map((tab, index) => (
        <p
          key={index}
          onClick={() => setActiveTab(index)}
          className={`rounded-2xl px-4 py-2 sm:px-8 sm:py-3 cursor-pointer text-secondary ${
            activeTab === index
              ? 'bg-foam font-semibold '
              : 'font-medium opacity-80'
          }`}
        >
          {tab}
        </p>
      ))}
    </div>
  )
}

export default Tabs
