import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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