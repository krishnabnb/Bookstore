import React, { useState } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };
  return (
    <div>
      <nav>
        <div className="logo" style={{ float: 'left' }}>
          <img style={{ height: '50px', marginLeft: '30px', marginTop: '-40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGH6_1Q5hZbccQanQsEx_fN9qN6hlQ1Ifg&usqp=CAU" alt="Logo" />
        </div>
        <ul>
          <li className="active"><Link to="/">Home</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contact">ContactUs</Link></li>
          <li><Link to="/book">Books</Link></li>
          <li><Link to="/saler">Salers</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li className="dropdown">
            <div onClick={toggleDropdown}>
              <FaUser/>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {isSignedIn ? (
                    <li onClick={handleLogout}><Link to="/">Logout</Link></li>
                  ) : (
                    <li><Link to="/SignIn">SignIn</Link></li>
                  )}
                </ul>
              )}
            </div>
          </li>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
