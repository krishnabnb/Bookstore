import React, { useState, useEffect } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [currentCustomerEmail, setCurrentCustomerEmail] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false); // Track user's login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCurrentCustomer = async () => {
      try {
        const response = await fetch('http://192.168.1.11:3000/current_customer', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('jsonwebtoken')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch current customer');
        }
        const data = await response.json();
        setCurrentCustomerEmail(data.email);
        setIsSignedIn(true); 
      } catch (error) {
        console.error('Error fetching current customer:', error);
      }
    };
    fetchCurrentCustomer();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const handleLogout = async () => {
  //   try {
  //     const token = sessionStorage.getItem('jsonwebtoken');

  //     const response = await fetch('http://192.168.1.11:3000/logout', {
  //       method: 'DELETE',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     if (!response.ok) {
  //       throw new Error('Logout failed');
  //     }

  //     sessionStorage.removeItem('jsonwebtoken');

  //     setIsSignedIn(false);

  //   } catch (error) {
  //     console.error('Logout error:', error.message);
  //   }
  // };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('jsonwebtoken');
  
      const response = await fetch('http://192.168.1.11:3000/logout', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token }) 
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
  
      localStorage.removeItem('jsonwebtoken');
  
      setIsLoggedIn(false);
  
      history.push('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
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
                    <li><button onClick={handleLogout}>Logout</button></li>
                  ) : (
                    <li><Link to="/sign">Login</Link></li>
                  )}
                </ul>
              )}
            </div>
          </li>
          {currentCustomerEmail && (
            <li><span>{currentCustomerEmail}</span></li>
          )}
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
