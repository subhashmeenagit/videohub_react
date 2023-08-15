import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/freevideos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
