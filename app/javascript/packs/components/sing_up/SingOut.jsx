import React, { useEffect } from 'react';

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
          sessionStorage.removeItem('jsontoken');

          sessionStorage.removeItem('salerEmail');
        } else {
          throw new Error('Failed to logout');
        }

        window.location.href = '/saller';

      } catch (error) {
        console.error('Error:', error);
      }
    };

    return null;
  };

  export default SingOut;