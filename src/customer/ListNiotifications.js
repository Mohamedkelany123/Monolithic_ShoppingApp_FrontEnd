import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';


const ListNotifications = () => {

  const [notifications, setNotifications] = useState([]);
  const sessionId = Cookies.get('JSESSIONID')

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/logoutcustomer');
  };
  const handleClickHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/customer/viewNotifications',{
        params: {
            sessionId
            }
            } ); 
        if (response.status === 200) {
          setNotifications(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, []);


 

  return (
    
    <div className='parent-container'>
       
       
          <table className='table'>
            <thead>
              <tr>
                <th>Notifications</th>
                
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.message}>
                  <td>{notification.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
          <button class="bn632-hover bn18" id="noti" onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 mainpage" id="noti" onClick={handleClickHome}>Home</button>
      </div>
          
  
  );
};

export default ListNotifications;
