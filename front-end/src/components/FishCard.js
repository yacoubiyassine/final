import "./FishCard.css"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import {delete_fish, edit_fish} from "../redux/Action/fishAction";
import { FaShoppingCart } from "react-icons/fa";
import Panier from "./Panier";
const FishCard = ({el}) => {
   
        const [show, setShow] = useState(false);
        const dispatch = useDispatch();
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispacth = useDispatch();
        const [image, setImage] = useState(el.image);
        const [prix, setPrix] = useState(el?.prix);
        const [fish, setFish] = useState(el.fish);
        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(edit_fish(el._id, { image, fish, prix }));
          handleClose();
        };
    const [count,setCount]=useState(0)
  return (
    <div>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.type}</Card.Title>
          <Card.Text>
            {el.prix}
          </Card.Text>
          <button className='btn' onClick={()=>count>=5?null:setCount(count+1)}>+</button>
          {count}
          <button className='btn' onClick={()=>count>0?setCount(count-1):null}>-</button>
         
          <Panier count={count} el={el}/>
          <Button
            variant="danger"
            onClick={() => dispacth(delete_fish(el._id))}
          >
            Delete
          </Button>
          <Button variant="warning" onClick={handleShow}>
            EDIT
          </Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default FishCard;