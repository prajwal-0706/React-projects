import React, { useEffect, useState } from 'react';
import './index.css';
import { createNewUser } from './services/appwriteconfig';

function App() {
  const activeFromLocalStorage = JSON.parse(localStorage.getItem('active'));
  const [active, setActive] = useState(() => activeFromLocalStorage || false);

  useEffect(() => {
    localStorage.setItem('active', JSON.stringify(active));
  }, [active]);
  return (
    <div className={`App ${active ? 'active' : ''}`}>
      <div className="container">
        <div className="leftbg">
          <div className="box signin">
            <h2 className="h1">Already Have an Account ?</h2>
            <button
              onClick={() => {
                setActive(false);
                createNewUser('app@gmail.com', 'Prajwalyoumadeit', 'Khushi');
              }}
              className="btn signinbtn"
            >
              Sign in
            </button>
          </div>
          <div className="box signup">
            <h2 className="h2">Make a New Account ?</h2>
            <button
              onClick={() => {
                setActive(true);
              }}
              className="btn signupbtn"
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className={`form-cont ${active ? 'active' : ''}`}>
          <div className="form signinForm">
            <form action="#">
              <h2>Sign In</h2>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Sign in</button>
              <a href="forgot">forgot password</a>
            </form>
          </div>

          <div className="form signupForm">
            <form action="#">
              <h2>Sign Up</h2>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Register</button>
              <a href="forgot">forgot password</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
