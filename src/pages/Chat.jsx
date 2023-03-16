

import React, { useContext } from "react";
import { MensajeLeft, MensajeRigth } from "../components/Mensaje";
import { UserChatItem } from "../components/UserChatItem";
import { AuthContext } from "../context/Auth/AuthContext";

export const ChatPage=()=>{

    const {auth} = useContext(AuthContext);

    const traslado ={
        transform:'translate3d(0px, 0px, 0px)',
        display: 'none'
    }
    return (
        <>
        <div className="chat-content-area mt-20">
                <div className="sidebar-left">
                    <div className="sidebar">
                        <div className="chat-sidebar-header d-flex align-items-center">
                            LISTA CONTACTOS

                            
                        </div>

                        <div className="sidebar-content d-flex chat-sidebar" data-simplebar="init">
                            <div className="simplebar-wrapper" style={{margin: '0px'}}>
                                <div className="simplebar-height-auto-observer-wrapper">
                                    <div className="simplebar-height-auto-observer"></div></div>
                                    <div className="simplebar-mask"><div className="simplebar-offset" style={{right: '-17px', bottom: '0px'}}>
                                        <div className="simplebar-content-wrapper" style={{height: '100%', overflow: 'hidden scroll'}}>
                                            <div className="simplebar-content" style={{padding: '0px'}}>
                                                <div className="chat-menu">
                                

                              
                                                <label className="d-block list-group-label">Contacts</label>

                                               

                                                   <UserChatItem/>
                                                   
                                                   
                                                
                                            </div>
                        </div></div></div></div><div className="simplebar-placeholder" style={{width:' auto', height:'721px'}}>
                            </div></div>
                            <div className="simplebar-track simplebar-horizontal" style={{visibility:' hidden'}}>
                                <div className="simplebar-scrollbar" style={traslado}></div></div>
                                <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
                                    <div className="simplebar-scrollbar" style={{height: '568px', transform: 'translate3d(0px, 72px, 0px)', display:' block'}}></div></div></div>
                    </div>
                </div>

                <div className="content-right">
                    <div className="chat-area">
                        <div className="chat-list-wrapper">
                            <div className="chat-list">
                                <div className="chat-list-header d-flex align-items-center">
                                    <div className="header-left d-flex align-items-center mr-3">
                                        <div className="avatar mr-3">
                                            <img src="./logo.png" width="70" height="70" className="rounded-circle" alt="image"/>
                                            <span className="status-online"></span>
                                        </div>
                                        <h6 className="mb-0 font-weight-bold">{auth.nombre}</h6>
                                    </div>

                                    <div className="header-right text-right w-100">
                                        <ul className="list-unstyled mb-0">
                                            <li>
                                                <span className="favorite d-block">
                                                    <i className="bx bx-star"></i>
                                                </span>
                                            </li>

                                            <li>
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
        
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className="bx bx-pin"></i> Pin to Top
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className="bx bx-trash"></i> Delete Chat
                                                        </a>
                                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                                            <i className="bx bx-block"></i> Block
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="chat-container" data-simplebar="init"><div className="simplebar-wrapper" style={{margin:' -25px -20px'}}>
                                    <div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div>
                                    <div className="simplebar-mask"><div className="simplebar-offset" style={{right:'-17px', bottom:'0px'}}>
                                        <div className="simplebar-content-wrapper" style={{height:' 100%', overflow: 'hidden scroll'}}>
                                            <div className="simplebar-content" style={{padding: '25px 20px'}}>
                                    <div className="chat-content">
                                        <MensajeRigth/>
                                       <MensajeLeft/>

                                       

                                    </div>
                                </div></div></div></div><div className="simplebar-placeholder" style={{width: 'auto', height:' 741px'}}></div></div>
                                <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
                                    <div className="simplebar-scrollbar" style={{'transform': 'translate3d(0px, 0px, 0px)', display: 'none'}}></div></div>
                                    <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
                                        <div className="simplebar-scrollbar" style={{height: '523px', 'transform': 'translate3d(0px, 100px, 0px)', display:' block'}}></div></div></div>

                                <div className="chat-list-footer">
                                    <form className="d-flex align-items-center">
                                        <div className="btn-box d-flex align-items-center mr-3">
                                            <button className="emoji-btn d-inline-block mr-2" data-toggle="tooltip" data-placement="top" title="" type="button" data-original-title="Emoji"><i className="bx bx-smile"></i></button>

                                            <button className="file-attachment-btn d-inline-block" data-toggle="tooltip" data-placement="top" title="" type="button" data-original-title="File Attachment"><i className="bx bx-paperclip"></i></button>
                                        </div>

                                        <input type="text" className="form-control" placeholder="Type your message..."/>

                                        <button type="submit" className="send-btn d-inline-block">Send <i className="bx bx-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}