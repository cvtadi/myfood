"use client";

import { useState } from "react";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import CheckEmail from "./components/auth/CheckEmail";
import SetNewPassword from "./components/auth/SetNewPassword";

function App() {
  // State to track which screen to display
  const [currentScreen, setCurrentScreen] = useState("login");
  const [email, setEmail] = useState("");

  // Function to handle screen changes
  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  // Function to handle email capture for password reset flow
  const handleEmailCapture = (capturedEmail) => {
    setEmail(capturedEmail);
  };

  return (
    <AuthLayout>
      {currentScreen === "login" && (
        <Login
          onRegisterClick={() => handleScreenChange("register")}
          onForgotPasswordClick={() => handleScreenChange("forgot-password")}
        />
      )}
      {currentScreen === "register" && (
        <Register onLoginClick={() => handleScreenChange("login")} />
      )}
      {currentScreen === "forgot-password" && (
        <ForgotPassword
          onConfirmClick={(email) => {
            handleEmailCapture(email);
            handleScreenChange("check-email");
          }}
        />
      )}
      {currentScreen === "check-email" && (
        <CheckEmail
          email={email}
          onConfirmCodeClick={() => handleScreenChange("set-new-password")}
        />
      )}
      {currentScreen === "set-new-password" && (
        <SetNewPassword onConfirmClick={() => handleScreenChange("login")} />
      )}
    </AuthLayout>
  );
}

export default App;
