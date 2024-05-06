import React, { useState } from 'react'
import './login.css';
import { FaLock, FaEnvelope, FaUser,FaCity } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";


function SignUp () {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [password_confirmation, setPassword_confirmation]=useState("")
  const [errors, setErrors] = useState([]);
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [address,setAddress] = useState("");
  const [contactno,setContactno] = useState("");
  const [city,setCity] = useState("");

  async function register(){
    let item = {
      customer: {firstname,lastname,address,city,contactno,email,password,password_confirmation

      }
    };

    let result = await fetch('http://192.168.1.11:3000/signup',{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "content-Type":'application/json',
        "Accept" : 'application/json'
      }
    })
    result = await result.json()
    console.warn(result)

    if (result.status !== 200) {
      setErrors(result.errors);
    }
  }

  return(
    <div>
      <div className='sing'>
        <div className='wrapper'>
          <div className='form-box register'>
            <form>
              <h1>Registration</h1>
              <div className='input-box'>
                <input type='text' placeholder='firstname' value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                <FaUser className='icon'></FaUser>
              </div>
              <div className='input-box'>
                <input type='text' placeholder='lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                <FaUser className='icon'></FaUser>
              </div>
              <div className='input-box'>
                <input type='text' placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
                <CiLocationOn className='icon'></CiLocationOn>
              </div>
              <div className='input-box'>
                <input type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
                <FaCity className='icon'></FaCity>
              </div>
              <div className='input-box'>
                <input type='text' placeholder='contactno' value={contactno} onChange={(e)=>setContactno(e.target.value)} />
                <MdOutlinePhoneInTalk className='icon'></MdOutlinePhoneInTalk>
              </div>
              <div className='input-box'>
                <input type='text' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <FaEnvelope className='icon'></FaEnvelope>
              </div>
              <div className='input-box'>
                <input type='password' placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <FaLock className='icon'></FaLock>
              </div>
              <div className='input-box'>
                <input type='password' placeholder='password_confirmation' value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)} required/>
                <FaLock className='icon'></FaLock>
              </div>
              <div className='remember-forgot'>
                <label><input type='checkbox' />
                agree to the terms & conditions</label>
              </div>
              <button onClick={register} className='button123'>SignUp</button>
              <div className='register-link'>
                <p>Don't have an account? <Link to="/Login">Login</Link></p>
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
  )
}

export default SignUp