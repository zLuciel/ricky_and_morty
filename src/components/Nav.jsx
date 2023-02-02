import React, { useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { Cabezera, ContainerNav } from "./css/Nav";
import Search  from "./Search";

const Nav = () => {
  const navigate = useNavigate()
  const store =localStorage.getItem("login")
  const handleLogOut= ()=>{
      if(store){
        localStorage.setItem("login",false)
      }
  }
  useEffect(()=>{
    if(store === false) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
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
            <NavLink onClick={handleLogOut} className="link" to="/">Log out</NavLink>
            </li>
          </ul>
        </ContainerNav>
      </div>
    </Cabezera>
  );
};
export default Nav;
