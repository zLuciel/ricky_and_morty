import React, { useState } from "react";
import { IconHamburger, NavHamburger } from "./css/Hamburguesa";
import { GiHamburgerMenu} from 'react-icons/gi';
import { RiCloseCircleFill} from 'react-icons/ri';
import ContainerNavLink from "./ContainerNavLink";
//import Search from "./Search";
export const Hamburguesa = () => {
  const [view,setView] = useState(false)
  const handleViewNav = ()=>{
    if(view){
     setView(false)
    }else{
   setView(true)
    }
    
  }
  return (
    <>
      <IconHamburger  view={view}>
        <GiHamburgerMenu className="icon-hambur" onClick={handleViewNav}/>
       
      <NavHamburger  view={view} >
        {/*<Search/>*/}
        <RiCloseCircleFill className={`icon-close`} onClick={handleViewNav} />
        <ContainerNavLink mostrar={true}/>
      </NavHamburger>
      
      </IconHamburger>
      
    </>
  );
};
