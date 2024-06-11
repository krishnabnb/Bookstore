import React, { useEffect } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const SingOut = () => {
    useEffect(() => {
      handleLogout();
    }, []);

    const handleLogout = async () => {
      try {
        const webtokan = sessionStorage.getItem('jsontoken');

        const response = await fetch('http://192.168.1.8:3000/salers/logout', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ webtokan })
        });
        if (response.ok) {
          console.log('Logged out successfully');
          toastr.success('Logged out successfully');

          sessionStorage.removeItem('jsontoken');

          sessionStorage.removeItem('salerEmail');
        } else {
          throw new Error('Failed to logout');
        }

        window.location.href = '/saller';

      } catch (error) {
        console.error('Error:', error);
        toastr.error('Logout failed: ' + error.message);

      }
    };

    return null;
  };
export default SingOut;
