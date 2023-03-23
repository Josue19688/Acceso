import { horaMes } from "../helpers/horaMes"

export const MensajeLeft=({msg})=>{
    console.log(msg)
    return(
        <>
         <div className="chat chat-left">
            <div className="chat-avatar">
                <a href="#" className="d-inline-block">
                    <img src="./logo.png" width="50" height="50" className="rounded-circle" alt="image"/>
                </a>
            </div>

            <div className="chat-body">
                <div className="chat-message">
                    <p>{msg.mensaje}</p>
                    <span className="time d-block" style={{paddingLeft:"5px"}}>{ horaMes(msg.createdAt) }</span>
                </div>
            </div>
        </div>

        </>
    )
}