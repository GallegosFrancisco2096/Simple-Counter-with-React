import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


let counter = 0;

setInterval(function () {
  const one = Math.floor(counter / 1000);
  const two = Math.floor(counter / 100);
  const three = Math.floor(counter / 10);
  const fourth = Math.floor(counter);
  counter++;

  console.log(one, two, three, fourth)
  root.render(

    <App Digit1={fourth % 10 } Digit2={three % 10 } Digit3={two % 10 } Digit4={one % 10} />
  );

}, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));






