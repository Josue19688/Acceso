import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Auth/AuthContext'
import Swal from 'sweetalert2';

export const Login = () => {
    const {login} =useContext(AuthContext);

    const [form, setForm]=useState({
        email:'advinjosuev899@gmail.com',
        password:'123456'
    });

    const onChange= ({target})=>{
        const {name, value} =  target;

        setForm({
            ...form,
            [name]:value
        })
    }
    const onSubmit =async (ev)=>{
        ev.preventDefault();
        const {email, password} =  form;
        const ok = await login(email, password);
        if(!ok){
            new Swal('Error','Verifique el usuario o contraseña!','error');
        }
    
    }

    const todoOk = ()=>{
        return (form.email.length>0 && form.password.length>0) ? true :false;
    }
  return (
    <>
      <div className="login-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="login-form">
                        <div className="logo">
                            <img src="./logo.png" style={{width:'40%'}} alt="logo"/>
                        </div>

                        <h2>Bienvenido</h2>

                        <form  onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="email" 
                                className="form-control" 
                                name="email" 
                                value={form.email}
                                onChange={onChange}
                                placeholder="Ingrese su correo"/>
                                <span className="label-title"><i className="bx bx-user"></i></span>
                            </div>

                            <div className="form-group">
                                <input type="password" 
                                className="form-control" 
                                name="password" 
                                value={form.password}
                                onChange={onChange}
                                placeholder="Ingrese su contraseña"/>
                                <span className="label-title"><i className="bx bx-lock"></i></span>
                            </div>

                           

                            <button type="submit"  disabled={!todoOk()} className="login-btn bg-primary">Ingresar</button>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
