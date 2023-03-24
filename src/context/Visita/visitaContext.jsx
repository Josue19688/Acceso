import { createContext, useReducer } from "react";
import { visitaReducer } from "./visitaReducer";



export const VisitaContext =  createContext();

const initialState={
    visita:[]
}


export const VisitaProvider = ({children})=>{
    const [visitaState, visitaDispatch] = useReducer(visitaReducer,initialState);

    return(
        <VisitaContext.Provider value={{
            visitaState,
            visitaDispatch
        }}>
            {children}
        </VisitaContext.Provider>
    )
}