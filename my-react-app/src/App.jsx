import { useState } from 'react'
import { GlobalStyle } from './Components/GlobalConfigs/GlobalSettings'
import { Reset } from './Components/GlobalConfigs/Reset'
import RenderLogin from './Components/Login/Login'
import RenderRegister from './Components/Register/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Reset/>
    <GlobalStyle/>
    <RenderLogin/>
    {/* <RenderRegister/> */}
    </>
  )
}

export default App
