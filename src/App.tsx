import React from 'react';
import LoginPage from './Components/Login';
import './Components/LoginPage.css'; // Import the CSS file


const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Replace this function with your actual login logic, e.g., API calls, etc.
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <LoginPage onLogin={handleLogin} />
    </div>
  );
};

export default App;
