import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export const RegisterSell = () => {
  const [companyName, setCompanyname] = useState('');
  const navigate = useNavigate();

  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/registerSellingCompany/${companyName}`);
      if (response.status === 201) {
        alert('Registered Successfully');
        navigate("/list");
      }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
  };

  const handleCompanynameChange = (event) => {
    setCompanyname(event.target.value);
  }

  return (
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="form">
    <span class="title">Register</span>
    <label for="username" class="label">Company Name</label>
    <input type="text" id="companyname" value={companyName} name="companyname" required="" class="input" onChange={handleCompanynameChange}></input>
    <button type="submit" class="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterSell;