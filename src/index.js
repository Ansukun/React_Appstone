import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Calculator2 from "./comp/class2/calculator2"
import UserInput from "./comp/class1/userinput.js"
import Lifecycle from "./comp/class4/lifecle"
import Input2 from "./comp/class4/input2"
import Todolist from "./comp/class4/toDolist.js"
import ColorChange from "./comp/class5/colorChange"
import Quote from "./comp/class5/quote"
import Login from "./comp/class6/login"
import Login2 from "./comp/class6/login2"
import  Delay from "./comp/class6/login2"

ReactDOM.render(
  <React.StrictMode>
      <Login/>
      <Delay/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
