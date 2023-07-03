import React, { useContext } from "react";
import { LoginStyle } from "./ListStyle";
import { ModalStyle } from "../Modal/ModalStyle";
import userProvider, { UserContext } from "../../Providers/ContextExample";
import { ModalEditStyle } from '../EditModal/ModalEditStyle';

function RenderListTech({ ResponseTechs={ResponseTechs},
  setResponseTechs={setResponseTechs},nameLi, setnameLi ,idLi,setidLi}) {

    
   function ShowModal(){
      const modal = document.querySelector('.ModalNewTech')
      modal.style.display = "flex"
    }
    function ShowModalEditTech(){
      document.querySelector('.ModalEditTech').style.display = 'flex'
    }
  return (
    <LoginStyle>
      <div>
      <h1>Tecnologias</h1>
      <button onClick={(event)=>{ShowModal(event.target)}}>+</button>
      </div>
      <ul>
        {ResponseTechs.map((tech, index) => (
        <li id={tech.id} onClick={(e)=>{
          setnameLi(e.target.childNodes[0].textContent)
          ShowModalEditTech(e.target.id)
          setidLi(e.target.id)
        }} key={index} >
        <h3 className="H3">{tech.title}</h3>
        <h4 className="H4">{tech.status}</h4>
      </li>
    ))}
      </ul>
      
    </LoginStyle>
  );
}

export default RenderListTech;
