

export const MensajeRigth=()=>{
    return(
        <>
        <div className="chat">
            <div className="chat-avatar">
                <a href="#" className="d-inline-block">
                    <img src="./logo.png" width="50" height="50" className="rounded-circle" alt="image"/>
                </a>
            </div>

            <div className="chat-body">
                <div className="chat-message">
                    <p>👋Hi​! I'm a Fiva. Let me know if you have any questions regarding our tool or set up a demo to learn more!</p>
                    <span className="time d-block">7:45 AM</span>
                </div>
            </div>
        </div>

        </>
    )
}


export const MensajeLeft=()=>{
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
                    <p>Could you describe EnvyTheme in one sentence?</p>
                    <span className="time d-block">7:45 AM</span>
                </div>
            </div>
        </div>

        </>
    )
}