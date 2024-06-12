import React from 'react'

const JobList = ({ jobs }) => {
  return (
    <div className='grid grid-cols-1 text-center md:grid-cols-3 place-items-center mt-8 gap-4 md:gap-0  md:text-left'>
      {jobs.map((column, colIndex) => (
        <div key={colIndex}>
          {column.map((job, jobIndex) => (
            <p
              key={jobIndex}
              className={`mb-4 ${
                job.highlight ? 'text-secondary font-medium' : 'text-steel'
              }`}
            >
              {job.title}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default JobList
