import React, { useState } from "react";
import "../Components/LoginPage.css";
import supabase from "../supabaseConfig";
import { useNavigate } from "react-router-dom";


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleShowPasswordChange = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    console.log({ response })
    console.log(response.error);
    if(response.error===null){
      localStorage.setItem("token",response.data.session.access_token);
      navigate("/navbar");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Email:</label>
        <input
          className="UserName"
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter Your Username"
          required
        />
      </div>
      <div style={{ position: "relative" }}>
        <label htmlFor="password">Password:</label>
        <input
          className="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Your Password"
          required
        />
        <i
          className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
          id="togglePassword"
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(50%)",
            cursor: "pointer",
          }}
          onClick={handleShowPasswordChange}
        />
      </div>
      <a className="forgot" href="www.google.com">
        Forgot Password ?
      </a>
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginPage;