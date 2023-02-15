import React, { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import Character from "./Character";
import { ContainerFavorite } from "./css/Favorite";
import { GridCharacter } from "./css/GridCharacter";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { getFavorite } from "../redux/actions/actions";
export const Favorite = () => {
  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorite);
  useEffect(() => {
    dispatch(getFavorite())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (favorite.length === 0) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        Add your favorite characters
        <BsFillBookmarkHeartFill style={{ color: "greenyellow" }} />
      </h1>
    );
  }
  return (
    <ContainerFavorite>
      <h1 className="titulo-favorite">Characters Favorite</h1>
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
