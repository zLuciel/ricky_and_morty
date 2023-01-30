
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContainerCharacter } from './css/Character'

const Character = ({img,name,species,gender,id}) => {
  const [infoView,setInfoView] = useState(false)
  const Mostrar = ()=> setInfoView(true)
  const Ocultar = ()=> setInfoView(false)
  return (
    <ContainerCharacter infoView={infoView} onMouseOver={Mostrar}  onMouseOut={Ocultar}>
      <div className='img-card'>
        <img src={img} alt={name} />
        <NavLink to={"/personajes/details/"+id}>
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
