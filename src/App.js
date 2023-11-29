import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='box'>
        <div>
          <div className='messages'>
             <Message />
             <Message />
             <Message />
          </div>
        </div>
        <Formulaire />
      </div>
    );
  }
}
 
export default App;