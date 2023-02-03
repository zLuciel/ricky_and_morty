import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../redux/actions/actions'
import { ContainerDetails } from './css/Details'
//**redux */
import { useDispatch,useSelector } from 'react-redux'
import BtnDetails from './Button/BtnDetails'
const Details = () => {

 const params = useParams()
 const dispatch = useDispatch()
 const character = useSelector((state)=> state.character)
 useEffect(()=>{
  /* props.getCharacters(Number(params.details))*/
   dispatch(getCharacter(Number(params.details))) 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[params.details])
 
   return(
    
    <ContainerDetails>
      <h1>Details Characters</h1>
      <div className='flex-container-details'>
        <div className='flex-details'>
       {
        character.map(el=> (
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
        </div>
        <div style={{width:"100px",height:"32px"}}>
        <BtnDetails side={"back"} ruta={"/personajes/1"}/>
        </div>
        
    </ContainerDetails>
   )
  
}

  export default Details;
