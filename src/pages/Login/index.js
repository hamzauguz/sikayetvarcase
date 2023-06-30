import React, { useEffect } from "react";
import "./Styles.Login.css";
import InputWithLabel from "../../components/input-with-label";

const Login = () => {
  useEffect(() => {
    document.body.className = "containerLogin";
  }, []);
  return (
    <div>
      <div className="cardLogin">
        <div className="topLoginPlace">
          <span className="cardLoginTitle">MANAGE COURSES</span>
          <div className="topLoginEndPlace">
            <span className="loginSignInTitle">SIGN IN</span>
            <span className="loginDescTitle">
              Enter your credentials to access your account
            </span>
          </div>
        </div>
        <div className="bottomLoginPlace">
          <InputWithLabel label={"Email"} placeholder={"Enter your email"} />
          <InputWithLabel
            label={"Password"}
            placeholder={"Enter your password"}
          />
          <span className="signin-button">Sign In</span>
          <span className="signin-forgotpass-style">
            Forgot your password?
            <span className="login-resetpw-place">Reset Password</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
