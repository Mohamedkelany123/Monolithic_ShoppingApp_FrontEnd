import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';
import '../admin/Login.css';
import '../list/ListAdmins.css';

function CreateProduct(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosCookie.post(
        `http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/sellingCompany/addProduct/${name}/${price}/${quantity}`);
        if(response.status===201){
            alert('Item added Successfully');
            console.log(response.data);
            navigate('/listproduct');
        }
    } catch (error) {
      console.error(error);
      alert('Item is already added before or there is a required input');
    }
  };

  return (
    <div className='p'>
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
       
      
              
    <div class='parent-container'>
        <form class="formP" onSubmit={handleSubmit}>
        <span class="title">Add New Product</span>
        <label class="label">Name: </label>
        <input required="" class="input" type="text" onChange={(e) => setName(e.target.value)} />
        <label class="label">Price: </label>
        <input  required="" class="input" type="number" onChange={(e) => setPrice(e.target.value)} />
        <label class="label">Quantity: </label>
        <input  required="" class="input" type="number" onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit" class="submitP">Create Product</button>
    </form>
   
    </div>
    <button class="bn632-hover bn18  " id="buttonselll" onClick={handleClick}>Logout</button>
       <button class="bn632-hover bn18  " id='buttonsellh' onClick={handleClickHome}>Home</button>
       <button class="bn632-hover bn18 " id='buttonsellm' onClick={handleClickMain}>Main Page</button>
    </div>
  );
}
export default CreateProduct;