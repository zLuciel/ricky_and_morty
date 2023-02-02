import { GET_CHARACTERS, GET_CHARACTER, GET_FILTER_GENDER, GET_SEARCH, ADD_FAVORITE, DELETE } from "../actions-types/action-types";
const URL = "https://rickandmortyapi.com/api/character"


// que reciba el parametro id que ese id sea un estado del un boton
export const getCharacters = (num) => {
  return function (dispatch) {
    fetch(`${URL}/?page=${num}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_CHARACTERS,payload:data}));
  };
};

export const getCharacter = (id) => {
  return function (dispatch) {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_CHARACTER,payload:data}));
  };
};

export const getGender = (num,query,value) => {
  return function (dispatch) {
    fetch(`${URL}/?page=${num}&${query}=${value}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_FILTER_GENDER,payload:data}));
  };
};

export const getSearch = (num,query,value) => {
  return function (dispatch) {
    fetch(`${URL}/?page=${num}&${query}=${value}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_SEARCH,payload:data.results}));
  };
};

export const addFavorite = (id)=>{
  return {
    type:ADD_FAVORITE,
    payload:id
  }
}
export const Delete = (id)=>{
  return {
    type:DELETE,
    payload:id
  }
}