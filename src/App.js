import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Login from './components/login/Login';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (name, email) => {
    // Check if both name and email are provided
    if (name && email) {
      // Add your authentication logic here
      // For simplicity, let's assume any non-empty name and email are valid
      setLoggedIn(true);
    } else {
      alert('Please enter your name and email.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {isLoggedIn ? <News /> : <Login handleLogin={handleLogin} />}
    </>
  );
};

export default App;
