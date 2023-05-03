import axiosCookie from '../axios';

function LogoutSell() {
  axiosCookie.post('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/sellingCompany/logout')
    .then(response => {
      if (response.status === 200) {
        // successful logout, reset cookies
        localStorage.removeItem('sessionId');
        // redirect to login page
        window.location = '/login';
      }
    })
    .catch(error => {
      // error handling
      console.log(error);
    });
}

export default LogoutSell;
