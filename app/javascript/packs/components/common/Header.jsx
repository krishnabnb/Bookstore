
import React, { useState, useEffect } from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');
  const location = useLocation();

  useEffect(() => {
    const customerEmail = sessionStorage.getItem('customerEmail');
    const salerEmail = sessionStorage.getItem('salerEmail');

    if (customerEmail) {
      setUserEmail(customerEmail);
      setUserRole('customer');
    } else if (salerEmail) {
      setUserEmail(salerEmail);
      setUserRole('saler');
    }
  }, []);

  useEffect(() => {
    if (userRole === 'customer' && isSalerPage(location.pathname)) {
      alert("You're not authorized to access this page.");
      window.location.replace('/book');
    } else if (userRole === 'saler' && isCustomerPage(location.pathname)) {
      alert("You're not authorized to access this page.");
      window.location.replace('/books');
    }
  }, [userRole, location.pathname]);

  const isSalerPage = (path) => {
    return path === '/product' || path === '/saler' || path === '/books' || path === '/SingOut';
  };

  const isCustomerPage = (path) => {
    return path === '/customer' || path === '/book';
  };

  return (
    <div>
      <nav>
        <div className="logo" style={{ float: 'left' }}>
          <img style={{ height: '60px', marginLeft: '30px', marginTop: '-40px' }} src="https://imgs.search.brave.com/3z7Bm-6WaJA9mjZMmBdftSi1A2UKlxGm2sqdJHN3LkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvT3Bl/bi1Cb29rLVBORy5w/bmc" alt="Logo" />
        </div>
        <div><h2 style={{ marginRight: '1700px', marginTop: '10px' }}>BOOKSTORE</h2></div>
        <div style={{ marginTop: '-80px' }}>
          <ul>
            <li className="active"><Link to="/home">Home</Link></li>
            <li><Link to="/bio">Bio</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            {userRole === 'customer' && (
              <>
                <li><Link to="/book">Books</Link></li>
                <li><Link to="/customer" style={{color:'skyblue', fontWeight:'900'}}>{userEmail}</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </>
            )}
            {userRole === 'saler' && (
              <>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/saler"  style={{color:'skyblue', fontWeight:'900'}}>{userEmail}</Link></li>
                <li><Link to="/SingOut">Logout</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;

