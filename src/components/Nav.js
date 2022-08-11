import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav} from 'react-bootstrap'

const Navbar = () => {
  return (
    <Nav
      activeKey="/"
    >
      <Nav.Item>
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/movie_list'>
          <Nav.Link>Movie List</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/favorite'>
          <Nav.Link>Favorite</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar