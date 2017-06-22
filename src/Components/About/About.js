import React, { Component } from 'react'
// import './Navbar.css'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'



class About extends Component {
  render() {
    return (
      <div>
        <Navbar title="About"/>
        <h1>About Page</h1>
      </div>
    )
  }
}

export default About;