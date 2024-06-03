import React, { useState } from 'react';
import './forgotepassword.css';
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const ForgotPasswordForm = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null); 
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [imagePreview, setImagePreview] = useState(null); 

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      let item = {
        saler: {
          name,
          file,
          adress,
          city,
          phoneno,
          email,
          password,
          password_confirmation
        }
      };
      let response = await fetch('http://192.168.1.8:3000/salers/signup', {
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

      const data = await response.json();
      const token = data.token;
      sessionStorage.setItem('jsontoken', token);
      toastr.success('Registration successful');

      setTimeout(function() {
        window.location.href = '/saler';
      }, 2000);
    } catch (error) {
      console.error('Registration error:', error.message);
      toastr.error(error.message);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
       try {
      const response = await fetch('http://192.168.1.8:3000/salers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ saler: { email, password } }),
        credentials: 'include',

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
      sessionStorage.setItem('jsontoken', token);
      toastr.success('Login successful');
      setTimeout(function () {
        window.location.href = '/saler';
      }, 1000);
    } catch (error) {
      console.error('Login error:', error.message);
      toastr.error('Login failed: ' + error.message);
    }

  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 mt-5">
          <div className="card mt-5">
            <div className="card-body mt-5">
              {isSignIn ? (
                <>
                  <h2 className="card-title">Sign In</h2>
                  <form onSubmit={handleSignInSubmit}>
                    <div className="mb-3">
                      <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className='form-control'  style={{fontSize: '13px'}}/>
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)}  style={{fontSize: '13px'}}/>
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <button className='btn btn-primary' style={{fontSize: '13px'}}>Sign In</button>
                  </form>
                  <p className="mt-3 text-primary" onClick={toggleForm}>Don't have an account? Sign Up</p>
                </>
              ) : (
                <>
                  <h2 className="card-title">Sign Up</h2>
                  <form onSubmit={handleSignUpSubmit}>
                    <div className="mb-3">
                      <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required className='form-control'  style={{fontSize: '13px'}}/>
                    </div>
                    <div className="mb-3">
                      <input type="file" name="file" onChange={handleImageChange} required className='form-control' />
                    </div>
                    {imagePreview && (
                      <div className="mb-3">
                        <img src={imagePreview} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                      </div>
                    )}
                    <div className="mb-3">
                      <input type="text" name="address" placeholder="Address" onChange={(e) => setAdress(e.target.value)} required className='form-control' style={{fontSize: '13px'}} />
                    </div>
                    <div className="mb-3">
                      <input type="text" name="phoneNo" placeholder="Phone Number" onChange={(e) => setPhoneno(e.target.value)} required className='form-control'  style={{fontSize: '13px'}}/>
                    </div>
                    <div className="mb-3">
                      <input type="text" name="city" placeholder="City" onChange={(e) => setCity(e.target.value)} required className='form-control'  style={{fontSize: '13px'}} />
                    </div>
                    <div className="mb-3">
                      <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className='form-control'   style={{fontSize: '13px'}}/>
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)}  style={{fontSize: '13px'}} />
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' className='form-control' onChange={(e) => setPassword_confirmation(e.target.value)}  style={{fontSize: '13px'}}/>
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <button className='btn btn-primary'  style={{fontSize: '13px'}}>Sign Up</button>
                  </form>
                  <p className="mt-3 text-primary" onClick={toggleForm} >Already have an account? Sign In</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
