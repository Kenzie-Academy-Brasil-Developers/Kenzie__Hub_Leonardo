import { useContext } from "react";
import { ModalStyle } from "./ModalStyle";
import { UserContext } from "../../Providers/ContextExample";
import { useForm } from "react-hook-form";

export default function RenderModal(){
    const { register, handleSubmit } = useForm();

     const valor = useContext(UserContext)
    
    function hideModal(modal){
        modal.style.display = "none"
        console.log(modal)
    }

     const onSubmit = (data) => {
        console.log(data); 
      };

    return(
        <ModalStyle className="ModalNewTech">
            <header>
                <h1>Cadastrar Tecnologia</h1>
                <span onClick={(event)=>hideModal(event.target.parentNode.parentNode)}>X</span>
            </header>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2>Nome</h2>
                    <input type="text" ref={register} name="NameTech" id="" />
                </div>
                <div>
                    <h2>Selecionar Status</h2>
                    <select name="SelectNivel" ref={register({ required: "Campo obrigatório" })} id="">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                </div>
                    <button type="submit">Salvar Alterações</button>
            </form> */}
        </ModalStyle>
    )
}

