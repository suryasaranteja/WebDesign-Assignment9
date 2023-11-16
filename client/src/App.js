import React, { useState } from 'react';
import { Route, Link, Outlet, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Jobs from './components/Jobs/Jobs';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    // You can perform any other necessary actions upon login here
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {/* {isLoggedIn && (
              <li>
                <h1>Welcome, User!</h1>
              </li>
            )} */}
          </ul>
        </nav>

        {isLoggedIn && (
              <li>
                <center><h1>Welcome, User!</h1></center>
              </li>
            )}

        <Outlet />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          {!isLoggedIn && (
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
