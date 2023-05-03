import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function ListAdmins() {
const [admins, setAdmins] = useState([]);
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
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/listAdmins');
        if (response.status === 200) {
          setAdmins(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdmins();
  }, []);

  return (
    <div className='parent-container'>
        
    <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.username}>
                  <td>{admin.id}</td>
                  <td>{admin.username}</td>
                  <td>{admin.password}</td>
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

export default ListAdmins;
