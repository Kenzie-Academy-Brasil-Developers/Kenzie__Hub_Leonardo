import React from "react";
import { api } from "../Services/services";
import { ModalEditStyle } from "./ModalEditStyle";
import { UserContext } from "../../Providers/ContextExample";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { addScrapSchema } from "../Zod/SchemasZod";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
const TokenUser = localStorage.getItem('@token')
export default function RenderEditModal({nameLi, setnameLi,idLi,setidLi,ResponseTechs,setResponseTechs}){

    const notify = (a) => {
        toast(a);
      };

    const { register, handleSubmit ,formState : {errors}} = useForm({
        // resolver: zodResolver(registerSchema)
      });
      const navigate = useNavigate();

async function requestEditApi(NewStatus){
    const authentications = {
        headers: { Authorization: `Bearer ${TokenUser}` }
      };
        try {
            const response = await api.put(`/users/techs/${idLi}`,
                {
                  status: NewStatus.status
                },
                authentications
              );
              if(response.statusText == "Created"){
                  hideModal()
                  location.reload()
              }
          } catch (error) {
            console.log(error)
          }
    }

    async function delTech(){
        const authentications = {
            headers: { Authorization: `Bearer ${TokenUser}` }
          };
            try {
                const response = await api.delete(`/users/techs/${idLi}`,
                    authentications
                  );
                      hideModal()
                      location.reload()
              } catch (error) {
                console.log(error)
              }
    }
    
    function hideModal(a){

        document.querySelector('.ModalEditTech').style.display = 'none'
        
    }

    return (
        <ModalEditStyle className="ModalEditTech">
        <header>
            <h1>Editar Tecnologia</h1>
            <span className="X" onClick={(event)=>hideModal(event.target.parentNode.parentNode)}>X</span>
        </header>
        <form onSubmit={handleSubmit(requestEditApi)}>
            
            <div>
                <h2>Nome</h2>
                <input type="text" placeholder={nameLi} disabled name="NameTech" />
                {/* {errors.title ? <span className="errorStyle">{errors.title.message}</span> : null} */}
            </div>
            <div>
                <h2>Selecionar Status</h2>
                <select {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediario">Intermediario</option>
                    <option value="Avançado">Avançado</option>
                </select>
            </div>
                <div className="ButtonsD">
                    <button type="submit">Salvar Alterações</button>
                    <span className="ex" onClick={()=>delTech()}>Excluir</span>
                </div>
        </form>
    </ModalEditStyle>
    )
}

