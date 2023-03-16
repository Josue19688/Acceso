

export const UsuarioChatItem=({usuario})=>{
    console.log(usuario)
    return(
        <>
        <li>
            <div className="d-flex align-items-center">
                <div className="avatar mr-3">
                    <img src="./logo.png" width="50" height="50" className="rounded-circle" alt="image"/>

                    {
                        (usuario.online)
                        ? <span className="status-online"></span>
                        : <span className="status-busy"></span>
                    }  
                    
                </div>

                <div className="user-name">
                    <h6 className="font-weight-bold">{usuario.nombre}</h6>
                    <span className="d-block">{usuario.email}</span>
                </div>
            </div>
        </li>
        </>
    )
}