import { Routes, Route, useNavigate } from 'react-router-dom';
import RenderLogin from '../Components/Login/Login';
import RenderRegister from '../Components/Register/Register';
import RenderDashboard from '../Components/Dashboard/Dashboard';
import { useEffect } from 'react';
export const RoutesMain = ()=>{
    const navigate = useNavigate();
    const TokenUser = localStorage.getItem('@token')
    const IdUser = localStorage.getItem('@id')

    useEffect(()=>{
    
        if(TokenUser && IdUser){
            navigate('/dashboard')
          }else {
            navigate('/login')
          }

    },[])
      
    return(
        <Routes>
             <Route path="/" element={<RenderLogin/>} />
             <Route path="/login" element={<RenderLogin/>} />
             <Route path="/dashboard" element={<RenderDashboard/>} />
             <Route path="/register" element={<RenderRegister/>} />
        </Routes>
    )

}