import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";
import fishReducer from "./fishReducer";
    
const rootreducer=combineReducers({UserReducer,ErrorReducer,fishReducer})
export default rootreducer