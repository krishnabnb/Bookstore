import React from "react";
import Header from './Header';
import Bio from './Bio';
import Footer from './Footer';
import { Home } from './Home';
import { Contect } from './Contect';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Book } from './Book';
import { Saler } from './Saler';
import { Payment } from './Payment';
import { Sing_up } from './Sing_up';

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/book" element={<Book />} />
          <Route path="/saler" element={<Saler />} />
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
