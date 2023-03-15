import React from "react";



export const VisitaForm = ()=>{
    return (
        <>
           <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="dpi">DPI</label>
                    <input type="text" className="form-control" id="dpi" name="dpi" />
                </div>
                <div className="form-group">
                    <label htmlFor="visita">Persona a quien visita</label>
                    <input type="text" className="form-control" id="visita" name="visita" />
                </div>
                <div className="form-group">
                    <label htmlFor="empresa">Empresa o Particular</label>
                    <input type="text" className="form-control" id="empresa" name="empresa" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="ingreso">Hora Entrada</label>
                        <input type="time" className="form-control" id="ingreso" name="ingreso"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="salida">Hora Salida</label>
                        <input type="time" className="form-control" id="salida" name="salida"/>
                    </div>
                </div>
                
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
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </>
    )
}