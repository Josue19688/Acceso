import React from 'react'
import { NovedadesList } from '../components/novedades/Novedades';
import { NovedadesForm } from '../components/novedades/NovedadesForm';


export const Novedades = () => {

  const max ={
    maxWidth:"100%"
}
  return (
    <div className="todo-content-area" style={max}>
    <div className="sidebar-left" style={{width:'40%'}} >
        <div className="sidebar" >
            <div className="sidebar-content d-flex email-sidebar" style={{width:'90%'}} data-simplebar="">
                <div className="todo-menu">
                    <NovedadesForm/>
                </div>
            </div>
        </div>
    </div>

    <div className="content-right" style={{width:'60%'}}>
        <div className="todo-area">
            <div className="todo-list-wrapper">
                <div className="todo-list">
                    <div className="todo-list-header d-flex align-items-center">
                        <div className="header-left d-flex align-items-center mr-3">
                            <ul className="list-inline m-0 d-flex">
                                <li className="list-inline-item email-delete">
                                    <button type="button" className="btn-icon">
                                        <i className=' bx bx-line-chart'></i>
                                    </button>
                                </li>
                                <li className="list-inline-item email-unread">
                                    <button type="button" className="btn-icon">
                                        <i className='bx bx-envelope'></i>
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div className="header-right w-100">
                            LISTADO DE NOVEDADES
                        </div>
                    </div>

                   <NovedadesList/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
