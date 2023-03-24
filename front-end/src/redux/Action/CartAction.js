// export const addToCart={fish, quantite}=>(dispatch, getstate)=>{
//     var cartItem={
//         name:fish.name,
//         _id:fish._id,
//         Image:fish.image,
//         quantite:quantite,
//         prices:fish.prices,
//         prix:fish.prices[0]*quantite
//     }
//     dispatch({type:'ADD_TO_CART',payload:cartItem})

//     const cartItems=getState().cartReducer.cartItems
//     localStorage.setItem('cartItems',JSON.stringify(cartItem))
       // dispatch({type:'ADD_TO_CART',payload:cartItem
// }
       // dispatch({type:'DELETE_FROM_CART',payload:fish//     const cartItems=getState().cartReducer.cartItems
//     localStorage.setItem('cartItems',JSON.stringify(cartItem))

// export  const deletFromCart=(fish)=>(dispatch, getState)=>{

// }

// 


import { DECREMENT,INCREMENT } from "../ActionTypes/CartType";

export const increment=()=>{
       return {type:INCREMENT}
}
export const decrement=()=>{
       return {type:DECREMENT};
};