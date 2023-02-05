import { BsFillSuitHeartFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerCharacter } from "./css/Character";
import { useDispatch } from "react-redux";
import { addFavorite, Delete } from "../redux/actions/actions";
import StatusCard from "./StatusCard";
const Character = ({
  img,
  name,
  species,
  gender,
  id,
  type,
  status,
  favorite,
}) => {
  const [infoView, setInfoView] = useState(false);
  const Mostrar = () => setInfoView(true);
  const Ocultar = () => setInfoView(false);
  const navigate = useNavigate()
  const distpacth = useDispatch();
  const handleAddFavorite = () => distpacth(addFavorite(id));
  const handleDelete = () => distpacth(Delete(id));
  const handleNavigate = ()=>  type.length === 0 ? navigate(`/personajes/details/${"all"}/${id}`) : navigate(`/personajes/details/${type}/${id}`)
  return (

    <ContainerCharacter
      onClick={handleNavigate}
      status={status}
      infoView={infoView}
      onMouseOver={Mostrar}
      onMouseOut={Ocultar}
    >
      <div className="img-card">
        <img  src={img} alt={name} />

        <span onClick={handleAddFavorite} className="addFavorite">
          <BsFillSuitHeartFill />
        </span>
        {favorite && (
          <span onClick={handleDelete} className="addFavorite">
            <TiDelete />
          </span>
        )}
        <StatusCard status={status}/>
          <button className="btn-card-id">#{id}</button>
      </div>
      <div className="info-card">
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </ContainerCharacter>
  );
};

export default Character;
