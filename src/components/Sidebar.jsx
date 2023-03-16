import React from 'react'
import {Link} from 'react-router-dom';


export const Sidebar = () => {

    const tamaño = {
        width:"40px",
        height:"40px"
    }
  return (
    <>
     <div className="sidemenu-area">
            <div className="sidemenu-header">
                <Link to="home" className="navbar-brand d-flex align-items-center">
                    <img src="./logo.png" style={tamaño} alt="image"/>
                    <span>Seguridad</span>
                </Link>

                <div className="burger-menu d-none d-lg-block">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>

                <div className="responsive-burger-menu d-block d-lg-none">
                    <span className="top-bar"></span>
                    <span className="middle-bar"></span>
                    <span className="bottom-bar"></span>
                </div>
            </div>

            <div className="sidemenu-body">
                <ul className="sidemenu-nav metisMenu h-100" id="sidemenu-nav" data-simplebar="">
                    <li className="nav-item-title">
                        Main
                    </li>
                    <li className="nav-item">
                        <Link to="home" className="nav-link">
                            <span className="icon"><i className=' bx bxs-dashboard'></i></span>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="novedades" className="nav-link">
                            <span className="icon"><i className='bx bxs-book-bookmark'></i></span>
                            <span className="menu-title">Novedades</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="visitas" className="nav-link">
                            <span className="icon"><i className='bx bx-user-plus'></i></span>
                            <span className="menu-title">Visitas</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="archivo" className="nav-link">
                            <span className="icon"><i className='bx bx-box'></i></span>
                            <span className="menu-title">Archivo</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="chat" className="nav-link">
                            <span className="icon"><i className=' bx bx-chat'></i></span>
                            <span className="menu-title">Chat</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
       
    </>
  )
}
