import React from "react";
import { LoginStyle } from "./ListStyle";
function RenderListTech({}) {

  return (
    <LoginStyle>
      <div>
      <h1>Tecnologias</h1>
      <button>+</button>
      </div>
      <ul>
        {/* {ListTranfersHistory.map((transfer, index) => (
      <li key={index}>
        <h3></h3>
        <h4></h4>
      </li>
    ))} */}
      </ul>
    </LoginStyle>
  );
}

export default RenderListTech;
