import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let x=5;

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
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
        <div style={{ position: 'relative' }}>
          <label htmlFor="password">Password:</label>
          <input
            className="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Your Password"
            required
          />
          <i
            className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
            id="togglePassword"
            style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(50%)', cursor: 'pointer' }}
            onClick={handleShowPasswordChange}
          />
        </div>
        <a className="forgot" href='www.google.com'>Forgot Password ?</a>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;