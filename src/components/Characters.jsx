import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";
import { getCharacters, getGender } from "../redux/actions/actions";
import { BtnPages } from "./BtnPages";
import Character from "./Character";
import { ContainerCharacters } from "./css/Characters";
import Filters from "./Filters.jsx";
import {Gender,Status} from "../json/FilterLi"
import Loading from "./Loading";

const Characters = (props) => {
  const params = useParams();
  const [page, setPage] = useState(Number(params.pages));
  const [gender,setGender] = useState("")
  const [query,setQuery] = useState("")
  useEffect(() => {
    if(gender !== ""){
     props.getGender(page,query,gender)
    }else{
      props.getCharacters(page);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page,gender,query]);


if(props.characters.length === 0){
return <Loading/> 
}

  return (
    <ContainerCharacters>
      <h1>Personajes</h1>
      <div className="flex-filter">
      <Filters lis={Gender} name={"species"} setQuery={setQuery} setGender={setGender}/>
      <Filters lis={Gender} name={"gender"} setQuery={setQuery} setGender={setGender}/>
      <Filters lis={Status} name={"status"} setQuery={setQuery} setGender={setGender} />
      </div>
        <div className="grid-characters">
       {  props.characters.map((el) => (
          <Character
            key={el.id}
            name={el.name}
            img={el.image}
            species={el.species}
            gender={el.gender}
            id={el.id}
          />
        ))}
      </div>
      <BtnPages page={page} numPages={params} setPage={setPage} />
    </ContainerCharacters>
  );
};



const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (num) => dispatch(getCharacters(num)),
    getGender: (num,query,value) => dispatch(getGender(num,query,value))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Characters);
