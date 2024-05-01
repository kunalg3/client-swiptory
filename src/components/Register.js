import './Register.css'
import React, { useEffect, useState } from "react";
import eyeClosed from "../assets/eye-closed.png";
import eyeOpen from "../assets/eye-open.png";
import closeButton from "../assets/closeIcon.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-hot-toast'

function Register({ onClose }) {

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    });
    
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
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    // const {username, password}=formData
    // try {
    //   const response= await axios.post('http://localhost:8000/register',{
    //     username,password
    //   })
    //   if(response.error){
    //     toast.error(formData.error)
    //   }
    //   else{
    //     toast.success('Registeration successfull')
    //     navigate("/dashboard")
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    // axios.get('/')
      // const olddata=JSON.parse(localStorage.getItem("user"))
      localStorage.setItem("user",JSON.stringify(formData))
      alert("Account Successfully created")
    }
  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          <div>
            <div id="signInHeader" className="center">
            Register to SwipTory 
            </div>
            <form>
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
                <button className="loginButton" type="submit" onClick={(e)=>handleSubmit(e)}>
                  Register
                </button>
              </div>
            </form>
          </div>
          <img src={closeButton} className="close-modal" onClick={onClose} alt='close_btn'/>
        </div>
      </div>
    </>
  );
}

export default Register;