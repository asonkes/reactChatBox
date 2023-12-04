import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

// firebase
// On utilise la firebase pour pouvoir l'utiliser
import database from './base';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

// animation
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  let {login} = useParams()
  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})

  useEffect(() => {
    console.log('test')
    const dbMessagesRef = ref(database, 'messages')
    // écouter d'event de changement des données
    
    // Là, c'est quand on récupère une "value"
    onValue(dbMessagesRef, (snapshot)  => {
      const data = snapshot.val()
      if(data)
      {
        setMessages(data)
      }
    })
  },[])

  const addMessage = message => {
    const newMessages = {...messages}
    newMessages[`message-${Date.now()}`] = message

    // A partie du 1er élément, tu me prends les 10 derniers éléments
    // C'est créé pour pouvoiur récupérer des éléments de la base de données...
    Object.keys(newMessages).slice(0,10).forEach(key => {
       newMessages[key] = null
    })
    setMessages(ref(database, '/', ), {
      messages: newMessages
    })
  }
  
  const myMessages = Object.keys(messages).map(
    key => (
      <Message
      key={key}
      pseudo={messages[key].pseudo}
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
  length={140}
  />
</div>
 );
}

export default App;
