import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 출처
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = ()=>{
root.render( // js파일 자체를 태그화 하여 삽입.
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
}
setInterval(tick,1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
