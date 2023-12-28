import React, { useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Router, Routes, Link } from 'react-router-dom';
import Front from '../pages/front';
import { useState } from "react";

import axios from 'axios';
// import { Link, useNavigate } from "react-router-dom"

const Final = () => {
const logg=useRef();
  const c1 = useRef();
  const pp = useRef();
  const em=useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);


  const fun = () => {
    if (c1.current.checked) {
      pp.current.type = "text";
    } else {
      pp.current.type = "password";
    }
  };
  const ch = (e) => {
    e.preventDefault();

    axios
    .get(`http://localhost:3001/user?email=${em.current.value}& password=${pp.current.value}`)
    .then((res) => {
      if(res.data.length>0)
      {
          <Front />
        navigate("/hhome");
      }
      else
      {
        alert("user not exist")
      }
    })


  
  };

 

  return (
    <div id="main">
      <div id="whole">
      <div id="product">
      
      <h1>DigitalDreams </h1>
      <h4>A perfect platform for Marketing</h4>
      </div>
      </div>
      <h2 class="ss">Login Page</h2>
      <form>
        <Avatar id="img" src="/broken-image.jpg" />
        <div id="dd1">
          <input id="e" type="email" placeholder="Email*" ref={em} required />
          <br />
        </div>

        <div id="pass">
          <input type="password" placeholder="Password*" autoComplete="off" id="pp" ref={pp} required />
          <input onClick={fun} type="checkbox" id="p1" className="check" check="false" ref={c1} />
        </div>
        

        
      </form>
        <button type="submit" onClick={ch} id="b11" ref={logg}>
          Login
        </button>
        {/* <img src="https://img.freepik.com/premium-vector/sign-page-illustration-design-template_559664-154.jpg?w=360" id="logo"></img> */}
    
    </div>
  );
};

export default Final;


