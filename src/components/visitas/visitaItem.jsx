import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { VisitaContext } from "../../context/Visita/visitaContext";
import { horaMes } from "../../helpers/horaMes";
import { Item } from "./item";

export const VisitaItem =()=>{

    

    const {visitaState} =  useContext(VisitaContext);

    // const {visitas}= visitaState;
    // console.log(visitas)

    return (
        <>
        {
            visitaState.visitas.map((visita)=>(
                <Item
                key={visita._id}
                visita={visita}
                />
            ))
        } 
            
        </>
    )
}