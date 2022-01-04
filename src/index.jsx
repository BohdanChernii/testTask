import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter, Router } from 'react-router-dom';
const root = document.querySelector('.root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
