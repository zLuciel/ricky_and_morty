import React from "react";
import { ContainerAbout } from "./css/About";
import { Redes } from "./Redes";

const About = () => {
  return (
    <ContainerAbout>
      <div className="card-about">
        <div className="info-about">
          <h1>
            hola soy <br /><b>Emmanuel Abregú</b>
          </h1>
          <p>
            Futuro Desarollador full stack, gracias por tomarte el tiempo de ver
            mi pagina web y espero te haya gustado nos vemos en el M3{" "}
          </p>
          <Redes/>
        </div>
      </div>
    </ContainerAbout>
  );
};

export default About;
