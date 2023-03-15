import React from 'react'
import {Link} from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
        <nav className="navbar top-navbar navbar-expand">
                <div className="collapse navbar-collapse" id="navbarSupportContent">
                    <div className="responsive-burger-menu d-block d-lg-none">
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                    </div>
                    
                    <ul className="navbar-nav left-nav align-items-center">
                        <li className="nav-item">
                            <Link to="app-email.html" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Email">
                                <i className="bx bx-envelope"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="app-chat.html" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Message">
                                <i className='bx bx-message'></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="app-calendar.html" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Calendar">
                                <i className='bx bx-calendar'></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="app-todo.html" className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Todo List">
                                <i className='bx bx-edit'></i>
                            </Link>
                        </li>

                        <li className="nav-item dropdown apps-box">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className='bx bxs-grid'></i>
                            </Link>

                            <div className="dropdown-menu">
                                

                               

                                <div className="dropdown-footer">
                                    <Link to="#" className="dropdown-item">View All</Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="nav-search-form d-none ml-auto d-md-block"></div>

                    <ul className="navbar-nav right-nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link bx-fullscreen-btn" id="fullscreen-button">
                                <i className="bx bx-fullscreen"></i>
                            </Link>
                        </li>

                      

                       

                      

                        <li className="nav-item dropdown profile-nav-item">
                            <Link to="#" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="menu-profile">
                                    <span className="name">Hi! Andro</span>
                                    <img src="assets\img\user1.jpg" className="rounded-circle" alt="image"/>
                                </div>
                            </Link>

                            <div className="dropdown-menu">
                                <div className="dropdown-header d-flex flex-column align-items-center">
                                    <div className="figure mb-3">
                                        <img src="assets\img\user1.jpg" className="rounded-circle" alt="image"/>
                                    </div>

                                    <div className="info text-center">
                                        <span className="name">Andro Smith</span>
                                        <p className="mb-3 email">hello@androsmith.com</p>
                                    </div>
                                </div>

                                <div className="dropdown-body">
                                    <ul className="profile-nav p-0 pt-3">
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link">
                                                <i className='bx bx-user'></i> <span>Profile</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" className="nav-link">
                                                <i className='bx bx-envelope'></i> <span>My Inbox</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" className="nav-link">
                                                <i className='bx bx-edit-alt'></i> <span>Edit Profile</span>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="#" className="nav-link">
                                                <i className='bx bx-cog'></i> <span>Settings</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown-footer">
                                    <ul className="profile-nav">
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link">
                                                <i className='bx bx-log-out'></i> <span>Logout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
           
    </>
  )
}
