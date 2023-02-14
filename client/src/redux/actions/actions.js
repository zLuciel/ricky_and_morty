import { GET_CHARACTER, GET_FILTER_GENDER, GET_SEARCH, ADD_FAVORITE, DELETE } from "../actions-types/action-types";
const URL = "https://rickandmortyapi.com/api/character"
const url = "https://ricky-and-morty-api-zluciel.vercel.app";

export const getCharacter = (id) => {
  return function (dispatch) {
    fetch(`${url}/details/${id}`)
    //fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_CHARACTER,payload:data}));
  };
};

export const getGender = (num,query,value) => {
  return function (dispatch) {
    fetch(`${url}/filter?page=${num}&query=${query}&type=${value}`)
    //fetch(`${URL}/?page=${num}&${query}=${value}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_FILTER_GENDER,payload:data}));
  };
};

export const getSearch = (value) => {
  return function (dispatch) {
    fetch(`${url}/search?name=${value}`)
    //fetch(`${URL}/?name=${value}`)
    .then(res => res.json())
    .then(data => dispatch({type:GET_SEARCH,payload:data.results}));//,results
  };
};

export const addFavorite = (id,type)=>{
  return {
    type:ADD_FAVORITE,
    payload:{id,type}
  }
}
export const Delete = (id)=>{
  return {
    type:DELETE,
    payload:id
  }
}