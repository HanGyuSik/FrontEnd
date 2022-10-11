import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyNav from './MyWeb_1/MyNav';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // root를 베낀 가상돔
root.render(  //
  <React.StrictMode>
    <MyNav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
