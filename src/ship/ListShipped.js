import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';

const ListShipped = () => {
  const [orders, setOrders] = useState([]);

  const sessionId = Cookies.get('JSESSIONID')
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/logoutship');
  };
  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickMain = () => {
    navigate('/listship');
  };


  useEffect(() => {
    const fetchOrders = async () => {
      try {

        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/shipping-resource/listShippedOrders',{
          params: {
            sessionId
          }
         } );
        
        if (response.status === 200) {
          setOrders(response.data);
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
    fetchOrders();
  }, []);

 

  return (
    
    <div className='parent-container'>
        
       
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Product</th>
                <th>Shipping Company</th>
                <th>Status</th>
                <th>Totalprice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.customerName}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.location}</td>
                  <td>{order.products}</td>
                  <td>{order.shipping_company}</td>
                  <td>{order.status}</td>
                  <td>{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="bn632-hover bn18" id='buttonship' onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 mainpage" id='buttonship' onClick={handleClickHome}>Home</button>
          <button class="bn632-hover bn18 mainpage listship" id='buttonship' onClick={handleClickMain}>Main Page</button>
      </div>
      
  
  );
};

export default ListShipped;
