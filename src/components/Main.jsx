import React, { useEffect } from "react";
import { ContainerMain, FlexMain } from "./css/Main";
import RickyAndMorty from "../assets/main.png";
import VideoMain from "../assets/videoRyck.mp4"
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {



  return (
    <ContainerMain>
      <FlexMain>
        <div className="main-info">
          <h1>Rick and Morty</h1>
          <p>
            Después de haber estado desaparecido durante casi 20 años, Rick
            Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y
            se va a vivir con ella y su familia utilizando el garaje como su
            laboratorio personal.
          </p>
          <NavLink to={`/personajes/1`}>
          <button>más información</button>
          </NavLink>
          <div className="video-main">
            <video  src={VideoMain} muted autoPlay controls loop></video>
          </div>
        </div>
        <div className="main-img">
          <img src={RickyAndMorty} alt="RickyAndMorty" />
        </div>
      </FlexMain>
    </ContainerMain>
  );
};

export default Main;
