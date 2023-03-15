import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Menu = () => {
  return (
   <>
    <div className="main-content d-flex flex-column">

           <Sidebar/>
           <Navbar/>
           
        {/* <div className="breadcrumb-area">
            <h1>Dashboard</h1>

            <ol className="breadcrumb">
                <li className="item"><a href="dashboard-analytics.html"><i className='bx bx-home-alt'></i></a></li>

                <li className="item">Dashboard</li>

                <li className="item">Blank Page</li>
            </ol>
        </div> */}
        <Outlet/>


        <Footer/>
    </div>
   
   </>
  )
}
