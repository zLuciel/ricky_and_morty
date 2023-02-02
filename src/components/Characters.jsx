import { useEffect, useState } from "react";
import {useDispatch,useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { getCharacters, getGender } from "../redux/actions/actions";
import {GridCharacter} from "./css/GridCharacter"
import Character from "./Character";
import { ContainerCharacters } from "./css/Characters";
import Filters from "./Filters.jsx";
import {Gender,Species,Status} from "../json/FilterLi"
import Loading from "./Loading";
import  {BtnPersonaje}  from "./Button/BtnPersonaje";


const Characters = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams();
  
  const [page, setPage] = useState(Number(params.pages));
  const [gender,setGender] = useState("all")
  const [query,setQuery] = useState("")
  
  const characters = useSelector((state)=> state.characters)
  const totalPages = useSelector((state)=> state.totalPages)
  
  useEffect(() => {
    if(totalPages === null){
    setPage(0)
    navigate(`/personajes/${page + 1}`)
  }
    gender !== "" ? dispatch(getGender(page,query,gender)) :  dispatch(getCharacters(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [page,gender,query]);


if(characters.length === 0){
return <Loading/> 
}
  return (
    <ContainerCharacters>
      <h1>Personajes</h1>
      <div className="flex-filter">
      <Filters lis={Species} name={"species"} setQuery={setQuery} setGender={setGender}/>
      <Filters lis={Gender} name={"gender"} setQuery={setQuery} setGender={setGender}/>
      <Filters lis={Status} name={"status"} setQuery={setQuery} setGender={setGender} />
      </div>
        <GridCharacter>
       {characters.map((el) => (
          <Character
          favorite={false}
            status={el.status}
            type={gender}
            key={el.id}
            name={el.name}
            img={el.image}
            species={el.species}
            gender={el.gender}
            id={el.id}
          />
        ))}
      </GridCharacter>
     <div className="btn-page">
     {params.pages !== "1" && <BtnPersonaje type={""}  details={""} page={page} numPages={params} setPage={setPage} side={"back"} />}
     <BtnPersonaje details={""} type={""} page={page} numPages={params} setPage={setPage} side={"skip"} />
     </div>
    </ContainerCharacters>
  );
};


export default Characters;
