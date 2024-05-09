// Logout.jsx

import React from 'react';

const Logout = () => {

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
