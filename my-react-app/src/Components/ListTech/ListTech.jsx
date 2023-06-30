import React from "react";
import { LoginStyle } from "./ListStyle";
import { ModalStyle } from "../Modal/ModalStyle";
function RenderListTech({ ResponseTechs={ResponseTechs},
  setResponseTechs={setResponseTechs}}) {
    let countz = 0

   function ShowModal(){
    if(countz == 0){
      document.querySelector(".testezada").style.display = 'flex'
      countz == 1
      console.log('rola')
    }else if(countz == 1){
      document.querySelector(".testezada").style.display = 'none'
      countz == 0
      console.log('rolona')
    }
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
