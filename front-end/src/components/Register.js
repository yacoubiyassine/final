import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../redux/Action/userAction'
import "./Register.css"

const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [phone,setPhone]=useState("")
    const [role,setRole]=useState('user')
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleRegister=()=>{
        dispatch(register({email,password,name,phone,role},navigate))
    }
  return (
    <div className='reg'>
        <input type='text' placeholder='put your name' onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='put your phone' onChange={(e)=>setPhone(e.target.value)}/>
        <input type='email' placeholder='put your email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='put correct password' onChange={(e)=>setPassword(e.target.value)}/>
        
        <button onClick={handleRegister}>register</button>
        
    </div>
  )
}

export default Register