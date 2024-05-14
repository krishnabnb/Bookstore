import React, { useState } from 'react';
import './forgotepassword.css'; // Assuming you have a CSS file for styles

const Forgotepassword = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="reset">
      <div className="forgoteclass">
        <input type="checkbox" id="chk" aria-hidden="true" checked={isChecked} onChange={handleCheckboxChange} />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="email" name="email" placeholder="Email" required  className='input123098'/>
            <input type="password" name="pswd" placeholder="Password" required className='input123098' />
            <button className='buttongt'>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder="Email" required className='input123098' />
            <input type="password" name="pswd" placeholder="Password" required className='input123098' />
            <button className='buttongt'>Login</button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Forgotepassword;
