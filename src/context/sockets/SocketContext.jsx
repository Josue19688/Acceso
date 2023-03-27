import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../../hooks/useSocket'
import { types } from '../../types/types';
import { AuthContext } from '../Auth/AuthContext';
import { ChatContext } from '../chat/ChatContext';
import { NovedadContext } from '../novedades/novedadContext';
import { VisitaContext } from '../Visita/visitaContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:9090');
    const {auth} =useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);
    const {visitaDispatch} =  useContext(VisitaContext);
    const {novedadDispatch}=useContext(NovedadContext);

    useEffect(()=>{
        if(auth.logged){
            conectarSocket();
        }
    },[auth, conectarSocket]);
    useEffect(()=>{
        if(!auth.logged){
            desconectarSocket();
        }
    },[auth, desconectarSocket]);


    //Escuchar los cambios en los usuarios conectados
    useEffect(()=>{
        
        socket?.on('lista-usuarios',(usuarios)=>{
            dispatch({
                type:types.usuariosCargados,
                payload:usuarios
            })
        });
       
    },[socket, dispatch]);

    useEffect(()=>{

        socket?.on('mensaje-personal',(mensaje)=>{
            dispatch({
                type:types.nuevoMensaje,
                payload:mensaje
            });
        });

    },[socket,dispatch]);

    useEffect(()=>{
        socket?.on('mensaje-visitas',(visita)=>{
            visitaDispatch({
                type:types.nuevaVisita,
                payload:visita
            })
        })
    },[socket,visitaDispatch]);

    useEffect(()=>{
        socket?.on('lista-visitas',(visitas)=>{
           
            visitaDispatch({
                type:types.cargarVisitas,
                payload:visitas
            })
        })
    },[socket,visitaDispatch]);

    useEffect(()=>{
        socket?.on('lista-novedad',(novedades)=>{
           
            novedadDispatch({
                type:types.cargarNovedad,
                payload:novedades
            })
        })
    },[socket,novedadDispatch]);
    
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}