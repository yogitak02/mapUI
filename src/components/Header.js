import React, { useState } from 'react';

const Header = () => {
  // Dummy state to simulate user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login by setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate logout by setting isLoggedIn to false
    setIsLoggedIn(false);
  };

  const handleProfile = () => {
    // Dummy function for handling profile button click
    // You can add your logic here to redirect to the user's profile page or any other action you want to perform
    console.log('Profile button clicked!');
  };

  return (
    <div className="header">
      <h1>My Website</h1>
      <div className="buttons">
        
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleProfile}>Profile</button>
        
      </div>
    </div>
  );
};

export default Header;
