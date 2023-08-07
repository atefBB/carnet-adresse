import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../Components/LoginPage.css";
const supabase = createClient(
  "https://cojvijxfnmmjudfrsgbs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvanZpanhmbm1tanVkZnJzZ2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTc2MDMsImV4cCI6MjAwNjk5MzYwM30.cR3l6vzTDvv1qSpbPkfqCRtsEiuVBDrVPJ03LgZo3rw"
);
interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    onLogin(username, password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
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