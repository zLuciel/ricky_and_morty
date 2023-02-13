import { useState } from "react";
import { ContainerFilters } from "./css/Filters";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Filters = ({ setGender, lis, setQuery, name,setPage }) => {
  const [mostrar, setMostrar] = useState(false);
  const navigate = useNavigate()
  const opciones = () =>
    mostrar === false ? setMostrar(true) : setMostrar(false);

  const handleAll = (e) => {
    setGender(e.target.innerText);
    setMostrar(false);
    setQuery(name);
  };
  const handlePages = (e)=>{
    setMostrar(false);
    setPage(Number(e.target.innerText))
    navigate(`/personajes/${e.target.innerText}`)
  }
  return (
    <ContainerFilters mostrar={mostrar} name={name}>
      <div className="container-selector">
        <div onClick={opciones}>
          <span className="select-name">
            {name}
            <MdArrowDropDown className="icon-filter" />
          </span>
        </div>
        <ul className="options">
          {lis.map((li, index) => (
           <li key={index} onClick={name === "Pages"?handlePages:handleAll} className="option">{li}</li>
          ))}
        </ul>
      </div>
    </ContainerFilters>
  );
};

export default Filters;
