import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAo2g6C-fNl2dlGlR9G_16OblfNM3rDD9I",
  authDomain: "tecnoar-ecommerce.firebaseapp.com",
  projectId: "tecnoar-ecommerce",
  storageBucket: "tecnoar-ecommerce.appspot.com",
  messagingSenderId: "399388181784",
  appId: "1:399388181784:web:0271bfd523c267bd228a6d",
  measurementId: "G-4YCC3LVX48"
};

// Initialize Firebase
initializeApp(firebaseConfig);


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
