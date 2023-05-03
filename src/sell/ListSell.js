import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function ListSell () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/logoutsell');
  };
  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickMain = () => {
    navigate('/listsell');
  };
  return (
    
    <div className='parent-container'>
          <nav className="navbar">
          <ul>
          <li>
            <Link to="/addproduct" className="navbar">
              <h2>Add New Product</h2>
            </Link>          
            </li>
            <li>
            <Link to="/listproduct" className="navbar">
              <h2>List All Products</h2>
            </Link>
            </li>
            <li>
            <Link to="/listprevious" className="navbar">
              <h2>List Previously Sold Products</h2>
            </Link>          
            </li>
          </ul>
        </nav>
       
       <button class="bn632-hover bn18" onClick={handleClick}>Logout</button>
       <button class="bn632-hover bn18 mainpage admin" id='buttonship' onClick={handleClickHome}>Home</button>
       <button class="bn632-hover bn18 mainpage listship admin" id='buttonship' onClick={handleClickMain}>Main Page</button>
              
      </div>

  
  );
};

export default ListSell;
