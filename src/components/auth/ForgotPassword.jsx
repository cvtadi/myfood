"use client";

import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "./ForgotPassword.css";

export default function ForgotPassword({ onConfirmClick }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log("Reset password for:", email);
    onConfirmClick(email);
  };

  return (
    <div className="forgot-password-container">
      {/* Forgot Password text */}
      <h2 className="forgot-password-title">Forgot Your Password</h2>

      <p className="forgot-password-subtitle">
        Enter your email for forgetting password
      </p>

      <form onSubmit={handleSubmit} className="forgot-password-form">
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

        {/* Confirm Mail button */}
        <button type="submit" className="primary-button">
          Confirm Mail
        </button>
      </form>
    </div>
  );
}
