import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { NovedadContext } from "../../context/Novedades/novedadContext";


import fetchToken from "../../helpers/FetchToken";
import { types } from "../../types/types";


export const NovedadesForm = ()=>{

   
    const {novedadDispatch}= useContext(NovedadContext);

    const options = [
        {value: '', text: '--Elegir Opcion--'},
        {value: 'Manifestacion', text: 'Manifestacion'},
        {value: 'Colicion Vehicular', text: 'Colicion Vehicular'},
        {value: 'Asalto', text: 'Asalto'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };


    const [form, setForm] = useState({
        tipo:'',
        hora:'',
        fecha:'',
        puesto:'',
        preliminar:'',
        descripcion:''
    });

    const onChange =({target})=>{
        const {name, value} =  target;

        setForm({
            ...form,
            [name]:value
        })
    }

    const onSubmit = async(ev)=>{
        ev.preventDefault();

        const { hora,fecha,puesto,preliminar,descripcion} =  form;

        const tipo=selected;

        const resp = await fetchToken('novedades/new',{tipo, hora,fecha,puesto, preliminar, descripcion},'POST');

        if(resp.ok){

            new Swal('Buen Trabajo!','Registro agregado correctamente!','success');

            setSelected('');

            setForm({
            tipo:'',
            hora:'',
            fecha:'',
            puesto:'',
            preliminar:'',
            descripcion:''
            })

            const resp = await fetchToken(`novedades`);

            
                novedadDispatch({
                    type:types.cargarNovedad,
                    payload:resp.novedad
                })
         
           
            
        }
       

        
    }

    
    const todoOk = ()=>{
        return (form.hora.length>0 && form.fecha.length>0 && form.puesto.length>0 ) ? true :false;
    }


   

    return (
        <>
           <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="tipo">Tipo Novedad</label>
                        <select value={selected} onChange={handleChange} id="tipo" name="tipo" className="form-control">
                            {options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.text}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="puesto">Puesto</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="puesto" 
                    value={form.puesto}
                    onChange={onChange}
                    name="puesto" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="hora">Hora</label>
                        <input 
                        type="time" 
                        className="form-control" 
                        id="hora"
                        value={form.hora}
                        onChange={onChange}
                         name="hora"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="fecha">Fecha</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        id="fecha"
                        value={form.fecha}
                        onChange={onChange}
                        name="fecha"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="preliminar">Preliminar</label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    id="preliminar" 
                    value={form.preliminar}
                    onChange={onChange}
                    name="preliminar" />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    id="descripcion" 
                    value={form.descripcion}
                    onChange={onChange}
                    name="descripcion"  
                    rows="3" />
                </div>
                <button 
                type="submit" 
                disabled={!todoOk()}
                className="btn btn-primary"
                >Guardar</button>
            </form>
        </>
    )
}