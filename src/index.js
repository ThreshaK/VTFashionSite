import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYeubqh81HB1c3hnQH1yNuHp_5n1CAcXA",
  authDomain: "vt-fashions.firebaseapp.com",
  databaseURL: "https://vt-fashions-default-rtdb.firebaseio.com",
  projectId: "vt-fashions",
  storageBucket: "vt-fashions.appspot.com",
  messagingSenderId: "446954336172",
  appId: "1:446954336172:web:991e85f3631d833a44d409",
  measurementId: "G-Q2X49PMB87" 
};


  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
firebase.analytics();
export{db};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
