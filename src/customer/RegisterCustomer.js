import React, { useState } from 'react';
import axios from 'axios';
import '../admin/Login.css';

export const RegisterCustomer = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/customer/register`,{
        name: name,
        username: username,
        password: password,
        location:location,
        email:email


      });
      if (response.status === 201) {
        alert('Registered Successfully');
      }
    } catch (error) {
        alert('An error occurred. Please try again later.');
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="formR">
    <span class="title">Register</span>
    <label for="username" class="label">Name</label>
    <input type="text" id="name" value={name} name="username" required="" class="input" onChange={handleNameChange}></input>
    <label for="username" class="label">Username</label>
    <input type="text" id="username" value={username} name="username" required="" class="input" onChange={handleUsernameChange}></input>
    <label for="password" class="label">Password</label>
    <input type="password" id="password" value={password} name="password" required="" class="input" onChange={handlePasswordChange}></input>
    <label for="username" class="label">Location</label>
    <input type="text" id="location" value={location} name="location" required="" class="input" onChange={handleLocationChange}></input>
    <label for="username" class="label">Email</label>
    <input type="text" id="email" value={email} name="email" required="" class="input" onChange={handleEmailChange}></input>
    <button type="submit" class="submitR">Register</button>
    </form>
    </div>
  );
};

export default RegisterCustomer;