import { types } from "../../types/types";


export const visitaReducer =(state, action)=>{

    switch(action.type){
        case types.nuevaVisita:
            return {
                ...state,
                visitas : [...state.visitas,action.payload]
            }
            
        case types.cargarVisitas:
            //console.log(action.payload);
            return {
                ...state,
                visitas:[...action.payload]
            }
        default:
            return state;
    }
}