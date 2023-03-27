import React, { useContext } from "react";
import { VisitaContext } from "../../context/Visita/visitaContext";
import { Item } from "./item";

export const VisitaItem =()=>{

    

    const {visitaState} =  useContext(VisitaContext);

   
    return (
        <>
        {
            visitaState.visitas?.map((visita)=>(
                <Item
                key={visita.uid}
                visita={visita}
                />
            ))
        } 
            
        </>
    )
}