import React from 'react'
import { Outlet } from 'react-router-dom'

const MainDashboard = () => {
  return (
    <div>MainDashboard
        <Outlet />
    </div>
  )
}

export default MainDashboard