import React, { Component } from 'react';
// import {
//   Grid,
//   Jumbotron
// } from 'react-bootstrap';

import NavBar from './components/Navbar.js';
import Jumbo from './components/jumbotron.js';
import Board from './components/board.js';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Jumbo />
        <Board />
      </div>
    );
  }
}

export default App;
