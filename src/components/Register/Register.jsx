import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();


  const [errors, setErrors] = useState({
    passwordMatch: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'password' || name === 'confirmPassword') {
      setErrors({
        ...errors,
        passwordMatch: name === 'confirmPassword' 
          ? value !== formData.password
          : formData.confirmPassword !== value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return;
    }
    console.log('Form submitted:', formData);
    navigate('/chat');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Register</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Name fields */}
          <div className="name-fields">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                pattern="^[A-Za-z\u0600-\u06FF\s]{2,20}$"
                title="Name must be 2-20 characters"
                required 
              />
            </div>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                pattern="^[A-Za-z\u0600-\u06FF\s]{2,20}$"
                title="Name must be 2-20 characters"
                required 
              />
            </div>
          </div>

          {/* Phone field */}
          <div className="input-group phone-input">
            <FaPhone className="input-icon" />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              pattern="^01[0-9]{9}$"
              title="11 digits starting with 01"
              required 
            />
          </div>

          {/* Email field */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]+@gmail\.com$"
              title="Format: characters123@gmail.com"
              required 
            />
          </div>

          {/* Password field */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              title="8+ chars with letters and numbers"
              required 
            />
          </div>

          {/* Confirm Password field with fixed lock icon */}
          <div className="input-group">
            <div className="input-with-icon">
              <FaLock className="input-icon" />
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
              />
            </div>
            {errors.passwordMatch && (
              <div className="error-message">
                <FaLock className="error-icon" />
                <span>Passwords don't match!</span>
              </div>
            )}
          </div>

          <button type="submit" className="login-button">Register</button>
          
          <div className="register-prompt">
            Already have an account? <Link to="/" className="register-link">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;