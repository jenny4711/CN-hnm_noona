import React from 'react'
import {  useNavigate } from 'react-router-dom';

const Login = ({setAuthen}) => {
  const navigate = useNavigate()
  const loginUser=(e)=>{
    e.preventDefault();
    setAuthen(true);
    navigate('/')
    console.log('login user!')
  }
  return (
    <form onSubmit={(e)=>loginUser(e)} className='login-form'>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password"/>
<button className='loginSec-btn'>Submit</button>
    </form>
  )
}

export default Login