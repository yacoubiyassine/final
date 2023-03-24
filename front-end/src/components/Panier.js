import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaShoppingCart } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { get_fish } from '../redux/Action/fishAction';
const Panier = ({count,el}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
   useEffect(()=>{dispatch(get_fish())},[dispatch])
   const fishes=useSelector((state)=>state.fishReducer.fishes)
  return (
    <div>
    
    <Button variant="success" onClick={handleShow}>
    <FaShoppingCart/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{count}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      {fishes.map((element)=> 
        element.panier==true ? <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={element.imageUrl} />
        <Card.Body>
          <Card.Title>{element.type}</Card.Title>
          <Card.Text>
            {element.prix}
          </Card.Text>
        </Card.Body>
      </Card>:null
    )}
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Panier