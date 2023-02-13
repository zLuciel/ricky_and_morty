import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addFavorite } from '../redux/actions/actions';
import { CardSearchContainer } from './css/CardSearch'

export const CardSearch = ({name,img,id}) => {
  const distpacth = useDispatch();
  const handleAddFavorite = () => distpacth(addFavorite(id,"search"));
  return (
    <CardSearchContainer>
      <NavLink className="link-search" to={"/personajes/details/All/"+id}>
         <div>
            <img src={img} alt={name} />
        </div>
        <p>{name}</p>
      </NavLink>
       <button onClick={handleAddFavorite} className='btn-favorite'>favorite</button>
    </CardSearchContainer>
  )
}
