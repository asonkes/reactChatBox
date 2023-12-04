import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';

// Ici, on a mis un alias sur le BrowserRouter... C'est conseillé de faire ça...
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MyApp = () => (
  // Ici, que se soit un BrowserRouter ou un HasshRouter, c'est la même chose acr on a mis un alias...
  // Routes = C'est entre guillements, c'est mon body...
  // Route = c'est chaque chemin, elle peut être soit orpheline, ou en paire...
  // element = 
  <Router>
    <Routes>
      <Route path='/' element={<Connexion />} />
      <Route path='/pseudo/:login' element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();