import React, { useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { Cabezera, ContainerNav } from "./css/Nav";
import Search  from "./Search";

const Nav = () => {
  const navigate = useNavigate()

  const handleLogOut= ()=>{
      localStorage.setItem("login",false)
      navigate("/")
  }
  
  /*useEffect(()=>{
    if(localStorage.getItem("login") === true) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[localStorage.getItem("login")])
 console.log(localStorage.getItem("login"));*/
  return (
    <Cabezera>
      <div className="container-flex-header">
        <Search/>
        <ContainerNav>
          <ul>
            <li>
              <NavLink className="link" to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to={`/personajes/1`} className="link">Characters</NavLink>
            </li>
            <li>
              <NavLink to={`/about`} className="link">About</NavLink>
            </li>
            <li>
              <NavLink to={`/personajes/favorite`} className="link">Favorite</NavLink>
            </li>
            <li>
            <NavLink onClick={handleLogOut} className="link" to="/">Log out</NavLink>
            </li>
          </ul>
        </ContainerNav>
      </div>
    </Cabezera>
  );
};
export default Nav;
