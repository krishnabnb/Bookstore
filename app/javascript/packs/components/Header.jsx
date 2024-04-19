import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo" style={{ float: 'left' }}>
          <img style={{ height: '50px', marginLeft: '30px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGH6_1Q5hZbccQanQsEx_fN9qN6hlQ1Ifg&usqp=CAU" alt="Logo" />
        </div>
        <ul>
          <li className="active"><a href="#">Home</a></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><a href="#">ContactUs</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Salers</a></li>
          <li><a href="#">Payment</a></li>
          <li><a href="#"><FaShoppingCart /></a></li>
          <li><a href="#"><FaUser /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
