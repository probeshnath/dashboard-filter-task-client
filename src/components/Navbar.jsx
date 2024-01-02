import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
        <div className="max-w-7xl mx-auto flex justify-between py-3 px-2 items-center">
            <div className='flex items-center gap-2'>
                <img className='w-12 h-12' src="/coffee.png" alt="" />
                <h2 className='text-2xl font-bold text-gray-300'>Black <span className='text-red-600'>Coffer</span></h2>
            </div>
            <div className='flex items-center gap-2'>
                <h3 className='text-lg font-bold text-gray-300 hidden md:block'>Probesh Deb Nath</h3>
                <img  className='w-12 h-12' src="/user.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar