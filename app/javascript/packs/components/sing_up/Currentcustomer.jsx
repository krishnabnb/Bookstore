// // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // const CurrentCustomer = () => {
// // // //   const [customer, setCustomer] = useState(null);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchCurrentCustomer = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://192.168.1.11:3000/current_customer');
// // // //         if (!response.data) {
// // // //           throw new Error('No customer data found');
// // // //         }
// // // //         setCustomer(response.data);
// // // //       } catch (error) {
// // // //         setError(error.message);
// // // //       }
// // // //     };

// // // //     fetchCurrentCustomer();
// // // //   }, []);

// //   return (
// //     <div>
// //       <p>krishna</p>
// //     </div>
// //   );
// // };

// // export default CurrentCustomer;




// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // const CurrentCustomer = () => {
// // //   const [customer, setCustomer] = useState(null);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchCurrentCustomer = async () => {
// // //       try {
// // //         const response = await axios.get('http://192.168.1.11:3000/current_customer');

// // //         if (!response.data) {
// // //           throw new Error('No customer data found');
// // //         }
// // //         setCustomer(response.data);
// // //       } catch (error) {
// // //         setError(error.message);
// // //       }
// // //     };

// // //     fetchCurrentCustomer();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       {customer ? (
// // //         <p>Welcome, {customer.email}</p>
// // //       ) : error ? (
// // //         <p>Error: {error}</p>
// // //       ) : (
// // //         <p>Loading...</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CurrentCustomer;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios library

// const Currentcustomer = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make GET request to your Rails API endpoint
//         const response = await axios.get('http://192.168.1.11:3000/current_customer');

//         // Extract data from response
//         const responseData = response.data;

//         // Set data state with the fetched data
//         setData(responseData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     // Call fetchData function when component mounts
//     fetchData();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   return (
//     <div>
//       <h2>Data from Rails API:</h2>
//       {data ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{/* Render your data here */}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Currentcustomer;
