import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import './App.css';
import Formulaire from './components/Formulaire';
import Message from './components/Message';
// C'est plus DataBase que j'importe , c'est fireStore...
import firestore from './base';
// 1ere nouvelle fonction = doc, puis setDoc, puis onSnapshot...
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css';

const App = () => {
  const { login } = useParams();
  const [messages, setMessages] = useState([]);
  const [pseudo, setPseudo] = useState(login);
  const messageRef = useRef();
  const nodeRef = useRef();

  useEffect(() => {
    const dbMessagesRef = doc(firestore, 'messages', ' jyDTI2hXvkhFuTnGL95R '); // jyDTI2hXvkhFuTnGL95R = c'est mon identifiant // Attention, laissez les espaces sur le côté, au sinon problème...
    
    onSnapshot(dbMessagesRef /*ref = dbMessagesRef*/, (snapshot) => {
      const data = snapshot.data();
      if (data) {
        // Modifier pour ne récupérer que les 10 derniers messages
        const lastTenMessages = data.messages.slice(-10);
        // Si je n'arrive pas à assigner les 10 derniers messages, j'assigne un dossier de messages VIDE
        // || = ou [] = tableau vide...
        // || = assignation conditionnelle, comme ça on est sûr qu'il trouve une réponse...
        setMessages(lastTenMessages || []);
      }
    });
  }, [pseudo]);

  const addMessage = (message) => {
    // id: Date.now(), ...message ==> cetait pour ici, ajouter à chaque nouveau message, j'ajoute un id, la date et le message...
    const newMessages = [...messages, { id: Date.now(), ...message }];
   
    // Limiter la taille du tableau à 10 messages
    const limitedMessages = newMessages.slice(-10);

    // Ca cela permet par exemple, qd on a des ventes en ligne, si le temps qu'on se décide l'article est plus en stock, la fenêtre s'efface automatiquement...
    // Firestore moins sécurisant et moins performante... PhpMyAdmin reste plus performant...
    const messagesCollectionRef = doc(firestore, 'messages', ' jyDTI2hXvkhFuTnGL95R ');

    // Donc à force d'écrire les messages, ici le "limitedMessages" permet de limiter les 10 premiers messages, donc les autres, sont effacés... c'est pour que la base de données soit pas trop grande...
    setDoc(messagesCollectionRef, { messages: limitedMessages });
  };

  const isUser = (myPseudo) => myPseudo === pseudo;

  const myMessages = messages.map(
    (message) => (
      <CSSTransition
        timeout={200}
        classNames='fade'
        key={message.id}
        nodeRef={nodeRef}
      >
        <Message
          isUser={isUser}
          pseudo={message.pseudo}
          message={message.message}
        />
      </CSSTransition>
    )
  );

  return (
    <div className='box'>
      <div>
        <div className="messages" ref={messageRef}>
          <TransitionGroup className="message">
            {myMessages}
          </TransitionGroup>
        </div>
      </div>
      <Formulaire
        length={140}
        pseudo={pseudo}
        addMessage={addMessage}
      />
    </div>
  );
};

export default App;