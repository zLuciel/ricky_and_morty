import React, { useState } from 'react'
import { LoginContainerFlex,LoginAnime } from './css/Login'
import Rigth from "../assets/rigth.png"
import Left from "../assets/left.png"
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()
  const [mostrar,setMostrar] = useState(false)
  const handleView=()=> !mostrar ? setMostrar(true) : setMostrar(false)
  const handleConnect =()=> navigate("/home")
  return (
    <LoginContainerFlex>
        <LoginAnime>
            <img src={Rigth} alt="AnimeLogin" className='login-img-rigth'/>
            <img src={Left} alt="AnimeLogin" className='login-img-left'/>
           <h1>Welcom to <b>Ricck and Morty</b></h1>
           <div className='login-usuario'>
            <input type="text" placeholder='Enter your username'/>
           </div>
           <div className='login-password'>
            <input type="password" placeholder='Enter your password'/>
           </div>
           <button className='btn-ingresar' onClick={handleConnect}>Connect</button>
          <p className='login-con'>Enter as a guest</p>
           <IoMdArrowDropdownCircle onClick={handleView} className="Login-google" />
          {mostrar && <div>
            <p>Password: invitado@</p>
            <p>Gmail: invitado@gmail.com</p>
           </div>}
           
        </LoginAnime>
    </LoginContainerFlex> 
  )
}

export default Login
