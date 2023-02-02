import React from "react";
import { NavLink} from "react-router-dom";
import { Cabezera, ContainerNav } from "./css/Nav";
import Search  from "./Search";

const Nav = () => {

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
              <NavLink className="link" to="/personajes/favorite">Favorite</NavLink> 
            </li>
            <li>
            <NavLink className="link" to="/">Login</NavLink>
            </li>
          </ul>
        </ContainerNav>
      </div>
    </Cabezera>
  );
};
export default Nav;
