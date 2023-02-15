
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
        favorite: action.payload
    }
    //**aregglando favoritos */
    case ADD_FAVORITE:
    return {
        ...state,
        favorite: action.payload,
    }
     //**aqui termina */
    default:
        return {...state}
  }
}
export default reducer;