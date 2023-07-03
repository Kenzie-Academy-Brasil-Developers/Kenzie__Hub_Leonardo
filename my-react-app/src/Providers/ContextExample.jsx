import axios from "axios"
import { createContext, useEffect, useState } from "react"
import RouterProtect from "../Routes/Protectrouter"
import { Navigate } from "react-router-dom"
export const UserContext = createContext({})

const UserProvider = ({children})=>{

  const [ObjNewTech,setObjNewTech] = useState({})
  const [user,setUser] = useState(null)
  const [Techs,setTechs] = useState([])
  const TokenUser = localStorage.getItem('@token')
  const IdUser = localStorage.getItem('@id')
  useEffect(()=>{
    
    const loadUser = async () => {
      try{
        const api = 'https://kenziehub.herokuapp.com'; 
        const response = await axios.get(`${api}/users/${IdUser}`, {
          headers:{
            Authorization: `Bearer ${TokenUser}`
          }
        });
        setUser(response.data)
        setTechs()
      } catch(error){
          console.log(error)
      }
    }

    if(TokenUser && IdUser){
      loadUser()
    }

    
  })

  return(
    <UserContext.Provider value={{ ObjNewTech, setObjNewTech,user,setUser}}>
  {children}
  </UserContext.Provider>
  )
}

export default UserProvider