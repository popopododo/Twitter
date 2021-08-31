import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// 파이어베이스 동작 확인
import firebase from "firebase/compat/app"; // 버전 8과 9 compatibility 해결
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
