import { useContext } from "react";
import { ModalStyle } from "./ModalStyle";
import { UserContext } from "../../Providers/ContextExample";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { addScrapSchema } from "../Zod/SchemasZod";
import { api } from "../Services/services";
import { toast } from "react-toastify";
const TokenUser = localStorage.getItem('@token')

export default function RenderModal(){
    const { register, handleSubmit, formState : {errors} } = useForm({
        resolver: zodResolver(addScrapSchema)
    });

    const GlobalContext = useContext(UserContext)
    function hideModal(modal){
        modal.style.display = "none"
    }

    const notify = (a) => {
        toast(a);
      };

    async function requestNewApi(NewStatus){
        const authentications = {
            headers: { Authorization: `Bearer ${TokenUser}` }
          };
            try {
                const response = await api.post(`/users/techs`,
                    {
                      title:  NewStatus.title,
                      status: NewStatus.status
                    },
                    authentications
                  );
                  console.log(response)
                  notify('Tecnologia criada!')

              } catch (error) {
                console.log(error)
                notify(error.message)
              }
        }


    return(
        <ModalStyle className="ModalNewTech">
            <header>
                <h1>Cadastrar Tecnologia</h1>
                <span className="X" onClick={(event)=>hideModal(event.target.parentNode.parentNode)}>X</span>
            </header>
            <form onSubmit={handleSubmit(requestNewApi)}>
                
                <div>
                    <h2>Nome</h2>
                    <input type="text" {...register("title") } />
                    {errors.title ? <span className="errorStyle">{errors.title.message}</span> : null}
                </div>
                <div>
                    <h2>Selecionar Status</h2>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>
                    <button type="submit">Salvar Alterações</button>
            </form>
        </ModalStyle>
    )
}

