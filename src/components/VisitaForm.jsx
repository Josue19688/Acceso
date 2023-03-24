import React,{useContext, useState} from "react";
import { SocketContext } from "../context/sockets/SocketContext";



export const VisitaForm = ()=>{

    const options = [
        {value: '', text: '--Elegir Opcion--'},
        {value: 'Proveedor', text: 'Proveedor'},
        {value: 'Particular', text: 'Particular'}
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };


      const [novedad, setNovedad] = useState({
        tipo:'',
        nombre:'',
        dpi:'',
        visita:'',
        empresa:'',
        ingreso:'',
        salida:'',
        placa:'',
        vehiculo:''
      });
      const {socket } = useContext(SocketContext);

      const onchange = ({target})=>{
        const {name, value} = target;

        setNovedad({
            ...novedad,
            [name]:value
        })
        
      }

      const enviarNovedad = (ev)=>{
        ev.preventDefault();
        

        socket.emit('mensaje-visitas', {
            tipo:selected,
            nombre:novedad.nombre,
            dpi:novedad.dpi,
            colaborador:novedad.visita,
            proveniente:novedad.empresa,
            horaEntrada:novedad.ingreso,
            horaSalida:novedad.salida,
            placa:novedad.placa,
            vehiculo:novedad.vehiculo
        })
       
      }

    const todoOk = ()=>{
        return (novedad.nombre.length>0 && novedad.visita.length>0) ? true :false;
    }

    return (
        <>
           <form onSubmit={enviarNovedad}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="tipo">Tipo Visita</label>
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
                    <label htmlFor="nombre">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    name="nombre" 
                    value={novedad.nombre}
                    onChange={onchange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dpi">DPI</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="dpi" 
                    name="dpi"
                    value={novedad.dpi}
                    onChange={onchange}
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="visita">Persona a quien visita</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="visita" 
                    name="visita" 
                    value={novedad.visita}
                    onChange={onchange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="empresa">Empresa o Particular</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="empresa" 
                    name="empresa" 
                    value={novedad.empresa}
                    onChange={onchange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="ingreso">Hora Entrada</label>
                        <input 
                        type="time" 
                        className="form-control" 
                        id="ingreso" 
                        name="ingreso"
                        value={novedad.ingreso}
                        onChange={onchange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="salida">Hora Salida</label>
                        <input 
                        type="time" 
                        className="form-control" 
                        id="salida" 
                        name="salida"
                        value={novedad.salida}
                        onChange={onchange}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="ingreso">Placa</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="placa" 
                        name="placa"
                        value={novedad.placa}
                        onChange={onchange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="salida">Vehiculo</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="vehiculo" 
                        name="vehiculo"
                        value={novedad.vehiculo}
                        onChange={onchange}
                        />
                    </div>
                </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                disabled={!todoOk()}
                >Guardar</button>
            </form>
        </>
    )
}