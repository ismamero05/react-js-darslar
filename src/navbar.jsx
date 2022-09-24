import React, { Component } from 'react';
import {Container, Login, Inp, Button} from './style.js'


class Navbar extends Component {
    render() {

      return (
        <Container>
          <Login>Login</Login>
          <Inp type='text'></Inp>
          <Inp type='password'></Inp>
          <Button>Login</Button>
        </Container>
      )
  }
}
export default Navbar