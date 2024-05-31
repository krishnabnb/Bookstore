import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart, FaLockOpen} from 'react-icons/fa';
import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const email = sessionStorage.getItem('customerEmail');
    if (email) {
      setCustomerEmail(email);
    }
  }, []);

  return (
    <div>
      <nav>
        <div className="logo" style={{ float: 'left' }}>
          <img style={{ height: '50px', marginLeft: '30px', marginTop: '-40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGH6_1Q5hZbccQanQsEx_fN9qN6hlQ1Ifg&usqp=CAU" alt="Logo" />
        </div>
        <ul>
          <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contact">ContactUs</Link></li>
          <li><Link to="/book">Books</Link></li>
          <li><Link to="/saler">Salers</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li style={{ display: 'flex', float:'right' }}>
            <Link to='/login'>Log In</Link>
            <FaLockOpen style={{ marginLeft: '5px' }}/>
          </li>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
          <li><Link to="/customer">{customerEmail ? customerEmail : <FaUser />}</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
