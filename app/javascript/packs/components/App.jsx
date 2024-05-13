import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate
import Header from './common/Header';
import Footer from './common/Footer';
import { Home } from './Home';
import { Book } from './BookModule/Book';
import { Saler } from './SellerModule/Saler';
import { Product } from "./ProductModule/Product";
import { Payment } from "./PaymentModule/Payment";
import { Contact } from "./ContactModule/Contact";
import { Cart } from "./CartModule/Cart";
import { User } from "./CustomerModule/User";
import Bio from "./About/Bio";
import Adventure from "./image/Adventure";
import Crime from "./image/Crime";
import Classics from "./image/Classics";
import Science from "./image/Science";
import Romance from "./image/Romance";
import Novel from "./image/Novel";
import Horror from "./image/Horror";
import Historical from "./image/Historical";
import Business from "./image/Business";
import Login from './sing_up/Login';
import Logout from './sing_up/Logout';
import CurrentCustomer from './sing_up/Currentcustomer';
import Forgotepassword from './Forgotepassword';

const App = () => {
  // const [currentCustomerEmail, setCurrentCustomerEmail] = useState('');

  // useEffect(() => {
  //   const fetchCurrentCustomerEmail = async () => {
  //     try {
  //       const token = sessionStorage.getItem('jsonwebtoken');
  //       if (!token) {
  //         throw new Error('JWT token not found');
  //       }

  //       const response = await axios.get('http://192.168.1.11:3000/current_customer', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });

  //       const { email } = response.data.current_customer;
  //       setCurrentCustomerEmail(email);
  //     } catch (error) {
  //       console.error('Error fetching current customer email:', error);
  //     }
  //   };

  //   fetchCurrentCustomerEmail();
  // }, []);

  return (
    <div>
      <BrowserRouter>
      <div>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/forgotepassword" element={<Forgotepassword />}/>
            <Route path="/customer" element={<><Header/><User/><Footer/></>} />
            {/* <Route path="/customer" element={<><Header /><User email={currentCustomerEmail} /><Footer /></>} /> */}

            <Route path="/bio" element={<><Header/><Bio /><Footer/></>} />
            <Route path="/home" element={<><Header/><Home /><Footer/></>}/>
            <Route path="/contect" element={<><Header/><Contact /><Footer/></>} />
            <Route path="/book" element={<><Header/><Book /><Footer/></>} />
            <Route path="/saler" element={<><Header/><Saler /><Footer/></>} />
            <Route path="/product" element={<><Header/><Product /><Footer/></>} />
            <Route path="/payment/:cartId" element={<><Header/><Payment /><Footer/></>} />
            <Route path="/cart" element={<><Header/><Cart /><Footer/></>} />
            <Route path="/classics" element={<><Header/><Classics /><Footer/></>} />
            <Route path="/crime" element={<><Header/><Crime /><Footer/></>} />
            <Route path="/adventure" element={<><Header/><Adventure /><Footer/></>} />
            <Route path="/science" element={<><Header/><Science /><Footer/></>} />
            <Route path="/romance" element={<><Header/><Romance /><Footer/></>} />
            <Route path="/novel" element={<><Header/><Novel /><Footer/></>} />
            <Route path="/horror" element={<><Header/><Horror /><Footer/></>} />
            <Route path="/historical" element={<><Header/><Historical /><Footer/></>} />
            <Route path="/business" element={<><Header/><Business /><Footer/></>} />
            <Route path="/logout" element={<><Header/><Logout /><Footer/></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;