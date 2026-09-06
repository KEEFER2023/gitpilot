// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import LandingPage from './unAuth/LandingPage';
import './App.css';
import './firebase';

function App() {
  return (
    <div className="app-structure-container">
      <Helmet>
      
      </Helmet>
      <LandingPage />
    </div>
  );
}

export default App;