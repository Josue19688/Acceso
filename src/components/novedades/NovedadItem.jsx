

import React from 'react'
import { Link } from 'react-router-dom'
import { horaMes } from '../../helpers/horaMes';

export const NovedadItem = ({novedad}) => {


    
    console.log(novedad);
  return (
    <>
    <li className="todo-list-item">
        <div className="todo-item-title">
            <img src="./logo.png" data-toggle="tooltip" data-placement="top" title="Sarah Taylor" alt="avatar usuario"/>
            <h3>{novedad.tipo}</h3>
            
            <p><strong style={{color:"black"}}>Puesto : </strong> { novedad.puesto}</p>
            <p><strong style={{color:"black"}}>Fecha : </strong> { novedad.fecha}</p>
            <p><strong style={{color:"black"}}>Hora : </strong> { novedad.hora}</p>
            <p><strong style={{color:"black"}}>Preliminar : </strong> { novedad.preliminar}</p>
            <p><strong style={{color:"black"}}>Descripcion : </strong> { novedad.descripcion}</p>
            <h3>Creada : { horaMes(novedad.createdAt) }</h3>
        </div>
        <div className="todo-item-action">
            <Link to="home" className="edit"><i className='bx bx-edit-alt'></i></Link>
            <Link to="home" className="delete"><i className='bx bx-trash'></i></Link>
        </div>
    </li>
</>
  )
}
