import React, { useEffect, useState } from "react";
import "./Styles.Login.css";
import InputWithLabel from "../../components/input-with-label";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("hello@sikayetvar.com");
  const [userPassword, setUserPassword] = useState("123");

  useEffect(() => {
    document.body.className = "containerLogin";
    return () => {
      document.body.className = "";
    };
  }, []);

  useEffect(() => {
    const userControl = async () => {
      if (localStorage.getItem("token") !== null) {
        await navigate("/home", { replace: true });
      } else {
        await navigate("/login", { replace: true });
      }
    };
    userControl();
  }, []);

  console.log(inputs);

  console.log(inputs.useremail);
  console.log(inputs.userpassword);

  const handleLogin = () => {
    console.log("click");
    if (userEmail === "hello@sikayetvar.com" && userPassword === "123") {
      localStorage.setItem("token", userEmail);
      window.location.reload();
      setTimeout(() => {
        navigate("/home");
      }, 1000);

      console.log("click inside");
    }
  };

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
          <InputWithLabel
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            label={"Email"}
            placeholder={"Enter your email"}
          />
          <InputWithLabel
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter your password"}
          />
          <span onClick={() => handleLogin()} className="signin-button">
            Sign In
          </span>
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
