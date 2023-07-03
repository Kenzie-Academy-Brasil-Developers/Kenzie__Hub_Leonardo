import React from 'react';
import { useState } from 'react';
import { RegisterStyle } from './RegisterStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerSchema } from '../Zod/SchemasZod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../Services/services';

function RenderRegister({}) {
  const { register, handleSubmit ,formState : {errors}} = useForm({
    resolver: zodResolver(registerSchema)
  });
  const navigate = useNavigate();

  const notify = (a) => {
    toast(a);
  };

  


  async function onSubmit (data){
      const requestData = {
          "email":  data.email,
          "password": data.senha,
          "name": data.nome,
          "bio": data.bio,
          "contact": data.contato,
          "course_module": data.course_module
          }
      console.log(requestData)

    
        await api.post('/users', requestData)
          .then(response => {
            notify('Conta Criada')
            setTimeout(() => {
              navigate('/login');
      
            }, 3000);
          })
          .catch(error => {
            notify(error.message)
            console.log(error);
          })
    }
  return (
    <RegisterStyle>
      <section>
      <div className='header'>
      <svg width="145" height="21" viewBox="0 0 145 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 20.0292H3.94012V14.7333L5.87833 12.3674L10.9832 20.0292H15.6968L8.6992 9.73758L15.6149 1.39326H10.8922L4.18581 9.61019H3.94012V1.39326H0V20.0292Z" fill="#FF577F"/>
  <path d="M23.4503 20.3022C26.9081 20.3022 29.2376 18.6188 29.7836 16.0254L26.1983 15.7888C25.8071 16.8535 24.8061 17.4085 23.514 17.4085C21.5757 17.4085 20.3473 16.1255 20.3473 14.0417V14.0326H29.8655V12.9679C29.8655 8.21795 26.99 5.87026 23.2956 5.87026C19.1826 5.87026 16.5164 8.79122 16.5164 13.1044C16.5164 17.5359 19.1462 20.3022 23.4503 20.3022ZM20.3473 11.6303C20.4292 10.0379 21.6394 8.76393 23.3593 8.76393C25.0427 8.76393 26.2074 9.96507 26.2165 11.6303H20.3473Z" fill="#FF577F"/>
  <path d="M36.7841 11.9488C36.7932 10.1471 37.8669 9.09151 39.432 9.09151C40.9881 9.09151 41.9253 10.1107 41.9162 11.8214V20.0292H45.7926V11.1298C45.7926 7.87217 43.8817 5.87026 40.9699 5.87026C38.8952 5.87026 37.3937 6.88941 36.7659 8.51824H36.6021V6.05225H32.9076V20.0292H36.7841V11.9488Z" fill="#FF577F"/>
  <path d="M49.2875 20.0292H61.0351V16.9353H54.3742V16.8353L60.7985 8.57283V6.05225H49.5241V9.14611H56.1304V9.2462L49.2875 17.7179V20.0292Z" fill="#FF577F"/>
  <path d="M64.5118 20.0292H68.3882V6.05225H64.5118V20.0292ZM66.4591 4.25053C67.6147 4.25053 68.5611 3.36787 68.5611 2.28502C68.5611 1.21127 67.6147 0.328613 66.4591 0.328613C65.3125 0.328613 64.3662 1.21127 64.3662 2.28502C64.3662 3.36787 65.3125 4.25053 66.4591 4.25053Z" fill="#FF577F"/>
  <path d="M78.3756 20.3022C81.8334 20.3022 84.1629 18.6188 84.7089 16.0254L81.1237 15.7888C80.7324 16.8535 79.7314 17.4085 78.4393 17.4085C76.5011 17.4085 75.2726 16.1255 75.2726 14.0417V14.0326H84.7908V12.9679C84.7908 8.21795 81.9153 5.87026 78.2209 5.87026C74.1079 5.87026 71.4417 8.79122 71.4417 13.1044C71.4417 17.5359 74.0715 20.3022 78.3756 20.3022ZM75.2726 11.6303C75.3545 10.0379 76.5648 8.76393 78.2846 8.76393C79.968 8.76393 81.1328 9.96507 81.1419 11.6303H75.2726Z" fill="#FF577F"/>
  <path d="M94.3489 20.0292H98.289V12.331H106.288V20.0292H110.219V1.39326H106.288V9.08241H98.289V1.39326H94.3489V20.0292Z" fill="#FF577F"/>
  <path d="M122.87 14.0781C122.879 15.9526 121.596 16.9353 120.204 16.9353C118.739 16.9353 117.792 15.9071 117.783 14.2601V6.05225H113.907V14.9516C113.916 18.2184 115.827 20.2112 118.639 20.2112C120.741 20.2112 122.251 19.1283 122.879 17.4904H123.025V20.0292H126.746V6.05225H122.87V14.0781Z" fill="#FF577F"/>
  <path d="M130.432 20.0292H134.254V17.7907H134.427C134.964 18.9555 136.138 20.2567 138.394 20.2567C141.579 20.2567 144.063 17.7361 144.063 13.0589C144.063 8.25435 141.47 5.87026 138.404 5.87026C136.065 5.87026 134.946 7.2625 134.427 8.39994H134.309V1.39326H130.432V20.0292ZM134.227 13.0407C134.227 10.5474 135.282 8.95502 137.166 8.95502C139.086 8.95502 140.105 10.6202 140.105 13.0407C140.105 15.4794 139.068 17.1719 137.166 17.1719C135.301 17.1719 134.227 15.534 134.227 13.0407Z" fill="#FF577F"/>
  </svg>
      <Link to="/login">
        <button className='back' onClick={()=>{localStorage.clear()}}>Voltar</button>
      </Link>
      </div>
      <form className='forms' onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie Sua Conta</h1>
          <h3>Rapido e grátis, vamos nessa</h3>
          <h2>Nome</h2>
          <input
            placeholder='Digite aqui seu nome'
            type="text"
            {...register('nome')} 
          />
            {errors.nome ? <span className="errorStyle">{errors.nome.message}</span> : null}

          <h2>Email</h2>
          <input
            placeholder='Digite aqui seu email'
            type="email"
            {...register('email')} 
          />
          {errors.email ? <span className="errorStyle">{errors.email.message}</span> : null}
          <h2>Senha</h2>
          <input
            placeholder='Digite aqui sua senha'
            type="password"
            {...register('senha')}
          />
          {errors.senha ? <span className="errorStyle">{errors.senha.message}</span> : null}
          <h2>Confirmar Senha</h2>
          <input
            placeholder='Digite novamente sua senha'
            type="password"
            {...register('confirm')}
          />
          {errors.confirm ? <span className="errorStyle">{errors.confirm.message}</span> : null}


          <h2>Bio</h2>
          <input
            placeholder='Fale sobre você'
            type="text"
            {...register('bio')}
          />
          {errors.bio ? <span className="errorStyle">{errors.bio.message}</span> : null}
          <h2>Contato</h2>
          <input
            placeholder='Opção de contato'
            type="text"
            {...register('contato')} 
          />
          {errors.contato ? <span className="errorStyle">{errors.contato.message}</span> : null}
          <h2>Selecione o módulo</h2>
          <select  {...register('course_module')}> 
            <option value="" hidden>Selecione um modulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
          </select>
          {errors.course_module ? <span className="errorStyle">{errors.course_module.message}</span> : null}
          <button className='sign-up' type="submit">Cadastrar</button>
        </form>
      </section>
    </RegisterStyle>
  );
}

export default RenderRegister;
