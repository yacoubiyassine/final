import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/Action/userAction';
const Modale = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
      dispatch(login({email,password},navigate))
  }
  return (
    <div>
   
  
   
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>

        <Form.Control
          type="password"
          placeholder="*****************"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
      />
    </Form.Group>
  
      </Form>
   
      
    
    
      
      <Button variant="primary" onClick={handleLogin}>
       LOGIN
      </Button>
   

    </div>
  )
}

export default Modale