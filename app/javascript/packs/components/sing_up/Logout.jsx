import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    handleLogout();
  }, []);

  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem('jsonwebtoken');
      const response = await fetch('http://192.168.1.11:3000/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        console.log('Logged out successfully');
        sessionStorage.removeItem('jsonwebtoken');
      } else {
        throw new Error('Failed to logout');
      }

      window.location.href = '/';

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogoutButtonClick = () => {
    handleLogout();
  };
};

export default Logout;


