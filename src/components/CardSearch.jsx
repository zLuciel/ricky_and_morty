import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardSearchContainer } from './css/CardSearch'

export const CardSearch = ({name,img,id}) => {
  return (
    <CardSearchContainer>
      <NavLink className="link-search" to={"/personajes/details/All/"+id}>
         <div>
            <img src={img} alt={name} />
        </div>
        <p>{name}</p>
      </NavLink>
       
    </CardSearchContainer>
  )
}
