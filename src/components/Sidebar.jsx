import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-32 p-2 text-gray-300 font-semibold h-screen bg-blue-700'>
        <ul>
            <li className='hover:bg-black hover:text-white px-3 py-1 rounded-md'><Link to="/">Dashboard</Link></li>
            <li className='hover:bg-black hover:text-white px-3 py-1 rounded-md'><Link to="/allData">All Data</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar