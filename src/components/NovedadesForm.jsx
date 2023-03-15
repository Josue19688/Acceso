import React, { useState } from "react";



export const NovedadesForm = ()=>{

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

    // const onSubmit = async(ev)=>{
    //     ev.preventDefault();

    //     const {tipo,hora,fecha,puesto,preliminar,descripcion} =  form;


    //     const resp = await fetchToken('novedades/new',{tipo, hora,fecha,puesto, preliminar, descripcion},'POST');

    //     if(resp.ok){

    //         new Swal('Buen Trabajo!','Registro agregado correctamente!','success');

    //         setForm({
    //         tipo:'',
    //         hora:'',
    //         fecha:'',
    //         puesto:'',
    //         preliminar:'',
    //         descripcion:''
    //         })
    //     }

    //     console.log(resp);
    // }

    
    const todoOk = ()=>{
        return (form.hora.length>0 && form.fecha.length>0 && form.puesto.length>0 ) ? true :false;
    }

    return (
        <>
           <form>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="tipo">Tipo Novedad</label>
                        <select id="tipo" name="tipo" className="form-control">
                            <option selected disabled>Seleccionar</option>
                            <option>Accidente Vehicular</option>
                            <option>Asalto</option>
                            <option>Robo</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="puesto">Puesto</label>
                    <input type="text" className="form-control" id="puesto" name="puesto" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="hora">Hora</label>
                        <input type="time" className="form-control" id="hora" name="hora"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" className="form-control" id="fecha" name="fecha"/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="preliminar">Preliminar</label>
                    <textarea type="text" className="form-control" id="preliminar" name="preliminar" />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea type="text" className="form-control" id="descripcion" name="descripcion"  rows="3" />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </>
    )
}