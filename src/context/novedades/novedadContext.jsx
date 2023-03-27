import React, { createContext, useReducer } from "react";
import { novedadReducer } from "./novedadReducer";

export const NovedadContext =  createContext();

const initialState ={
    novedad : []
}

export const NovedadProvider = ({children})=>{

    const [novedadState, novedadDispatch] =  useReducer(novedadReducer,initialState);

    return(
        <NovedadContext.Provider value={{
            novedadState,
            novedadDispatch
        }}
        >
            {children}
        </NovedadContext.Provider>
    )
}