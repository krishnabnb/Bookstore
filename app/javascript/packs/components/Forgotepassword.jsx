import React, { useState } from 'react';
import './forgotepassword.css'; // Assuming you have a CSS file for styles
import { BiShow, BiHide } from "react-icons/bi";

const Forgotepassword = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="reset">
      <div className="forgoteclass">
        <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Change Password</label>
            <div className="password-input-container">
              <input type={showPassword ? "text" : "password"} placeholder='Old Password' className='input123098'  />
              <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
              </a>
            </div>
            <div className="password-input-container">
              <input type={showPassword ? "text" : "password"} placeholder='New Password' className='input123098'  />
              <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
              </a>
            </div>
            <div className="password-input-container">
              <input type={showPassword ? "text" : "password"} placeholder='Confirm Password' className='input123098'  />
              <a href="#" className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiHide className='icon'></BiHide> : <BiShow className='icon'></BiShow>}
              </a>
            </div>

            <button className='buttongt'>Save</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Forgot Password</label>
            <input type="email" name="email" placeholder="Email" required className='input123098' />
            <button className='buttongt'>Next</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Forgotepassword;
