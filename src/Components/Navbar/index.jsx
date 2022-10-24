import React from 'react'
import { Container, Login, Logo, NavItem, NavItems } from './style'

export const Navbar = () => {
  return (
    <Container>
        <NavItem  activeStyle={{color: 'aquamarine'}} exact to='/'>
            Logo
        </NavItem>
        <NavItems>
            <NavItem activeStyle={{color: 'aquamarine'}} to='/home'>Home</NavItem>
            <NavItem activeStyle={{color: 'aquamarine'}} to='/products'>Products</NavItem>
            <NavItem activeStyle={{color: 'aquamarine'}} to='/about'>About</NavItem>
        </NavItems>
        <NavItem to='/login'>
            <Login >Login</Login>
        </NavItem>
    </Container>
  )
}