import React from 'react'
import './Navbar.css'

import styled from 'styled-components';

const Nav = styled.nav `
  width: 100%;
  height: 65px;
  border-bottom: 2px solid aliceblue;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

const navItems = ['Register','Login', 'Home', 'Dashboard', 'About']

function Hamburger() {
  return (
    <Nav>
      <div className="logo">
      </div>
      <ul>
        {navItems.map(item => (<li>{item}</li>))}
      </ul>
    </Nav>
  )
}

export default Hamburger