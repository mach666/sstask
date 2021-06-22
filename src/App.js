import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App(props) {
  const [counter,setCounter]=useState(0)
  
  const clickHandler=()=>{
    setCounter(counter+1)
  }
  
  return (
    <div className="App">
  <div>  Current Time is: {props.date.toLocaleTimeString()}</div>
  <div>{counter}</div>
  <div><button onClick={clickHandler}></button></div>
    </div>
  );
}

export default App;
