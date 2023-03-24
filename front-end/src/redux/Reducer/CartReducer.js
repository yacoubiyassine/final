// export const CartReducer=(state={cartIems:[]},action)=>{
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const alreadyExists = state.cartIems.filter(item=>item._id===action.payload._id)
//             if(alreadyExists){
//                    return{
//                     ...state,cartIems:state.cartIems.map(item=>item._id===action.payload._id ? action.payload :item
//                    }
//             }else{

// import { INCREMENT } from "../ActionTypes/CartType";

//             }
        
        
        
//         return{
//             ...state,cartIems:[...state.cartIems,action.payload]
//         }
            
//          default:return state
//     }
// }
import { DECREMENT, INCREMENT } from "../ActionTypes/CartType"
const initialState = {
    count:0,
}

const CartReducer (state = initialState, { type, payload }) => {
  switch (action.type) {
       case INCREMENT:
     return (...state,count:state.count+1)
       case DECREMENT:
     return (...state,count:state.count-1)   
       default
     return state;
  }
}
export default CartReducer;