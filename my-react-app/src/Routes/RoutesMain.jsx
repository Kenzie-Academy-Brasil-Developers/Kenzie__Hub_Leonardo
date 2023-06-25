import { Routes, Route } from 'react-router-dom';
import RenderLogin from '../Components/Login/Login';
import RenderRegister from '../Components/Register/Register';
import RenderDashboard from '../Components/Dashboard/Dashboard';
export const RoutesMain = ()=>{
    return(
        <Routes>
             <Route path="/" element={<RenderLogin/>} />
             <Route path="/login" element={<RenderLogin/>} />
             <Route path="/dashboard" element={<RenderDashboard/>} />
             <Route path="/register" element={<RenderRegister/>} />
        </Routes>
    )

}