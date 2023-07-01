import { createContext, useState } from "react"

export const UserContext = createContext({})

const UserProvider = ({children})=>{
  const [valor,setValor] = useState('Leonardo')
  const [value,setValue] = useState('laele')

  return(
    <UserContext.Provider value={{valor , value}}>
  {children}
  </UserContext.Provider>
  )
}

export default UserProvider