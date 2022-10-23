import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import Navbar from "./component/Navbar/Navbar"
import List from "./component/List/List"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <List/>
    </div>
  );
}

export default App;
