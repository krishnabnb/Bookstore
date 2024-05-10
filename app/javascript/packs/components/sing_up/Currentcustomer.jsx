// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CurrentCustomer = () => {
//   const [customer, setCustomer] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCurrentCustomer = async () => {
//       try {
//         const response = await axios.get('http://192.168.1.11:3000/current_customer');
//         if (!response.data) {
//           throw new Error('No customer data found');
//         }
//         setCustomer(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchCurrentCustomer();
//   }, []);

//   return (
//     <div>
//       {customer ? (
//         <p>Welcome, {customer.email}</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default CurrentCustomer;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentCustomer = () => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentCustomer = async () => {
      try {
        const response = await axios.get('http://192.168.1.11:3000/current_customer');
        // customer = Customer.find_by(email: email)

        if (!response.data) {
          throw new Error('No customer data found');
        }
        setCustomer(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCurrentCustomer();
  }, []);

  return (
    <div>
      {customer ? (
        <p>Welcome, {customer.email}</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrentCustomer;
