import React, { useState } from 'react';
import './login.css';
import { FaInstagram, FaGoogle, FaLinkedinIn, FaUnlock, FaUserAlt } from "react-icons/fa";
import { FaPhone, FaRegUser } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import { MdLocationCity, MdEmail } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { BiShow, BiHide } from "react-icons/bi";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [contactno, setContactno] = useState("");
  const [city, setCity] = useState("");
  const jwt = require('jsonwebtoken');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.8:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer: { email, password } }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
      const data = await response.json();
      const token = data.token;
      sessionStorage.setItem('jsonwebtoken', token);
      toastr.success('Login successful');

      const customerResponse = await fetch('http://192.168.1.8:3000/current_customer', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (customerResponse.status === 401) {
        throw new Error('Unauthorized: Invalid token');
      }

      if (!customerResponse.ok) {
        const errorData = await customerResponse.json();
        throw new Error(`Failed to fetch current customer: ${errorData.error}`);
      }

      const customerData = await customerResponse.json();
      console.log('Current customer:', customerData);

      sessionStorage.setItem('customerEmail', customerData.email);

      sessionStorage.setItem('customername', customerData.firstname);
      sessionStorage.setItem('customerLastName', customerData.lastname);
      sessionStorage.setItem('customerAddress', customerData.address);
      sessionStorage.setItem('customerCity', customerData.city);
      sessionStorage.setItem('ContactNo', customerData.contactno);

      console.log('Login successful', token);
        setTimeout(function () {
          window.location.href = '/customer';
        }, 1000);

    } catch (error) {
      console.error('Login error:', error.message);
      toastr.error('Login failed: ' + error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      let item = {
        customer: {
          firstname,
          lastname,
          address,
          city,
          contactno,
          email,
          password,
          password_confirmation
        }
      };
      let response = await fetch('http://192.168.1.8:3000/signup', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json',
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status.message);
      }
      const customerResponse = await fetch('http://192.168.1.8:3000/current_customer', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const customerData = await customerResponse.json();
      const data = await response.json();
      const token = data.token;
      sessionStorage.setItem('jsonwebtoken', token);
      toastr.success('Ragistration successful');
      sessionStorage.setItem('customerEmail', customerData.email);
      sessionStorage.setItem('customername', customerData.firstname);
      sessionStorage.setItem('customerLastName', customerData.lastname);
      sessionStorage.setItem('customerAddress', customerData.address);
      sessionStorage.setItem('customerCity', customerData.city);
      sessionStorage.setItem('ContactNo', customerData.contactno);


      setTimeout(function() {
        window.location.href = '/customer';
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error.message);
      toastr.error( error.message);
    }
  };

  return (
    <div>
      <div className={`container123 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container123">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title123">Sign in</h2>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaUserAlt className='icon'></FaUserAlt>
                </a>
                <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaUnlock className='icon'></FaUnlock>
                </a>
                <div className="password-input-container123">
                  <input type={showPassword ? "text" : "password"} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
                  </a>
                </div>
              </div>
              <div className='remember-forgot'>
                <Link to='/forgotepassword' className='password'>Forgot password?</Link>
              </div>
              <input type="submit" value="Login" className="btnx1y2 solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FaInstagram className='icon'></FaInstagram>
                </a>
                <a href="#" className="social-icon">
                <FaTwitter className='icon'></FaTwitter>
                </a>
                <a href="#" className="social-icon">
                <FaGoogle className='icon'></FaGoogle>
                </a>
                <a href="#" className="social-icon">
                <FaLinkedinIn className='icon'></FaLinkedinIn>
                </a>
              </div>
            </form>
            <form action="#"className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaUserAlt className='icon'></FaUserAlt>
                </a>
                <input type='text' placeholder='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaRegUser className='icon'></FaRegUser>
                </a>
                <input type='text' placeholder='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)} />
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <ImAddressBook className='icon'></ImAddressBook>
                </a>
                <input type='text' placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <MdLocationCity className='icon'></MdLocationCity>
                </a>
                <input type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaPhone className='icon'></FaPhone>
                </a>
                <input type='text' placeholder='contactno' value={contactno} onChange={(e)=>setContactno(e.target.value)} />
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <MdEmail className='icon'></MdEmail>
                </a>
                <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaUnlock className='icon'></FaUnlock>
                </a>
                <div className="password-input-container123">
                  <input type={showPassword ? "text" : "password"} placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
                  </a>
                </div>
              </div>
              <div className="input-field">
                <a href="#" className="iconicon">
                  <FaUnlock className='icon'></FaUnlock>
                </a>
                <div className="password-input-container123">
                  <input type={showPassword ? "text" : "password"} placeholder='password_confirmation' value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)}/>
                  <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
                  </a>
                </div>
              </div>

              <input type="submit" value="signup" onClick={register} className='btnx1y2' />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FaInstagram className='icon'></FaInstagram>
                </a>
                <a href="#" className="social-icon">
                <FaTwitter className='icon'></FaTwitter>
                </a>
                <a href="#" className="social-icon">
                <FaGoogle className='icon'></FaGoogle>
                </a>
                <a href="#" className="social-icon">
                <FaLinkedinIn className='icon'></FaLinkedinIn>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container123">
          <div className="panel left-panel">
            <div className="content">
              <h3>New to our community ?</h3>
              <p>
                Discover a world of possibilities! Join us and explore a vibrant
                community where ideas flourish and connections thrive.
              </p>
              <button className="btnx1y2 transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                Sign up
              </button>
            </div>
            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="imagekv" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Our Valued Members</h3>
              <p>
                Thank you for being part of our community. Your presence enriches our
                shared experiences. Let's continue this journey together!
              </p>
              <button className="btnx1y2 transparent" id="sign-in-btn" onClick={handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="imagekv" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;