import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { get_fish } from '../redux/Action/fishAction';
import "./FishList.css"
import FishCard from './FishCard';

const FishList = () => {
   const dispatch=useDispatch()
   useEffect(()=>{dispatch(get_fish())},[dispatch])
   const fishes=useSelector((state)=>state.fishReducer.fishes)
  
   
  return (
    <div className='fish-container'>
    {fishes.map((el) => <FishCard key={el._id} el={el}/>)}
    
    </div>
  )
}

export default FishList