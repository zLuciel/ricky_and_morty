import React, { useState } from "react";
import { IconHamburger, NavHamburger } from "./css/Hamburguesa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import ContainerNavLink from "./ContainerNavLink";

export const Hamburguesa = () => {
  const [view, setView] = useState(false);
  const handleViewNav = () => (view ? setView(false) : setView(true));

  return (
    <>
      <IconHamburger view={view}>
        <GiHamburgerMenu className="icon-hambur" onClick={handleViewNav} />

        <NavHamburger view={view}>
          <RiCloseCircleFill className={`icon-close`} onClick={handleViewNav} />
          <ContainerNavLink mostrar={true} />
        </NavHamburger>
      </IconHamburger>
    </>
  );
};
