import React, { useState } from 'react';
import './login.css';
import { FaInstagram, FaGoogle, FaLinkedinIn} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation]=useState("")
  const [errors, setErrors] = useState([]);
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [address,setAddress] = useState("");
  const [contactno,setContactno] = useState("");
  const [city,setCity] = useState("");
  const jwt = require('jsonwebtoken');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isContactnoValid = (contactno) => {
    return contactno.length == 10;
  };
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert('Invalid email format');
      return;
    }

    if (!isPasswordValid(password)) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.11:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error('Login failed');
      }

      if (!data || !data.status) {
        console.log('Invalid response:', data);
        alert('Invalid response from server');
        return;
      }

      if (data.status.code === 404) {
        console.log('Email not found:', data);
        alert('Email not found');
        return;
      }

      if (data.status.code !== 200) {
        console.log('Invalid email or password:', data);
        alert('Invalid email or password');
        return;
      }

      const token = data.token;
      sessionStorage.setItem('jsonwebtoken', token);
      console.log('Login successful', token);
      window.location.href = '/customer';
    } catch (error) {
      console.error('Login error:', error.message);
      alert('An error occurred. Please try again later.');
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

      if (!isEmailValid(email)) {
        alert('Invalid email format');
        return;
      }

      if (!isPasswordValid(password)) {
        alert('Password must be at least 6 characters long');
        return;
      }

      if (password !== password_confirmation) {
        alert('Password and confirmation password do not match');
        return;
      }

      if (!password  || !password_confirmation || !email || !firstname || !lastname || !address || !city || !contactno ) {
        alert('balnk filde');
        return;
      }

      if (!isContactnoValid(contactno)){
        alert('contactno is not valid');
        return;
      }
      let response = await fetch('http://192.168.1.11:3000/signup', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      const token = data.token;
      sessionStorage.setItem('jsonwebtoken', token);

      console.log('  successful', token);
      window.location.href = '/customer';
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  }

  return (
    <div>
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title123">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='remember-forgot'>
                <label><input type='checkbox' />
                Remember me </label>
                <Link to='/Forgotepass'>Forgot password?</Link>
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
                <i className="fas fa-user"></i>
                <input type='text' placeholder='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type='text' placeholder='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type='text' placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type='text' placeholder='contactno' value={contactno} onChange={(e)=>setContactno(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type='password' placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type='password' placeholder='password_confirmation' value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)} required/>
              </div>
              {/* <Link to="/customer"><input type="submit" value="signup" onClick={register} className='btnx1y2' /></Link> */}
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

        <div className="panels-container">
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
      {/* <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image'/>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
