import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import { useParams } from 'react-router-dom';

// firebase
// On utilise la firebase pour pouvoir l'utiliser
import database from './base';
import { getDatabase, ref, set, remove, onValue } from 'firebase/database';

// animation , c'est un composant qui va permettre de mettre à jour mes valeurs...
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./animation.css";

const App = () => {
  let {login} = useParams()
  const [pseudo, setPseudo] = useState(login)
  const [messages, setMessages] = useState({})
  // pour linstant, avec cela, je créé juste une référence avec :
  // const nodeRef = useref()
  const nodeRef = useRef()
  const messageRef = useRef()

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
    Object.keys(newMessages).slice(0,-10).forEach(key => {
       newMessages[key] = null
    })
    set(ref(database, '/', ), {
      messages: newMessages
    })
  }

  // ici, c'est une fonction qui va permettre dans la lecture des messages... 
  // Cela va permettre de savoir qui envoyé le messsage (ex : Paolo : Bonjour)
  // Donc ce nom devant le message, c'est le pseudo
  const isUser = myPseudo => myPseudo === pseudo // pseudo qui se trouve dans l'url et on le détermine pour moi !!!
  
  const myMessages = Object.keys(messages).map(
    key => (
      <CSSTransition
      key={key}
      timeout={200}
      className={'fade'}
      nodeRef={nodeRef}
      >

      <Message
      isUser = {isUser}
      pseudo={messages[key].pseudo}
      message={messages[key].message}
      />
      </CSSTransition>
      )
  )

  // TransitionGroup = container de l'animation
  // ref={messageRef} ==> comme ci on avait document.querySelector(...)
return ( 
  <div className="box">
  <div>
    <div className="messages" ref={messageRef}>
    <TransitionGroup className='message'>
    {myMessages}
    </TransitionGroup>
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
