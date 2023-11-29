import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';

const App = () => {
return ( 
  <div className="box">
  <div>
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  </div>
  <Formulaire />
</div>
 );
}

export default App;
