import React from "react";
import logo from "../../assets/logo.svg";
import "./AuthLayout.css";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      {/* Left side with logo */}
      <div className="auth-left-panel">
        {/* Logo positioned at Top: 102px, Left: 132px, Size: 503x402 */}
        <img src={logo || "/placeholder.svg"} alt="CVT Logo" className="auth-logo" />
        <h1 className="auth-welcome-text">Welcome to CVT</h1>
      </div>

      {/* Right side with authentication forms */}
      <div className="auth-right-panel">
        <div className="auth-form-container">{children}</div>
      </div>
    </div>
  );
}


