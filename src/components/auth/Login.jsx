"use client";

import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import "./Login.css";

export default function Login({ onRegisterClick, onForgotPasswordClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login with:", email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* Welcome text */}
      <h2 className="login-title">Welcome</h2>

      <form onSubmit={handleSubmit} className="login-form">
        {/* Email input */}
        <div className="input-container">
          <div className="input-icon">
            <EnvelopeIcon className="icon" />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
        </div>

        {/* Password input */}
        <div className="input-container">
          <div className="input-icon">
            <LockClosedIcon className="icon" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
          >
            {showPassword ? (
              <EyeSlashIcon className="icon" />
            ) : (
              <EyeIcon className="icon" />
            )}
          </button>
        </div>

        {/* Forgot password link */}
        <div className="forgot-password-container">
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="forgot-password-link"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login button */}
        <button type="submit" className="primary-button">
          Login
        </button>

        {/* Registration section */}
        <div className="register-section">
          <p className="register-text">Have no account yet?</p>
          <button
            type="button"
            onClick={onRegisterClick}
            className="secondary-button"
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
}
