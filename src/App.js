import React from "react"
import './App.css';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App(props) {
  return (
    <div className="TheBigOne">
      <div className="Fifth"><FontAwesomeIcon icon={faClock} /></div>
      <div className="Fourth"> {props.Digit4} </div>
      <div className="Three"> {props.Digit3} </div>
      <div className="Two"> {props.Digit2} </div>
      <div className="One"> {props.Digit1} </div>

    </div>
  );
}

export default App;
