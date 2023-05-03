import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function ListShip () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/logoutsell');
  };
  const handleClickHome = () => {
    navigate('/');
  };
  return (
    
    <div className='parent-container'>
          <nav className="navbar ship">
          <ul>
          <li>
            <Link to="/listpending" className="navbar">
              <h2>List Pending Orders</h2>
            </Link>          
            </li>
            <li>
            <Link to="/processorder" className="navbar">
              <h2>Confirm Order Processing</h2>
            </Link>
            </li>
            <li>
            <Link to="/listprocessing" className="navbar">
              <h2>List Processing Orders</h2>
            </Link>          
            </li>
            <li>
            <Link to="/set" className="navbar">
              <h2>Confirm Shipping</h2>
            </Link>
            </li>
            <li>
            <Link to="/listshipped" className="navbar">
              <h2>List Shipped Orders</h2>
            </Link>          
            </li>
          </ul>
        </nav>
             
      </div>

  
  );
};

export default ListShip;
