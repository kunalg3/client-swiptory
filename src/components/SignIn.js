import './SignIn.css'
import React, { useState } from "react";
import eyeClosed from "../assets/eye-closed.png";
import eyeOpen from "../assets/eye-open.png";
import closeButton from "../assets/closeIcon.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn({ onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    });
    
  const navigate=useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    }; 

  const [passwordtype, setPasswordtype] = useState("password");
  const [visibility, setVisibility] = useState(eyeClosed);
  
  const toggle = () => {
    if (passwordtype === "password") {
      setPasswordtype("text");
      setVisibility(eyeOpen);
    } else {
      setPasswordtype("password");
      setVisibility(eyeClosed);
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const loggeduser=JSON.parse(localStorage.getItem('user'))
    // axios.get('/')
    if(formData.username === loggeduser.username 
      && formData.password===loggeduser.password)
      {
        localStorage.setItem("loggedin",true)
        navigate("/dashboard")
      }
      else{
        alert("Wrong Credentials")
      }
  }

  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <div>
            <div id="signInHeader" className="center">
              Login to SwipTory
            </div>
            <form onSubmit={handleSubmit}>
              <div className="formInput-container">
                <div className="input-label">
                  <p id="username">Username</p>
                </div>
                <div className="input-box">
                <input 
                  name="username" 
                  value={formData.username} 
                  type="text" 
                  placeholder="Enter username" 
                  onChange={handleInputChange}
                  ></input>
                </div>

                <div className="input-label">
                  <p id="password">Password</p>
                </div>
                <div className="input-box">
                <input
                    id="password"
                    name="password"
                    value={formData.password}
                    type={passwordtype}
                    placeholder="Enter password"
                    onChange={handleInputChange}
                  ></input>
                  <img src={visibility} onClick={toggle} alt="eye"/>
                </div>
              </div>
              <div>
                <button className="loginButton" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
      </div>
    </>
  );
}

export default SignIn;