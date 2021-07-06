import React from 'react'
import './Navbar.css'

const navItems = ['Register','Login', 'Dashboard', 'About']

function Rightnav() {
  return (
    <div>
        <ul className="nav-links">
        {navItems.map(item => (<li className="list">{item}</li>))}
        </ul>
    </div>
  )
}

export default Rightnav
