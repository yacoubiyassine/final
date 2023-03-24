import React, { useState } from "react";
import { useSelector } from "react-redux";


import {  Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const cartstate=useSelector(state=>state.cartReducer)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container">
    <div className="img1">
      <img src='https://i.pinimg.com/564x/f2/eb/c3/f2ebc3f3642c8a1bb33e29de036047d2.jpg' alt=''/>
    </div>
    <div>
      <nav>
        <ul>
          <li>
            <span>
              <Link to="/list">fishList</Link>
            
            </span>
          </li>
          <li>
            <span>Services</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>
              <Link to="/modal">Login</Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/register">register</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
    <div className="img1">
      <img src='https://i.pinimg.com/564x/6f/4f/68/6f4f68326e85b3ec80d922ca482a5e2d.jpg' alt=''/>
    </div>
    </div>
  );
};

export default Navbar;
