import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function List () {
  const navigate = useNavigate();


  return (
    
    <div className='parent-container'>
        <nav className="navbar">
          <ul>
            <li>
            <Link to="/listadmins" className="navbar">
              <h2>Show Admins</h2>
            </Link>
            </li>
            <li>
            <Link to="/listcustomers" className="navbar">
              <h2>Show Customers</h2>
            </Link>            </li>
            <li>
            <Link to="/listselling" className="navbar">
              <h2>Show Selling Companies</h2>
            </Link>            </li>
            <li>
            <Link to="/listshipping" className="navbar">
              <h2>Show Shipping Companies</h2>
            </Link>            </li>
            <li>
            <Link to="/sellregister" className="navbar">
              <h2>Register Selling Company</h2>
            </Link>
            </li>
            <li>
            <Link to="/shipregister" className="navbar">
              <h2>Register Shipping Company</h2>
            </Link>
            </li>
          </ul>
        </nav>
       
      </div>

  
  );
};

export default List;
