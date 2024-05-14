import React, { useState } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';


const auth = getAuth(app);


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  
    const onChangeField=(e)=>{
        console.log(e.target.value);
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    RegisterUser(username, password);
  };

  const RegisterUser = (email, password) => {
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created
        const user = userCredential.user;
        console.log("User created:", user);
        
      })
      .catch((error) => {
        // Error creating user
        console.error("Error creating user:", error);
        
      });
  }



  return (
        <div className="accBody">
            <div className="login-container">

                <h2>Sign Up</h2>
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group mb-2 w-100">
                        <input type="text" id="username" placeholder="Username" 
                        onChange={onChangeField} required />
                    </div>
                    <div className="form-group mb-2 w-100">
                        <div className="position-relative">
                            <input type={showPassword === false ? 'password' : 'text'} id="password" placeholder="Password" 
                            onChange={onChangeField} required />
                            <button className="transparent-button" onClick={()=>setShowPassword(!showPassword)}>
                            {
                            showPassword === false ? <i class="fa-regular fa-eye-slash"></i>:
                            <i class="fa-regular fa-eye"></i>

                            }
                            </button>
                        </div>
                    </div>
                    <div className="form-group mb-2 w-100">
                        <div className="position-relative">
                            <input type={showPassword1 === false ? 'password' : 'text'} id="confirm_password" placeholder="Confirm Password" 
                            onChange={onChangeField} required />
                            <button className="transparent-button" onClick={()=>setShowPassword1(!showPassword1)}>
                            {
                            showPassword1 === false ? <i class="fa-regular fa-eye-slash"></i>:
                            <i class="fa-regular fa-eye"></i>

                            }
                            </button>
                        </div>
                    </div>
                    <button type="submit">Sign Up</button>
                        <p className="text-center">Already have an account 
                        <b>
                            <Link to = "/myaccount">Login</Link>
                        </b>
                        </p>
                </form>
            </div>
        </div>
  );
};

export default SignUp;
