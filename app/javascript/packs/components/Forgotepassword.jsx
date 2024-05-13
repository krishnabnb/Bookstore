// App.js

import React from 'react';
import './forgotepassword.css';

class Forgotepassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false
    };
  }

  componentDidMount() {
    const container = document.getElementById('container');

    container.addEventListener('click', this.handleButtonClick);
  }

  componentWillUnmount() {
    const container = document.getElementById('container');

    container.removeEventListener('click', this.handleButtonClick);
  }

  handleButtonClick = (event) => {
    if (event.target.id === 'signUp12') {
      this.setState({ isSignUp: true });
    } else if (event.target.id === 'signIn12') {
      this.setState({ isSignUp: false });
    }
  };

  render() {
    return (
      <div className="container" id="container">
        <div className={`form-container ${this.state.isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
          <form action="#">
            <h1>{this.state.isSignUp ? 'Create Account' : 'Sign in'}</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            {this.state.isSignUp ? (
              <span>or use your email for registration</span>
            ) : (
              <span>or use your account</span>
            )}
            {!this.state.isSignUp && <input type="email" placeholder="Email" />}
            <input type="password" placeholder="Password" />
            {!this.state.isSignUp && <a href="#">Forgot your password?</a>}
            <button id="signUp12">Sign Up</button>
            <button id="signIn12">Login</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel ${this.state.isSignUp ? 'overlay-left' : 'overlay-right'}`}>
              {this.state.isSignUp ? (
                <>
                  <h1>Welcome Back!</h1>
                  <p>Don't have an account? <br /> Join us now</p>
                  <button className="ghost" id="signIn12">Sign Up</button>
                </>
              ) : (
                <>
                  <h1>Hello friend!</h1>
                  <p>Login to your account</p>
                  <button className="ghost" id="signUp12">Login</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgotepassword;
