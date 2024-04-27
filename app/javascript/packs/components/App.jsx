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
import { Cart } from "./CartModule/Cart";
import { User } from "./CustomerModule/User";
import Adventure from "./image/Adventure";
import Crime from "./image/Crime";
import Classics from "./image/Classics";
import Fairytable from "./image/Fairytable";
import Thrillers from "./image/Thrillers"
import Science from "./image/Science"
import Romance from "./image/Romance"
import Novel from "./image/Novel"
import Horror from "./image/Horror"
import Historical from "./image/Historical"
import Fantasy from "./image/Fantasy"
import Business from "./image/Business"

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
          <Route path="/cart" element={<Cart/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/classics" element={<Classics/>} />
          <Route path="/crime" element={<Crime/>} />
          <Route path="/fairy-tales" element={<Fairytable/>} />
          <Route path="/adventure" element={<Adventure/>} />
          <Route path="/thrillers" element={<Thrillers/>} />
          <Route path="/science" element={<Science/>} />
          <Route path="/romance" element={<Romance/>} />
          <Route path="/novel" element={<Novel/>} />
          <Route path="/horror" element={<Horror/>} />
          <Route path="/historical" element={<Historical/>} />
          <Route path="/fantasy" element={<Fantasy/>} />
          <Route path="/business" element={<Business/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
