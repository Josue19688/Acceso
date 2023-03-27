


import React, { useContext } from 'react'
import { NovedadContext } from '../../context/Novedades/novedadContext'
import { NovedadItem } from './NovedadItem';

export const NovedadesList = () => {

    const {novedadState} = useContext(NovedadContext);
  return (
    <>
         <ul className="list-wrapper" data-simplebar="">
            {
                novedadState.novedades?.map((novedad)=>(
                    <NovedadItem
                        key={novedad.uid}
                        novedad={novedad}
                    />
                ))
            }
            
        </ul>
    </>
  )
}
