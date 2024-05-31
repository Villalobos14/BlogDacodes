// src/Routes/Router.jsx
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
