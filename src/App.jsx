import React, { useState, useEffect } from 'react';

import Welcome from './components/Welcome';
import Home from './components/Home';

import { Switch, Route, Redirect, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
