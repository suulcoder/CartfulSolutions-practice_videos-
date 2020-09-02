import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p >
        this is an example paragraph jsdfljsñjdfñajsñdhfshdfñhñahñahfñhafhañfhañhf
        <a data-tool-tip="hell" className="btn" href="link">
          this is a link
        </a>
      </p>
      <div className="boxes">
        <div className="box-purple">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="box-red">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="box-blue">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="box-red">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="box-blue">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      
      <div className="counters">
       <ol>
         <li> one </li>
         <li> one </li>
         <li> one </li>
         <li> one </li>
         <li> one </li>
         <li> one </li>
         <li> one </li>
         <li> one </li>
       </ol>
      </div>

      
    </div>
  );
}

export default App;