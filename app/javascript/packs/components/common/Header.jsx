import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
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
          <img style={{ height: '60px', marginLeft: '30px', marginTop: '-40px'}} src="https://imgs.search.brave.com/3z7Bm-6WaJA9mjZMmBdftSi1A2UKlxGm2sqdJHN3LkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvT3Bl/bi1Cb29rLVBORy5w/bmc" alt="Logo" />
        </div>
        <div><h2 style={{marginRight:'1700px', marginTop:'10px'}}>BOOKSTORE</h2></div>
        <div style={{marginTop: '-80px'}}>
          <ul>
            <li className="active"><Link to="/home">Home</Link></li>
            <li><Link to="/bio">Bio</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/book">Books</Link></li>
            <li><Link to="/saler">Salers</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/"></Link></li>
            <li><Link to="/cart"><FaShoppingCart /></Link></li>
            <li><Link to="/customer">{customerEmail ? customerEmail : <FaUser />}</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
