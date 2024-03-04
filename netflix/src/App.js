import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Routes,Route}  from 'react-router-dom'
import { AuthContextprovider } from './context/AuthContext';

function App() {
  return (

    <>
    <AuthContextprovider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </AuthContextprovider>
    </>
    
  );
}

export default App;
