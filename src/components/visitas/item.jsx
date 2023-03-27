import React from "react";
import { Link } from "react-router-dom";

import { horaMes } from "../../helpers/horaMes";

export const Item =({visita})=>{

    

    
    return (
        <>
        
                <li className="todo-list-item">
                    <div className="todo-item-title">
                        <img src="./logo.png" data-toggle="tooltip" data-placement="top" title="Sarah Taylor" alt="avatar usuario"/>
                        <h3>{ horaMes(visita.createdAt) } {visita.tipo}</h3>
                        
                        <p><strong style={{color:"black"}}>Nombre : </strong> { visita.nombre}</p>
                        <p><strong style={{color:"black"}}>Dpi : </strong> { visita.dpi}</p>
                        <p><strong style={{color:"black"}}>A quien Visita : </strong> { visita.colaborador}</p>
                        <p><strong style={{color:"black"}}>Hora Ingreso : </strong> { visita.horaEntrada}</p>
                        <p><strong style={{color:"black"}}>Hora Salida : </strong> { visita.horaSalida}</p>
                        <p><strong style={{color:"black"}}>Empresa o Particular : </strong> { visita.proveniente}</p>
                        <p><strong style={{color:"black"}}>Placa : </strong> { visita.placa}</p>
                        <p><strong style={{color:"black"}}>Vehiculo : </strong> { visita.vehiculo}</p>
                        
                    </div>
                    <div className="todo-item-action">
                        <Link to="home" className="edit"><i className='bx bx-edit-alt'></i></Link>
                        <Link to="home" className="delete"><i className='bx bx-trash'></i></Link>
                    </div>
                </li>

        
        </>
    )
}