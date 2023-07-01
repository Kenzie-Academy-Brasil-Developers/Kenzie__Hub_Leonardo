import React, { useContext } from "react";
import { LoginStyle } from "./ListStyle";
import { ModalStyle } from "../Modal/ModalStyle";
import userProvider, { UserContext } from "../../Providers/ContextExample";
function RenderListTech({ ResponseTechs={ResponseTechs},
  setResponseTechs={setResponseTechs}}) {

    
   function ShowModal(){
      const modal = document.querySelector('.ModalNewTech')
      modal.style.display = "flex"
    }

  return (
    <LoginStyle>
      <div>
      <h1>Tecnologias</h1>
      <button onClick={(event)=>{ShowModal(event.target)}}>+</button>
      </div>
      <ul>
        {ResponseTechs.map((tech, index) => (
      <li  key={index} >
        <h3>{tech.title}</h3>
        <h4>{tech.status}</h4>
      </li>
    ))}
      </ul>
      
    </LoginStyle>
  );
}

export default RenderListTech;
