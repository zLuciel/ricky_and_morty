
import { GET_CHARACTERS, GET_CHARACTER, GET_FILTER_GENDER, GET_SEARCH } from "../actions-types/action-types";
 /*const ID = state.users.find(user => user.id === action.payload)*/
    //const indexs = state.users.indexOf(action.payload)
    //const xdd = state.users.splice(state.users.indexOf(action.payload),1)
const initialState = {
    characters:[],
    character:[],
    searchCharacters:[]
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case GET_CHARACTERS: return {
        ...state,
        characters: action.payload
    }
    case GET_CHARACTER: return {
        ...state,
        character: [action.payload] 
        /*character: state.characters.filter(el => el.id === action.payload)*/
    }
    case GET_FILTER_GENDER: return {
        ...state,
        characters: action.payload
    }
    case GET_SEARCH: return {
        ...state,
        searchCharacters: action.payload
    }
    default:
        return {...state}
  }
}
export default reducer;