import React from 'react';
import logo from './logo.svg';
import moon from './Images/moon2.png';
import msgbook from './Images/msgbook.jpeg';
import './App.css';

function App() {
  return (
      <div className="background-container">
      <img className='moon' src={moon} alt="moon"/>
      <img className='msgbook' src={msgbook} alt="msgbook"/>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      </div>
  );
}

export default App;
