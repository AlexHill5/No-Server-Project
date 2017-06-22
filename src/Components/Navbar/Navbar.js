import React, { Component } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";



class Navbar extends Component {
  render() {
    return (
      <div className="Nav-Wrapper">
        <div className="Nav-Bar">
          <h1 className="header-text"> League Of Legends: {this.props.title} </h1>
          <div className="about-wrap">
            <Link to="/">
              <h4 className="about"> HOME </h4> 
           </Link>
            <Link to="/about">
              <h4 className="about"> ABOUT </h4> 
           </Link>
            </div>
            
        </div>
      </div>
    )
  }
}

export default Navbar;