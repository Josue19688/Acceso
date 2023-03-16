import React,{ createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";


export const ChatContext = createContext();


/**
 * chatActivo : id del usuario a donde enviare el mensaje
 * usuario : Todos los usuarios de la base de datos
 * mensajes: Chat seleccionado
 */
const initialState = {
    uid:'',
    chatActivo:null,
    usuarios:[],
    mensaje:[]
}





export const ChatProvider =({children})=>{
    const [chatState, dispatch] = useReducer(chatReducer,initialState);

    
    return(
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}