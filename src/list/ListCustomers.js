import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function ListCustomers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickMain = () => {
    navigate('/list');
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/listCustomerAccounts');
        if (response.status === 200) {
          setCustomers(response.data);
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div className='parent-container'>
        <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Location</th>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.username}>
                  <td>{customer.id}</td>
                  <td>{customer.email}</td>
                  <td>{customer.location}</td>
                  <td>{customer.name}</td>
                  <td>{customer.username}</td>
                  <td>{customer.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="bn632-hover bn18 admin" id='buttonship' onClick={handleClick}>Logout</button>
        <button class="bn632-hover bn18 mainpage admin" id='buttonship' onClick={handleClickHome}>Home</button>
        <button class="bn632-hover bn18 mainpage listship admin" id='buttonship' onClick={handleClickMain}>Main Page</button>
          </div>
  );
}

export default ListCustomers;
