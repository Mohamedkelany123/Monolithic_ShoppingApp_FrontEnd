import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function ListSelling() {
  const [sellingCompanies, setSelling] = useState([]);
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
    const fetchSelling = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/listSellingCompanies');
        if (response.status === 200) {
          setSelling(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSelling();
  }, []);

  return (
    <div className='parent-container'>
        <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company name</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {sellingCompanies.map((selling) => (
                <tr key={selling.username}>
                  <td>{selling.id}</td>
                  <td>{selling.companyName}</td>
                  <td>{selling.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button class="bn632-hover bn18" id='buttonship' onClick={handleClick}>Logout</button>
          <button class="bn632-hover bn18 mainpage" id='buttonship' onClick={handleClickHome}>Home</button>
          <button class="bn632-hover bn18 mainpage listship" id='buttonship' onClick={handleClickMain}>Main Page</button>
          </div>
  );
}

export default ListSelling;
