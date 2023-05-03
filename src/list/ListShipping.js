import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAdmins.css';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

function ListShipping() {
  const [shippingCompanies, setShipping] = useState([]);
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
    const fetchShipping = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/listShippingCompanies');
        if (response.status === 200) {
          setShipping(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchShipping();
  }, []);

  return (
    <div className='parent-container'>
        <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Company name</th>
                <th>Password</th>
                <th>Geographic Coverage</th>
              </tr>
            </thead>
            <tbody>
              {shippingCompanies.map((shipping) => (
                <tr key={shipping.username}>
                  <td>{shipping.id}</td>
                  <td>{shipping.companyName}</td>
                  <td>{shipping.password}</td>
                  <td>{shipping.geographicCoverage}</td>
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

export default ListShipping;
