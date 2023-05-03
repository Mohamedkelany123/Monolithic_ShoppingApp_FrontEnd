import axios from 'axios';

const sessionId = localStorage.getItem('sessionId');

const axiosCookie = axios.create({
  baseURL: 'http://localhost:8080/Service1-1.0-SNAPSHOT/api',
  headers: {
    'Content-Type': 'application/json',
     Cookie: `JSESSIONID=${sessionId}`,
  },
  withCredentials: true,
});

export default axiosCookie;
