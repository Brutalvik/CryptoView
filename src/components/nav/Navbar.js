import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './Navbar.css'
import Login from '../login/Login'
import Register from '../registration/Register'

class Navbar extends Component {
  
  state = {clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <div className="nav">
        <div className="hamburger"
            onClick={this.handleClick}>
            <div className={this.state.clicked ? "line1" : "line"}></div>
            <div className={this.state.clicked ? "line2" : "line"}></div>
            <div className={this.state.clicked ? "line3" : "line"}></div>
        </div>
        <div>
            <ul className={this.state.clicked ? 'nav-open' : 'nav-close'}>
              <Link className="list" to="/register"><li>Register</li></Link>
              <Link className="list" to="/login"><li>Login</li></Link>
              <Link className="list"><li>Dashboard</li></Link>
              <Link className="list"><li>About</li></Link>
            </ul>
        </div>
      </div>
    )
  }
}

export default Navbar
