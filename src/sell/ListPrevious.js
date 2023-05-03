import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';

const ListPrevious = () => {

  const [previous, setPrevious] = useState([]);
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
    const fetchPrevious = async () => {
      try {
        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/sellingCompany/listSoldProducts',{
        params: {
            sessionId
            }
            } ); 
        if (response.status === 200) {
          setPrevious(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrevious();
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
                <th>Customer Name</th>
                <th>Product</th>
                <th>Shipping Company</th>
                <th>Status</th>
                <th>Selling Company </th>
                <th>Order ID</th>
              </tr>
            </thead>
            <tbody>
              {previous.map((previous) => (
                <tr key={previous.selling_company_name}>
                  <td>{previous.id}</td>
                  <td>{previous.customer_name}</td>
                  <td>{previous.product}</td>
                  <td>{previous.shipping_company}</td>
                  <td>{previous.status}</td>
                  <td>{previous.selling_company_name}</td>
                  <td>{previous.orderId}</td>
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

export default ListPrevious;
