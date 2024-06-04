import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './common/Header';
import Footer from './common/Footer';
import { Home } from './Home';
import { Book } from './BookModule/Book';
import { Saler } from './SellerModule/Saler';
import { Product } from "./ProductModule/Product";
import { Payment } from "./PaymentModule/Payment";
import { Contact } from "./ContactModule/Contact";
import { Cart } from "./CartModule/Cart";
import CartItem from './CartModule/CartItem';
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
import Forgotepassword from './Forgotepassword';
import SingOut from './SingOut'

const App = () => {
  // const [userType, setUserType] = useState('');

  // useEffect(() => {
  //   const userTypeInput = prompt('Are you a customer or a seller?');
  //   if (userTypeInput && (userTypeInput.toLowerCase() === 'customer' || userTypeInput.toLowerCase() === 'seller')) {
  //     setUserType(userTypeInput.toLowerCase());
  //   } else {
  //     alert('Invalid input. Please reload the page and enter either "customer" or "seller".');
  //   }
  // }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            {/* {userType === 'customer' && (
              <> */}
                <Route path="/" element={<Login/>}/>
                <Route path="/forgotepassword" element={<Forgotepassword />}/>

                <Route path="/login" element={<><Header/><Login/></>}/>
                <Route path="/" element={<Forgotepassword />}/>
                <Route path="/customer" element={<><Header/><User/><Footer/></> } />
                <Route path="/bio" element={<><Header/><Bio /><Footer/></>} />
                <Route path="/home" element={<><Header/><Home /><Footer/></>}/>
                <Route path="/contact" element={<><Header/><Contact /><Footer/></>} />
                <Route path="/book" element={<><Header/><Book /><Footer/></>} />
                <Route path="/saler" element={<Navigate to="/customer" />} />
                <Route path="/product" element={<><Header/><Product /><Footer/></>} />
                <Route path="/payment/:cartId" element={<><Header/><Payment /><Footer/></>} />
                <Route path="/cart" element={<><Header/><Cart /><Footer/></>} />
                <Route path="/CartItem" element={<><Header/><CartItem /><Footer/></>} />
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

              {/* </>
            )}
            {userType === 'seller' && (
              <>
                <Route path="/" element={<Forgotepassword/>}/>
                <Route path="/login" element={<><Header/><Login/></>}/>
                <Route path="/customer" element={<Navigate to="/saler" />} />
                <Route path="/bio" element={<><Header/><Bio /><Footer/></>} />
                <Route path="/home" element={<><Header/><Home /><Footer/></>}/>
                <Route path="/contact" element={<><Header/><Contact /><Footer/></>} />
                <Route path="/book" element={<><Header/><Book /><Footer/></>} />
                <Route path="/saler" element={<><Header/><Saler /><Footer/></>} />
                <Route path="/SingOut" element={<><Header/><SingOut /><Footer/></>} />

              </>
            )} */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
