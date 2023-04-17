import React, { useState } from 'react';
import './index.css';
import {
  createEmailSession,
  createMagicUrlSession,
  createNewUser,
} from './services/appwriteconfig';

function App() {
  const activeFromLocalStorage = JSON.parse(localStorage.getItem('active'));
  const [active, setActive] = useState(() => activeFromLocalStorage || false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // const [userId, setuserId] = useState('');

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createEmailSession(email, password)
                  .then((response) => {
                    setuserId(response.userId);
                    createMagicUrlSession(response.userId, email).then(
                      (res) => {
                        alert(`Email Sent at ${email}`);
                      }
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                setEmail('');
                setName('');
                setPassword('');
              }}
            >
              <h2>Sign In</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <button>Sign in</button>
              <a href="forgot">forgot password</a>
            </form>
          </div>

          <div className="form signupForm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createNewUser(email, password, name);
                setEmail('');
                setName('');
                setPassword('');
              }}
            >
              <h2>Sign Up</h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
              />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Register</button>
              <a href="forgot">forgot password</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
