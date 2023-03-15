import React from "react";
import { Link } from "react-router-dom";

export const TaskItem =()=>{
    return (
        <>
            <li className="todo-list-item">
                <div className="todo-item-title">
                    <img src="./logo.png" data-toggle="tooltip" data-placement="top" title="Sarah Taylor" alt="avatar usuario"/>
                    <h3>10:30 15-03-2023 Tipo Novedad y Puesto</h3>
                    
                    <p>Preliminar 
                    Al igual que con las hojas de estilos externas, para aplicar los estilos inline no necesitas ninguna configuración adicional en tu aplicación. 
                    Solo que esta forma de escribir estilos a la larga se vuelve algo tedioso, 
                    sin mencionar que cuando tienes una gran cantidad de estilos, tu componente se vuelve muy extenso en cuanto a líneas de código.
                    </p>
                    <p>Descripcion
                    Al igual que con las hojas de estilos externas, para aplicar los estilos inline no necesitas ninguna configuración adicional en tu aplicación. 
                    Solo que esta forma de escribir estilos a la larga se vuelve algo tedioso, 
                    sin mencionar que cuando tienes una gran cantidad de estilos, tu componente se vuelve muy extenso en cuanto a líneas de código.
                    </p>
                    <h3>Creado 10:30 15-03-2023 </h3>
                </div>
                <div className="todo-item-action">
                    <Link to="home" className="edit"><i className='bx bx-edit-alt'></i></Link>
                    <Link to="home" className="delete"><i className='bx bx-trash'></i></Link>
                </div>
            </li>
        </>
    )
}