import React, { useState } from 'react';
import './login.css'; 
import { FaInstagram, FaGoogle, FaLinkedinIn} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const SignIn = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div>
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title123">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
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
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btnx1y2" value="Sign up" />
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
    <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btnx1y2">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image'/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
