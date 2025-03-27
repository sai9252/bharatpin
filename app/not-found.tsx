import React from 'react'

const notfound = () => {
  return (
    <div className="page-container flex flex-col items-center justify-center  h-full poppins">
        <div className="content text-red-600 space-y-2 m-20">
          <h1 className='text-2xl font font-semibold'>Page Not Found</h1>
          <p className='text-lg '>The page you are looking for does not exist.</p>
        </div>
      </div>
  )
}

export default notfound