import { useContext } from "react"
import { ChatContext } from "../context/chat/ChatContext"
import fetchToken from "../helpers/FetchToken";
import { types } from "../types/types";


export const UsuarioChatItem=({usuario})=>{

    const {dispatch} =  useContext(ChatContext);

    const onClick = async()=>{
        dispatch({
            type: types.activarChat,
            payload:usuario.uid
        })

        //cargar todos los mensajes
        const resp = await fetchToken(`mensajes/${usuario.uid}`);
        console.log(resp.mensajes);
        dispatch({
            type:types.cargarMensajes,
            payload:resp.mensajes
        })
    }

   
    return(
        <>
        <li 
        onClick={onClick}
        >
            <div className="d-flex align-items-center">
                <div className="avatar mr-3">
                    <img src="./logo.png" width="50" height="50" className="rounded-circle" alt="image"/>

                    {
                        (usuario.online)
                        ? <span className="status-online"></span>
                        : <span className="status-busy"></span>
                    }  
                    
                </div>

                <div className="user-name">
                    <h6 className="font-weight-bold">{usuario.nombre}</h6>
                    <span className="d-block">{usuario.email}</span>
                </div>
            </div>
        </li>
        </>
    )
}