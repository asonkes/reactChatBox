// {useState} me permet de créer un "state" dans une fonction et normalement, on ne peut créer un "state" que dans une "className"
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
  // Ici, le message, je le type...
  const [messages, setMessages] = useState({})

  // Lui , c'est l'ensemble des messages.
  //const [message, setMessages] = useState({})

  // ajout des messages aux autres messages(boite avec tous les messages)
  const addMessage = message => {
    const newMessages = {...messages}

    // [1] ==> correspond à l'index
    // newMessages[1] = message ==> On change cette methode à celle en -dessous
    // Cette méthode permet de pouvoir à la limite utiliser et mettre en place la date d'envoi du message...
    newMessages[`message-${Date.now()}`] = message

    // set = car je modifie ma barrière d'état
    setMessages({newMessages})
  }
  
  // Object.keys lui fait un tableau qui indiquent chaque fois l'index des entrées(messages)
  const myMessages = Object.keys(messages).map(
    // Ici je fais pas des accolades après le "key", car ici, c'est un "return"
    key => (
      // Et ici, il y a un autre tableau qui est créé avec l'index, le pseudo et le message.
      <Message
      key={key}
      pseudo={messages[key].pseudo}
      // message={messages.key.message}
      // Si on écrit comme ça, il va écrire le mot "key"
      message={messages[key].message}
    />
      )
  )

return ( 
  <div className="box">
  <div>
    <div className="messages">
      {myMessages}
    </div>
  </div>
  <Formulaire 
  pseudo={pseudo}
  addMessage={addMessage}
  // ici length ne sera plus modifié
  length={140}
  />
</div>
 );
}

export default App;
