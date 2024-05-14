import React, { useState } from "react";
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';

const auth = getAuth(app);


const MyAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, username, password);
      localStorage.setItem('userID', username);
      // Redirect to dashboard or another page on successful login
      navigate('/');
    } catch (error) {
      setError("Invalid username or password");
    }
  };


  return (
    <div className="accBody">
      <div className="login-container">
        <h2>Login</h2>
        <form id="login-form" onSubmit={handleLogin}>
          <div className="form-group mb-2 w-100">
            <input type="text" id="username" placeholder="Username" required />
          </div>
          <div className="form-group mb-2 w-100">
            <div className="position-relative">
              <input type={showPassword === false ? 'password' : 'text'} id="password" placeholder="Password" required />
              <button className="transparent-button" onClick={()=>setShowPassword(!showPassword)}>
                {
                  showPassword === false ? <i class="fa-regular fa-eye-slash"></i>:
                  <i class="fa-regular fa-eye"></i>

                }
                </button>
            </div>
          </div>
          <button type="submit">Login</button>
          <p className="text-center">Not have an account 
            <b>
              <Link to = "/signup">Sign Up</Link>
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
