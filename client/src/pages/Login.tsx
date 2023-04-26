import React from "react";
// import { useNavigate } from "react-router-dom";

import Google from "../imgs/google.png";
import Facebook from "../imgs/facebook.png";
import Github from "../imgs/github.png";
import Line from "../imgs/line.png";

// 利用 google、facebook登入
export default function Login() {
  // const navigate = useNavigate();

  const googleLogin = () => {
    // navigate("/auth/google");
    window.open("http://localhost:8000/auth/google", "_self");
  };
  const facebookLogin = () => {
    // navigate("/auth/google");
    window.open("http://localhost:8000/auth/facebook", "_self");
  };
  const githubLogin = () => {
    // navigate("/auth/google");
    window.open("http://localhost:8000/auth/github", "_self");
  };
  const lineLogin = () => {
    // navigate("/auth/google");
    window.open("http://localhost:8000/auth/line", "_self");
  };
  return (
    <div className="login">
      <div className="wrapper">
        {/* 第三方登入 */}
        <div className="other-login">
          <div className="google login-box" onClick={googleLogin}>
            <img src={Google} alt="" />
            <p>Login with google</p>
          </div>
          <div className="facebook login-box" onClick={facebookLogin}>
            <img src={Facebook} alt="" />
            <p>Login with facebook</p>
          </div>
          <div className="github login-box" onClick={githubLogin}>
            <img src={Github} alt="" />
            <p>Login with github</p>
          </div>
          <div className="line login-box" onClick={lineLogin}>
            <img src={Line} alt="" />
            <p>Login with Line</p>
          </div>
        </div>
        <div className="or">OR</div>
        {/* 本地端登入 */}
        <div className="local">
          <input
            className="username"
            type="text"
            placeholder="UserName"
            required
          />
          <input
            className="userpassword"
            type="password"
            placeholder="UserPassword"
            required
          />
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
