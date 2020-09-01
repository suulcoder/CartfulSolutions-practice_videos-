import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        this is an example paragraph jsdfljsñjdfñajsñdhfshdfñhñahñahfñhafhañfhañhf
        <a className="btn" href="link">
          this is a link
        </a>
      </p>
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
      <div className="box-purple">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;