import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, NavCon, Logo, Menu } from '../styles/styles'

function Nav() {
  return (
    <Navbar>
        <Container>
          <NavCon>
            <div>
                <Logo to="/">PitchayaPro</Logo>
            </div>
            <Menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </Menu>
          </NavCon>
        </Container>
    </Navbar>
  )
}

export default Nav