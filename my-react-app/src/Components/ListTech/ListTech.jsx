import React from "react";
import { LoginStyle } from "./ListStyle";
function RenderListTech({ ResponseTechs={ResponseTechs},
  setResponseTechs={setResponseTechs}}) {
  return (
    <LoginStyle>
      <div>
      <h1>Tecnologias</h1>
      <button>+</button>
      </div>
      <ul>
        {ResponseTechs.map((tech, index) => (
      <li key={index}>
        <h3>{tech.title}</h3>
        <h4>{tech.status}</h4>
      </li>
    ))}
      </ul>
    </LoginStyle>
  );
}

export default RenderListTech;
