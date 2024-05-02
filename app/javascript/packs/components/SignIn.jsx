import React from 'react'
import './login.css';
import { FaUser, FaLock} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <div className='sing'>
        <div className="wrapper">
          <div className='form-box login'>
            <form action=''>
              <h1>Login</h1>
              <div className='input-box'>
                <input type='text'
                placeholder='Username' required/>
                <FaUser className='icon'></FaUser>
              </div>
              <div className='input-box'>
                <input type='password'
                placeholder='Password' required/>
                <FaLock className='icon'></FaLock>
              </div>
              <div className='remember-forgot'>
                <label><input type='checkbox'/>
                Remember me </label>
                <a href="#">Forgot password?</a>
              </div>
              <button type='submit' className='button123'>Login</button>
              <div className='register-link'>
                <p>Don't have an account? <Link to="/SignUp">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image'/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
