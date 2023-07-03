import { useState } from 'react'
import { GlobalStyle } from './Components/GlobalConfigs/GlobalSettings'
import { Reset } from './Components/GlobalConfigs/Reset'
import RenderLogin from './Components/Login/Login'
import RenderRegister from './Components/Register/Register'
import { RoutesMain } from './Routes/RoutesMain'
import RenderListTech from './Components/ListTech/ListTech'
import UserProvider from './Providers/ContextExample'
function App() {
  return (
    <>
    <UserProvider>
        <RoutesMain />
            <Reset/>
        <GlobalStyle/>
    </UserProvider>
    </>
  )
}

export default App
