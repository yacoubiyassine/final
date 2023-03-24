import axios from "axios"

import { GET_FISH } from "../ActionTypes/fishType"

export const get_fish=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/fish/fish')
        dispatch({type:GET_FISH,payload:res.data})
    } catch (error) {
        
    }
}
export const edit_fish = (id,data)=>async(dispatch)=> {
    try {
         await axios.put(`/api/fish/update/${id}`,data)
        dispatch(get_fish())
    }
catch (error) {
    console.log(error)
  }
 }
 export const delete_fish = (id) => async (dispatch) => {
    try {
      await axios.delete(`/del/fish/${id}`);
      dispatch(get_fish());
    } catch (error) {
      console.log(error);
    }
}
export const add_fish = (data) => async (dispatch) => {
    try {
      await axios.post("/post/fish", data);
      dispatch(get_fish());
    } catch (error) {
      console.log(error);
    }
}