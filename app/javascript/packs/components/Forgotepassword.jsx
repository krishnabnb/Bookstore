import React, { useState } from 'react';
import './forgotepassword.css';
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

const ForgotPasswordForm = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [file, setFile] = useState(null);

  // let formFields = {};
  // const [file, setFile] = useState(null);
  // console.log('file', file)

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign In form submitted');
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      let item = {
        saler: {
          name,
          image,
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
  const handleAddBook = () => {
    setShowAddBookModal(true);
  };

  const handleCloseAddBookModal = () => {
    setShowAddBookModal(false);
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
                      <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <button className='btn btn-primary'>Sign In</button>
                  </form>
                  <p className="mt-3 text-primary" onClick={toggleForm}>Don't have an account? Sign Up</p>
                </>
              ) : (
                <>
                  <h2 className="card-title">Sign Up</h2>
                  <form onSubmit={handleSignUpSubmit}>
                    <div className="mb-3">
                      <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3">
                      <input type="file" name="file" placeholder="File" onChange={(e) => setImage(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3">
                      <input type="text" name="address" placeholder="Address" onChange={(e) => setAdress(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3">
                      <input type="text" name="phoneNo" placeholder="Phone Number" onChange={(e) => setPhoneno(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3">
                      <input type="text" name="city" placeholder="City" onChange={(e) => setCity(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3">
                      <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className='form-control' />
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <div className="mb-3 password-input-container123">
                      <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' className='form-control' onChange={(e) => setPassword_confirmation(e.target.value)} />
                      <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <BiHide className='icon123'></BiHide> : <BiShow className='icon123'></BiShow>}
                      </a>
                    </div>
                    <button className='btn btn-primary'>Sign Up</button>
                  </form>
                  <p className="mt-3 text-primary" onClick={toggleForm}>Already have an account? Sign In</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleAddBook}>Add Book</button>

      {showAddBookModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseAddBookModal}>&times;</span>
            <h2>Add Book</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const title = e.target.title.value;
              const author = e.target.author.value;
              const description = e.target.description.value;
              const price = e.target.price.value;
              const published_at = e.target.published_at.value;
              props.handleFormSubmit({ title, author, description, price, published_at, image: file });
              e.target.reset();
              setShowAddBookModal(false);
            }}>
              <div>
                <input type="text" name="title" placeholder="Title" required />
              </div>
              <div>
                <input type="text" name="author" placeholder="Author" required />
              </div>
              <div>
                <input type="text" name="description" placeholder="Description" required />
              </div>
              <div>
                <input type="text" name="price" placeholder="Price" required />
              </div>
              <div>
                <input type="date" name="published_at" placeholder="Published Date" required />
              </div>
              <div>
                <input type="file" name="image" onChange={(e) => setFile(e.target.files[0])} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
