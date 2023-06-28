import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { MeuContexto } from './Providers/ContextExample.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MeuContexto> */}
        <BrowserRouter>
           <App />
        </BrowserRouter>
      <ToastContainer />
    {/* </MeuContexto> */}
  </React.StrictMode>,
)
