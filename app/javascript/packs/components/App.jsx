import React from "react";
import Header from './common/Header';
import Footer from './common/Footer';
import { Home } from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Book }from './BookModule/Book';
import { Saler } from './SellerModule/Saler';
import { Sing_up } from './Login/Sing_up';
import Bio from "./About/Bio"
import {Product} from "./ProductModule/Product"
import { Payment } from "./PaymentModule/Payment";
import {Contact} from "./ContactModule/Contact"
const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contect" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/saler" element={<Saler />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/users/sign_up" element={<Sing_up />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
