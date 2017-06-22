import React, { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar.js"

import router from './router.js';

class App extends Component {
  render() {
    return (
      <div>
        { router }
      </div>
    )
  }
}

export default App;
