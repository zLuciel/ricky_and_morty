import { BsFillSuitHeartFill } from 'react-icons/bs'; 
import { ImHeartBroken } from 'react-icons/im';
import { BiGhost } from 'react-icons/bi';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerCharacter } from './css/Character'

const Character = ({img,name,species,gender,id,type,status}) => {
  const [infoView,setInfoView] = useState(false)
  const Mostrar = ()=> setInfoView(true)
  const Ocultar = ()=> setInfoView(false)

  return (
    <ContainerCharacter status={status} infoView={infoView} onMouseOver={Mostrar}  onMouseOut={Ocultar}>
       <div className='img-card'>
        <img src={img} alt={name} />
        <span  className='favorite'>{status} {status === "Alive"? <BsFillSuitHeartFill className='icon-live'/>: status === "unknown" ? <BiGhost className='icon-live'/>:<ImHeartBroken className='icon-live'/>}</span>
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
