import React from 'react';
import { useState } from 'react';
import { LoginStyle } from './LoginStyle';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RenderLogin({}) {

  const notify = (a) => {
    toast(a);
  };

  const api = 'https://kenziehub.herokuapp.com'; 
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${api}/sessions`, data);
      toast(`Seja bem Vindo ${response.data.user.name}`)
      console.log(response.data);
      localStorage.clear();
      localStorage.setItem("@token",response.data.token)
      localStorage.setItem("@id",response.data.user.id)
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000);
    } catch (error) {
      if(error.response.data.message == "Incorrect email / password combination"){
      toast("Email ou Senha Incorreto");
      }
      else{
      toast(error.response.data.message);
      }
    }
  };

  return (
    <LoginStyle>
      <section>
        <svg width="145" height="21" viewBox="0 0 145 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <h2>Email</h2>
          <input
            type="email"
            placeholder='Insira seu email'
            required
            id="InputEmailLogin"
            {...register('email', { required: true })}
          />

          <h2>Senha</h2>
          <input
            type="password"
            required
            minLength="6"
            placeholder='Insira sua senha'
            id="InputPasswordLogin"
            {...register('password', { required: true })}
          />

          <button className='Entry' type="submit">Entrar</button>

          <h3>Ainda não possui uma conta?</h3>
          <Link to="/register">
            <button className='sign-up'>Cadastre-se</button>
          </Link>
        </form>
      </section>
    </LoginStyle>
  );
}


export default RenderLogin;
