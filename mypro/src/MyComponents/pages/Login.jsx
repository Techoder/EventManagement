import React, { useState } from "react";
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [uname, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    const userData = {
      uname,
      password
    };
  
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  

      const data = await response.json();
  
      if (data.success) {
        localStorage.clear();
        var name = JSON.stringify(userData["uname"])
        console.log(name);
        localStorage.setItem("name",name);
        localStorage.setItem("login","successful")
        navigate('/');
        
        
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in :', error);
    }
  };
  

  return (
    <Wrapper>
      <div>
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="username" onChange={(e) => setName(e.target.value)} value={uname}/>
              <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
              <button type="button" onClick={collectData}>login</button>
              <p className="message">Not registered? <NavLink to="/Signup"><a href="#">Create an account</a></NavLink></p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
    
    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .form {
      background: #FFFFFF;
      max-width: 360px;
      padding: 45px;
      text-align: center;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    
    .login h3 {
      color: #e61041;
    }
    
    .login-header p {
      color: #333;
    }
    
    .login-form input {
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
      color: #333;
    }
    
    .login-form button {
      text-transform: uppercase;
      outline: 0;
      background-color: #e61041;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #fff;
      font-size: 14px;
      transition: background-color 0.3s ease;
      cursor: pointer;
    }
    
    .login-form button:hover {
      background-color: #c30733;
    }
    
    .message {
      margin: 15px 0 0;
      color: #555;
      font-size: 12px;
    }
    
    .message a {
      color: #4CAF50;
      text-decoration: none;
    }
`;

export default Login;
