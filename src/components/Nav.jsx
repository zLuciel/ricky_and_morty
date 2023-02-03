import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { Cabezera, ContainerNav } from "./css/Nav";
import Search  from "./Search";
import { BiLogOutCircle } from 'react-icons/bi';
const Nav = () => {
  const navigate = useNavigate()

  const handleLogOut= ()=>{
      localStorage.setItem("login",false)
      navigate("/")
  }
  
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
              <NavLink to={`/personajes/favorite`} className="link">Favorite</NavLink>
            </li>
            <li>
              <NavLink to={`/about`} className="link">About</NavLink>
            </li>
            <li>
            <NavLink onClick={handleLogOut} className="link" to="/"><BiLogOutCircle className="icon-login"/></NavLink>
            </li>
          </ul>
        </ContainerNav>
      </div>
    </Cabezera>
  );
};
export default Nav;
