import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Character from "./Character";
import { ContainerFavorite } from "./css/Favorite";
import { GridCharacter } from "./css/GridCharacter";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export const Favorite = () => {
  const favorite = useSelector((state) => state.favorite);
  useEffect(() => {}, [favorite]);

  if (favorite.length === 0) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "93vh",
        }}
      >
        Add your favorite characters
        <BsFillBookmarkHeartFill style={{ color: "greenyellow" }} />
      </h1>
    );
  }
  return (
    <ContainerFavorite>
      <h1>Characters Favorite</h1>
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
    </ContainerFavorite>
  );
};
