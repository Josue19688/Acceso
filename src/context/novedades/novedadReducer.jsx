import { types } from "../../types/types";



export const novedadReducer = (state, action)=>{

    switch(action.type){
        case types.nuevaNovedad:
            return{
                ...state,
                novedades:[...state.novedades,action.payload]
            }
        case types.cargarNovedad:
            return {
                ...state,
                novedades:[...action.payload]
            }
        default:
            return state;
    }
}