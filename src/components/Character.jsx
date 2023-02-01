import { BsFillSuitHeartFill } from 'react-icons/bs';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerCharacter } from './css/Character'
import { useDispatch } from 'react-redux';
import {addFavorite} from "../redux/actions/actions"
const Character = ({img,name,species,gender,id,type}) => {
  const [infoView,setInfoView] = useState(false)
  const Mostrar = ()=> setInfoView(true)
  const Ocultar = ()=> setInfoView(false)
  const dispatch = useDispatch()

  const handleAdd = ()=>{
     dispatch(addFavorite(id))
  }


  return (
    <ContainerCharacter infoView={infoView} onMouseOver={Mostrar}  onMouseOut={Ocultar}>
       <div className='img-card'>
        <img src={img} alt={name} />
        <button onClick={handleAdd} className='favorite'><BsFillSuitHeartFill/></button>
        <NavLink to={type.length === 0 ? `/personajes/details/${"all"}/${id}`:`/personajes/details/${type}/${id}`}>
          <button className='btn-card-id'>Information</button>
        </NavLink>
      </div>
      <div className='info-card'>
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{gender}</p>
      </div>
    </ContainerCharacter>
  )
}

export default Character
