import React, { useContext } from 'react'
import { MensajeRigth } from "../components/Mensaje";
import { MensajeLeft} from "../components/MensajeLeft";
import { AuthContext } from '../context/Auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
export const ChatComponent = () => {

  const {chatState}= useContext(ChatContext);
  const {auth} = useContext(AuthContext);

  return (
    <>
      {
        chatState.mensajes.map((msg)=>(
          (msg.para===auth.uid)
          ? <MensajeRigth key={msg._id} msg={msg}/>
          : <MensajeLeft key={msg._id} msg={msg}/>
        ))
      }
        
        
    </>
  )
}
