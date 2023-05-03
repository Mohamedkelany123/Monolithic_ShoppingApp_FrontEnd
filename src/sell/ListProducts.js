import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const sessionId = Cookies.get('JSESSIONID')
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


  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/sellingCompany/listProducts',{
          params: {
            sessionId
          }
         } );
        
        if (response.status === 200) {
          setProducts(response.data);
          console.log(response.data);
        }
        else
        {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

 

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
       
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Seller Name</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.sellerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="bn632-hover bn18" onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 mainpage admin" id='buttonship' onClick={handleClickHome}>Home</button>
        <button class="bn632-hover bn18 mainpage listship admin" id='buttonship' onClick={handleClickMain}>Main Page</button>
      </div>
      
  
  );
};

export default ListProducts;
