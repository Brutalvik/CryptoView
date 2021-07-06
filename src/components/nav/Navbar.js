import React, { Component } from 'react'
import './Navbar.css'

const navItems = ['Register','Login', 'Dashboard', 'About']

class Navbar extends Component {
  
  state = {clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
    //console.log(this.state.clicked);
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
        <ul className={this.state.clicked ? 'nav-open' : 'nav-close'}>
        {navItems.map(item => (<li className="list">{item}</li>))}
        </ul>
      </div>
    )
  }
}

export default Navbar
