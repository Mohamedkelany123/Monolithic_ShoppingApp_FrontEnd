import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import '../list/ListAdmins.css';
import { useNavigate} from 'react-router-dom';


function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/admin/login/`, {
        username: username,
        password: password
      });
      if (response.status === 200) {
        alert('Logged in Successfully');
        navigate('/list');
      }
    } catch (error) {
      if (error.response.status === 401) {
        // unauthorized, show error message
        alert('Invalid username or password');
      } else {
        // other errors, show error message
        alert('An error occurred. Please try again later.');
      }
    }
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleClick = () => {
    navigate('/');
  };
  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickMain = () => {
    navigate('/list');
  };


  return (
 
    <div class="parent-container">
    <form onSubmit={handleSubmit} class="form">
    <span class="title">Login</span>
    <label for="username" class="label">Username</label>
    <input type="text" id="username" value={username} name="username" required="" class="input" onChange={handleUsernameChange}></input>
    <label for="password" class="label">Password</label>
    <input type="password" id="password" value={password} name="password" required="" class="input" onChange={handlePasswordChange}></input>
    <button type="submit" class="submit">Login</button>
    </form>
   
    </div>
   
  );
};

export default Login;