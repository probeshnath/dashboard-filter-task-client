import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './dashboard/Dashboard.jsx'
import AllData from './dashboard/AllData.jsx'
import MainDashboard from './dashboard/MainDashboard.jsx';
import ErrorPage from './dashboard/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboard></MainDashboard>,
    errorElement: <ErrorPage /> ,
    children: [
      {
        index:true,
        element: <Dashboard />,
      },
      {
        path: "/allData",
        element: <AllData /> ,
      },
    ]
    
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
