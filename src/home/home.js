import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div className="dashboard">
      <p className='hometitle'>Welcome</p>
      <div className="cards">
        <Link to="/adminlogin" className="card">
          <h2>Admin Login</h2>
        </Link>
        <Link to="/selllogin" className="card">
          <h2>Selling Company Login</h2>
        </Link>
        <Link to="/shiplogin" className="card">
          <h2>Shipping Company Login</h2>
        </Link>
        <Link to="/registercustomer" className="card">
          <h2>Customer Register</h2>
        </Link>
        <Link to="/customerlogin" className="card">
          <h2>Customer Login</h2>
        </Link>
       
      </div>
    </div>
  );
}

export default Home;
