import React from 'react';

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className='text-4xl font-bold text-red-600 cursor-pointer '>NETFLIX</h1>
    
      <div>
        <button className='text-white pr-4 cursor-pointer'>Sign In</button>
        <button className='bg-red-600 rounded px-6 py-2 text-white cursor-pointer' >Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar