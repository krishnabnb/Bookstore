import React, { useEffect } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const Logout = () => {
  useEffect(() => {
    handleLogout();
  }, []);
  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem('jsonwebtoken');
      const response = await fetch('http://192.168.1.8:3000/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token })
      });
      if (response.ok) {
        console.log('Logged out successfully');
        sessionStorage.removeItem('jsonwebtoken');
        toastr.success('Logged out successfully');
        sessionStorage.removeItem('customerEmail');
      } else {
        throw new Error('Failed to logout');
      }
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
      toastr.error('Logout failed: ' + error.message);
    }
  };
  return null;
};

export default Logout;


