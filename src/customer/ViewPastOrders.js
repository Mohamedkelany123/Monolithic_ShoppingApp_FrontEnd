import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';

const ViewPastOrders = () => {

  const [orders, setOrders] = useState([]);
  const sessionId = Cookies.get('JSESSIONID')

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/logoutcustomer');
  };
  const handleClickHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/customer/viewPastOrders',{
        params: {
            sessionId
            }
            } ); 
        if (response.status === 200) {
          setOrders(response.data);
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
                <th>Products</th>
                <th>Status</th>
                <th>Shipping Company </th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.location}</td>
                  <td>{order.products}</td>
                  <td>{order.status}</td>
                  <td>{order.shipping_company}</td>
                  <td>{order.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
          <button class="bn632-hover bn18" id="noti" onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 mainpage" id="noti" onClick={handleClickHome}>Home</button>
      </div>
      
  
  );
};

export default ViewPastOrders;
