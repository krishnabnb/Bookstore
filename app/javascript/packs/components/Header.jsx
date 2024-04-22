import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo" style={{ float: 'left' }}>
          <img style={{ height: '50px', marginLeft: '30px', marginTop: '-40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGH6_1Q5hZbccQanQsEx_fN9qN6hlQ1Ifg&usqp=CAU" alt="Logo" />
        </div>
        <ul>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contect">ContactUs</Link></li>
          <li><Link to="/book">Books</Link></li>
          <li><Link to="/saler">Salers</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="#"><FaShoppingCart /></Link></li>
          <li><Link to="/users/sign_up"></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
