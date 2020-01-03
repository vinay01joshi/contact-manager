import React from 'react';
import Contact from './components/Contact'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="App">    
      <Header branding="Contact Manager"/>
      <Contact name="Vinay Joshi"
        email="vinay01joshi@gmail.com"
        phone="828-528-8285"/>      
      <Contact name="Tanuja Joshi"
        email="Tanuja01joshi@gmail.com"
        phone="828-528-8285"/>      
    </div>
  );
}

export default App;
