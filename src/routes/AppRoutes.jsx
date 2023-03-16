import { BrowserRouter,Routes, Route } from "react-router-dom";


import {Login} from '../pages/Login';
import {AuthLayout} from '../layouts/AuthLayout'
import { Menu } from "../layouts/Menu";
import { Dashboard } from "../pages/Dashboard";
import { Novedades } from "../pages/Novedades";
import { Visitas } from "../pages/Visitas";
import { Archivo } from "../pages/Archivo";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth/AuthContext";
import { ChatPage } from "../pages/Chat";


export const AppRoutes = () => {

  const {auth, verificaToken} = useContext(AuthContext);

  useEffect(()=>{
    verificaToken();
  },[verificaToken]);

  console.log(auth);
  return (
    <BrowserRouter>
        <Routes>
          {
            auth.logged
            ?   <Route path="/*" element={<Menu/>}>
                  <Route  index path="home"   element={<Dashboard/>}/>
                  <Route  path="home"   element={<Dashboard/>}/>
                  <Route  path="novedades"  element={<Novedades/>}/>
                  <Route  path="visitas"  element={<Visitas/>}/>
                  <Route  path="archivo"  element={<Archivo/>}/>
                  <Route  path="chat"  element={<ChatPage/>}/>
              </Route>
            :
            <Route path="/" element={<AuthLayout/>}>
              <Route  index element={<Login/>}/>
            </Route>
          }
           
            
        </Routes>
    </BrowserRouter>
  )
}
