// import React, { useEffect } from 'react';

// const Logout = () => {
//   useEffect(() => {
//     handleLogout();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const token = sessionStorage.getItem('jsonwebtoken');
//       const response = await fetch('http://192.168.1.11:3000/logout', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.strinfy({ token })
//       });

//       if (response.ok) {
//         console.log('Logged out successfully');
//         sessionStorage.removeItem('jsonwebtoken');

//       } else {
//         throw new Error('Failed to logout');
//       }

//       window.location.href = '/';

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


// };

// export default Logout;



// // import React, { useEffect } from 'react';

// // const Logout = () => {
// //   useEffect(() => {
// //     handleLogout();
// //   }, []);

// //     const handleLogout = async () => {
// //       try {
// //         const token = sessionStorage.getItem('jsonwebtoken');
// //         const response = await fetch('http://192.168.1.11:3000/logout', {
// //           method: 'DELETE',
// //           headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': `Bearer ${token}`
// //           },
// //           // body: JSON.stringify({ token })
// //         });

// //         if (response.ok) {
// //           console.log('Logged out successfully');
// //           sessionStorage.removeItem('jsonwebtoken');

// //         } else {
// //           throw new Error('Failed to logout');
// //         }

// //         window.location.href = '/';

// //       } catch (error) {
// //         console.error('Error:', error);
// //       }
// //     };

// //   const handleLogoutButtonClick = () => {
// //     handleLogout();
// //   };
// // };

// // export default Logout;



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
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 204) {
        console.log('Logged out successfully');
        sessionStorage.removeItem('jsonwebtoken');
        window.location.href = '/';
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return null;
};

export default Logout;



