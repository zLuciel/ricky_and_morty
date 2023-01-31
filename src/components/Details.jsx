import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../redux/actions/actions'
import { connect } from 'react-redux'
import { ContainerDetails } from './css/Details'
import {BtnPersonaje} from "./Button/BtnPersonaje"
const Details = (props) => {

 const params = useParams()

 const [page, setPage] = useState(Number(params.details));
 useEffect(()=>{
  /* props.getCharacters(Number(params.details))*/
   props.getCharacter(Number(params.details))

 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[params.details])
 
   return(
    
    <ContainerDetails>
      <h1>Details Characters</h1>
      <div className='flex-container-details'>
      <BtnPersonaje details={"details/"} page={page} setPage={setPage} numPages={params} side={"back"} />
        <div className='flex-details'>
       {
        props.character.map(el=> (
          <div key={el.id} className='xd'>
       <div className='img-details'>
          <img src={el.image} alt={el.name} />
        </div>
        <div className='info-details'>
        <h1>{el.name}</h1>
        <div>
        <ul>
          <li><b>Gender:</b>{el.gender}</li>
          <li><b>Status:</b>{el.status}</li>
          <li><b>Species:</b>{el.species}</li>
          <li><b>Origin:</b>{el.origin.name}</li>
        </ul>
        </div>
        </div>
       </div>
        ))
       }
        </div>
        <BtnPersonaje details={"details/"} page={page} setPage={setPage} numPages={params} side={"skip"}/>
        </div>
    </ContainerDetails>
   )
  
}

const mapStateToProps = (state) => {
    return {
      character: state.character,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
     /* getCharacters:(num)=>dispatch(getCharacters(num)),*/
      getCharacter: (id) => dispatch(getCharacter(id)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Details);
