import React, { useEffect, useState } from "react";
import { LoginContainerFlex, LoginAnime } from "./css/Login";
import Rigth from "../assets/rigth.png";
import Left from "../assets/left.png";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

//crea un estado global de iniciar sesion

const Login = () => {
  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const [error, setError] = useState(false);

  const handleView = () => (!mostrar ? setMostrar(true) : setMostrar(false));
  const store =localStorage.getItem("login")
  const handleConnect = () => {
    if (password === "invitado@" && gmail ==="invitado@gmail.com") {
      localStorage.setItem("login",true)
      navigate("/home")
    } else {
      setError(true);
    }
  };
 useEffect(()=>{
   if(store === true) navigate("/home")
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[store])
  return (
    <LoginContainerFlex>
      <LoginAnime>
        <img src={Rigth} alt="AnimeLogin" className="login-img-rigth" />
        <img src={Left} alt="AnimeLogin" className="login-img-left" />
        <h1>
          Welcom to <b>Rick and Morty</b>
        </h1>
        <div className="login-usuario">
          <input
            onChange={(e) => setGmail(e.target.value)}
            value={gmail}
            type="text"
            placeholder={"Enter your username"}
          />
        </div>
        <div className="login-password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="btn-ingresar" onClick={handleConnect}>
          Connect
        </button>
        <p className="login-con">Enter as a guest</p>
        <IoMdArrowDropdownCircle
          onClick={handleView}
          className="Login-google"
        />
        {mostrar && (
          <div>
            <p>
            <b>Gmail</b>: invitado@gmail.com
            </p>
            <p>
            <b>Password</b>: invitado@
            </p>
          </div>
        )}
      </LoginAnime>
    </LoginContainerFlex>
  );
};

export default Login;
