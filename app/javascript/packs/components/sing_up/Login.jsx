import React, { useState } from 'react';
import { FaEnvelope, FaLock} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://192.168.1.11:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className='sing'>
        <div className="wrapper">
          <div className='form-box login'>
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <div className='input-box'>
                <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FaEnvelope className='icon'></FaEnvelope>
              </div>
              <div className='input-box'>
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FaLock className='icon'></FaLock>
              </div>
              <div className='remember-forgot'>
                <label><input type='checkbox' />
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
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image' />
        </div>
      </div>
    </div>
  );
}

export default Login;
