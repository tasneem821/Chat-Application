import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <form className="login-form">
          {/* Username Field */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Username" required />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Login
          </button>

          {/* Register Prompt */}
          <div className="register-prompt">
            Don't have an account? <Link to="/register" className="register-link">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;