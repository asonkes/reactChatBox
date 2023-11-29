//import React, { Component } from 'react';
// On change pour avoir un "State"
import React, { useState } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

const App = () => {
  let {login} = useParams()

  // Mon state il s'appelle "pseudo"
  // On a une méthode propre à chaque "state"
  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  // Lui , c'est l'ensemble des messages.
  //const [message, setMessages] = useState({})

  // ajout des messages aux autres messages(boit avec tous les messages)
  const addMessage = message => {
    const newMessages = {...messages}

    // [1] ==> correspond à l'index
    //newMessages[1] = message ==> On change cette methode à celle en -dessous
    // Cette méthode permet de pouvoir à la limite utiliser et mettre en place la date d'envoi du message...
    newMessages[`message-${Date.now()}`] = message

    // set = car je modifie ma barrière d'état
    setMessages({newMessages})
  }

return ( 
  <div className="box">
  <div>
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  </div>
  <Formulaire 
  pseudo={pseudo}
  addMessage={addMessage}
  />
</div>
 );
}

export default App;
