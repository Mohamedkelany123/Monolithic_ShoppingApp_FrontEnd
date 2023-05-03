import React, { useState } from 'react';
import '../admin/Login.css';
import { useNavigate} from 'react-router-dom';
import axiosCookie from '../axios';
import '../list/ListAdmins';


function SendNotification  ()  {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [orderid, setOrderId] = useState('');
  const navigate = useNavigate();

  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosCookie.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/shipping-resource/sendNotification/${message}/${username}/${orderid}`);
      if (response.status === 201) {
        // successful login, redirect to a new page
        alert('Notification is sent successfully');
       // navigate('/listsell');
        const sessionId = response.headers['set-cookie'][0].split(';')[0].split('=')[1];
        localStorage.setItem('sessionId', sessionId);
       
        //window.location = '/listProducts'; 
      }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
  };


  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  }
  const handleOrderChange = (event) => {
    setOrderId(event.target.value);
  }
  const handleClick = () => {
    navigate('/logoutcustomer');
  };

  const handleClickHome = () => {
    navigate('/');
  };

  return (
 
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="form">
    <span class="title">Send Notification</span>
    <label for="msg" class="label">Message</label>
    <input type="text" id="username" value={message} name="msg" required="" class="input" onChange={handleMessageChange}></input>
    <label for="username" class="label">Username</label>
    <input type="text" id="username" value={username} name="username" required="" class="input" onChange={handleUserChange}></input>
    <label for="username" class="label">Order ID</label>
    <input type="text" id="orderid" value={orderid} name="orderid" required="" class="input" onChange={handleOrderChange}></input>
    <button type="submit" class="submit">Send</button>
    </form>
    <button class="bn632-hover bn18" id='buttonproducts'onClick={handleClick}>Logout</button>
    <button class="bn632-hover bn18 mainpage" id='buttonproducts' onClick={handleClickHome}>Home</button>
    </div>
   
  );
};

export default SendNotification;