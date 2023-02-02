import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Character from "./Character";
import { GridCharacter } from "./css/GridCharacter";

export const Favorite = () => {
  const favorite = useSelector((state) => state.favorite);
  useEffect(()=>{

  },[favorite])

if(favorite.length === 0){ 
  return <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",height:"93vh"}}>Agrega tus personajes favoritos</h1>
}
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <GridCharacter>
      {
        /*favorite.map(el=> <div><p>{el.name}</p><img src={el.image} alt={el.name} /></div>)*/
        favorite.map((el) => (
          <Character
          type={el.gender}
           favorite={true}
            status={el.status}
            key={el.id}
            img={el.image}
            name={el.name}
            species={el.species}
            gender={el.gender}
            id={el.id}
          />
        ))
      }
    </GridCharacter>
    </div>
  );
};
