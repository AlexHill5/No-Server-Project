import React, { Component } from 'react'
// import './Navbar.css'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import "./About.scss"



class About extends Component {
  render() {
    return (
      <div>
        <Navbar title="About"/>
        <h1 className="about2">About Page</h1>

        <h1 className="about2"> Thank you for visiting my League of Legends Champions page! </h1>
      </div>
    )
  }
}

export default About;