"use client";

import React, { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import "./Register.css";

export default function Register({ onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Register with:", email, password, confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-container">
      {/* Register text */}
      <h2 className="register-title">Register</h2>

      <form onSubmit={handleSubmit} className="register-form">
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

        {/* Confirm Password input */}
        <div className="input-container">
          <div className="input-icon">
            <LockClosedIcon className="icon" />
          </div>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-input"
            required
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="password-toggle"
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="icon" />
            ) : (
              <EyeIcon className="icon" />
            )}
          </button>
        </div>

        {/* Register button */}
        <button type="submit" className="primary-button">
          Register
        </button>

        {/* Login section */}
        <div className="login-section">
          <p className="login-text">Already have an account?</p>
          <button
            type="button"
            onClick={onLoginClick}
            className="secondary-button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
