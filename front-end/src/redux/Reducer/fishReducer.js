import { GET_FISH } from "../ActionTypes/fishType"


const initialState = {fishes:[
    
]}

const fishReducer= (state = initialState, { type, payload }) => {
 switch (type) {
  case GET_FISH:
    return{
      ...state,fishes:payload.fish
    }
  default:
    return state
  }
}
export default fishReducer