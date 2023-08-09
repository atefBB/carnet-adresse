import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './Components/Login'; // Import your Login component
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
