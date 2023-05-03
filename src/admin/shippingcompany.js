import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const RegisterShip = () => {
  const [companyName, setCompanyname] = useState('');
  const [geo, setLocationname] = useState('');
  const navigate = useNavigate();
  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/registerShippingCompany/${companyName}/${geo}`);
      if (response.status === 201) {
        alert('Registered Successfully');
        navigate('/list');
      }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
  };

  const handleCompanynameChange = (event) => {
    setCompanyname(event.target.value);
  }
  const handleLocationChange = (event) => {
    setLocationname(event.target.value);
  }

  return (
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="form">
    <span class="title">Register</span>
    <label for="username" class="label">Company Name</label>
    <input type="text" id="companyname" value={companyName} name="companyname" required="" class="input" onChange={handleCompanynameChange}></input>
    <label for="username" class="label">Geographic Coverage</label>
    <input type="text" id="geographicCoverage" value={geo} name="geographicCoverage" required="" class="input" onChange={handleLocationChange}></input>
    <button type="submit" class="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterShip;