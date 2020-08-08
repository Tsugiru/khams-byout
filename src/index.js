import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDMnSVg2p7HoReH7XkT8Wrpn6bzKzbdojY",
  authDomain: "khams-byout.firebaseapp.com",
  databaseURL: "https://khams-byout.firebaseio.com",
  projectId: "khams-byout",
  storageBucket: "khams-byout.appspot.com",
  messagingSenderId: "152446630233",
  appId: "1:152446630233:web:098f0914d6e8147204b448",
  measurementId: "G-TYBFX2PW0L"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
