import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import { Home } from './common/Home';
import { Book } from './BookModule/Book';
import { Saler } from './SellerModule/Saler';
import { Cart } from './CartModule/Cart'
import { Books } from './SellerModule/Books';
import { Product } from "./ProductModule/Product";
import { Contact } from "./ContactModule/Contact";
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
import SingOut from './sing_up/SingOut'
import Forgotepassword from './sing_up/Forgotepassword'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/cart" element={<><Header/><Cart/><Footer/></>}/>
            <Route path="/saller" element={<Forgotepassword />}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/customer" element={<><Header/><User/><Footer/></> } />
            <Route path="/bio" element={<><Header/><Bio /><Footer/></>} />
            <Route path="/home" element={<><Header/><Home /><Footer/></>}/>
            <Route path="/contact" element={<><Header/><Contact /><Footer/></>} />
            <Route path="/book" element={<><Header/><Book /><Footer/></>} />
            <Route path="/books" element={<><Header/><Books /><Footer/></>} />
            <Route path="/saler" element={<><Header/><Saler /><Footer/></>} />
            <Route path="/product" element={<><Header/><Product /><Footer/></>} />
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
            <Route path="/SingOut" element={<><Header/><SingOut /><Footer/></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;