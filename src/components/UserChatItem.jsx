import { useContext } from "react"
import { AuthContext } from "../context/Auth/AuthContext"
import { ChatContext } from "../context/chat/ChatContext";
import { UsuarioChatItem } from "./usuarioChatItem";


export const UserChatItem =()=>{

    
    const {chatState } =  useContext(ChatContext);

    const {auth} = useContext(AuthContext);
    const {uid}= auth;

    return(
        <>
         <ul className="list-group list-group-user list-unstyled mb-0">
            {
                chatState.usuarios
                    .filter(user=>user.uid!==uid)
                    .map((usuario)=>(
                    <UsuarioChatItem
                    key={usuario.uid}
                    usuario={usuario} 
                    />
                ))
            }
        </ul>
        </>
    )
}