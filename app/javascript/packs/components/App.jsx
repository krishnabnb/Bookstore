import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Logout } from './sing_up/Logout';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/customer" element={<User />}/>
            <Route path="/bio" element={<Bio />} />
            <Route path="/" element={<Home />} />
            <Route path="/contect" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/saler" element={<Saler />} />
            <Route path="/product" element={<Product />} />
            <Route path="/payment/:cartId" element={<Payment />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/classics" element={<Classics />} />
            <Route path="/crime" element={<Crime />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/science" element={<Science />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/novel" element={<Novel />} />
            <Route path="/horror" element={<Horror />} />
            <Route path="/historical" element={<Historical />} />
            <Route path="/business" element={<Business />} />
            <Route path="/sign" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;