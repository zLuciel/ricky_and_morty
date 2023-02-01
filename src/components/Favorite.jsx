import React from 'react'
import { useSelector } from 'react-redux'

export const Favorite = () => {
  const favorite = useSelector((state)=> state.favorite)
  return (
    <div>
      {
        favorite.map(el=> <p>{el.name}</p>)
      }
    </div>
  )
}
