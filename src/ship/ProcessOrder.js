import React, { useState } from 'react';
import '../admin/Login.css';
import { useNavigate} from 'react-router-dom';
import axiosCookie from '../axios';
import '../list/ListAdmins';


function ProcessOrder  ()  {

  const [orderid, setOrderId] = useState('');
  const navigate = useNavigate();

  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosCookie.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/shipping-resource/processOrderById/${orderid}`);
      if (response.status === 200) {
        // successful login, redirect to a new page
         alert('Order Processed');
         navigate('/listship');
        const sessionId = response.headers['set-cookie'][0].split(';')[0].split('=')[1];
        localStorage.setItem('sessionId', sessionId);
       
        //window.location = '/listProducts'; 
      }
    } catch (error) {
        if (error.response.status !== 200) {
        alert('An error occurred. Please try again later.');
        }
    }
  };

  const handleOrderChange = (event) => {
    setOrderId(event.target.value);
  }
  const handleClick = () => {
    navigate('/logoutcustomer');
  };

  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickMain = () => {
    navigate('/listship');
  };

  return (
 
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="form">
    <span class="title">Send Order ID</span>
    <label for="username" class="label">Order ID</label>
    <input type="text" id="orderid" value={orderid} name="orderid" required="" class="input" onChange={handleOrderChange}></input>
    <button type="submit" class="submit">Send</button>
    </form>
    <button class="bn632-hover bn18" id='buttonselll'onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 " id='buttonshiph' onClick={handleClickHome}>Home</button>
        <button class="bn632-hover bn18  " id='buttonsellm' onClick={handleClickMain}>Main Page</button>
    </div>
   
  );
};

export default ProcessOrder;