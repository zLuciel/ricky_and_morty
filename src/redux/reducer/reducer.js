
import { GET_CHARACTER, GET_FILTER_GENDER, GET_SEARCH, ADD_FAVORITE, DELETE } from "../actions-types/action-types";
 /*const ID = state.users.find(user => user.id === action.payload)*/
    //const indexs = state.users.indexOf(action.payload)
    //const xdd = state.users.splice(state.users.indexOf(action.payload),1)
const initialState = {
    characters:[],
    character:[],
    searchCharacters:[],
    favorite:[],
    totalPages:[],
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case GET_CHARACTER: return {
        ...state,
        character: [action.payload] 
    }
    case GET_FILTER_GENDER: 
    let addPagex = []
    for (let i = 1; i <= action.payload.info.pages; i++) {
        addPagex.push(i)
    }
    return {
        ...state,
        totalPages:addPagex,
        characters: action.payload.results 
    }
    case GET_SEARCH: return {
        ...state,
        searchCharacters: action.payload
    }
    case DELETE: return {
        ...state,
        favorite: state.favorite.filter(el => el.id !== action.payload)
    }
    case ADD_FAVORITE:
    let validate = state.favorite.some(el=> el.id === action.payload)
    let add;
    validate ? add=[] : add = state.characters.filter(el => el.id === action.payload);
    return {
        ...state,
        favorite: [...state.favorite,...add],
    }
    default:
        return {...state}
  }
}
export default reducer;