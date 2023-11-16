import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Updated state to track logged-in status

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:2222/user/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginStatus('User logged in');
        onLogin();
        setIsLoggedIn(true); // Set logged-in status to true after successful login
        // localStorage.setItem('token', response.data.token); // Uncomment if token is sent in the response
      } else {
        setLoginStatus('Login failed');
      }
    } catch (error) {
      if (error.response) {
        setLoginStatus('User not found or invalid credentials');
      } else if (error.request) {
        setLoginStatus('Network error');
      } else {
        setLoginStatus('Unknown error occurred');
      }
    }
  };

  return (
    <div className="login-container">
      {!isLoggedIn && ( // Render the login form if not logged in
        <>
        <center>
          <h2>Login</h2>
          <br></br>
          <form>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <br></br>
            <br></br>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <br></br>
            <br></br>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            {loginStatus && <p>{loginStatus}</p>}
          </form>
          </center>
        </>
      )}
      {/* You can add more logic here to conditionally render other content after login */}
    </div>
  );
};

export default LoginPage;
