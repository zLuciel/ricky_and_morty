import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../redux/actions/actions";
import { ContainerDetails } from "./css/Details";
//**redux */
import { useDispatch, useSelector } from "react-redux";
import BtnDetails from "./Button/BtnDetails";
import { CardDetails } from "./CardDetails";

const Details = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  
  useEffect(() => {
    dispatch(getCharacter(Number(params.details)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.details]);

  return (
    <ContainerDetails>
      <h1>Details Characters</h1>
      <div className="flex-container-details">
        <div className="flex-details">
          {character.map((el) => (
            <CardDetails
              key={el.id}
              name={el.name}
              image={el.image}
              species={el.species}
              gender={el.gender}
              status={el.status}
              origin={el.origin.name}
            />
          ))}
        </div>
      </div>
      <div style={{ width: "100px", height: "32px" }}>
        <BtnDetails side={"back"} ruta={"/personajes/1"} />
      </div>
    </ContainerDetails>
  );
};

export default Details;
