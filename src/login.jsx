import React, { Component } from 'react';
import {Container, Or, Line, Des, Title, Logres, Inp, Button, Subs} from './style.js'
import './index.css'
import google from './assets/google.png'
import facebook from './assets/facebook.png'

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        page: false
      }
    }

    render() {
      
      

      return (

        





        <Container>
          {
            this.state.page ? (
              <>
              <Subs>
                <Logres color="#46A358">Login</Logres>
                <Title>|</Title>
                <Logres onClick={() => this.setState({page: false})} >Register</Logres>
              </Subs>
              <Des>Enter your username and password to login.</Des>
              <Inp type='email' placeholder='almamun_uxui@outlook.com'></Inp>
              <Inp type='password' placeholder='***********'></Inp>
                
              <Button>Register</Button>
                <div className='center-or'>
                    <Line></Line>
                    <Or>Or register with</Or>
                    <Line></Line>
                </div>
              <Button border='1px solid grey' bg='white' color='black' gap="12px"><img src={google} alt="" /> Continue with Google</Button>
              <Button border='1px solid grey' mt="15px" bg='white' color='black' gap="12px"><img src={facebook} alt="" /> Continue with Google</Button>
              </>
            )
            :
            (
              <>
              <Subs>
                <Logres onClick={() => this.setState({page: true})}>Login</Logres>
                <Title>|</Title>
                <Logres  color="#46A358">Register</Logres>
              </Subs>
              <Des>Enter your email and password to register.</Des>
              <Inp type='text' placeholder='Username'></Inp>
              <Inp type='email' placeholder='Enter your email'></Inp>
              <Inp type='password' placeholder='Password'></Inp>
              <Inp type='password' placeholder='Confirm password'></Inp>

              <Button>Register</Button>
                <div className='center-or'>
                    <Line></Line>
                    <Or>Or register with</Or>
                    <Line></Line>
                </div>
              <Button border='1px solid grey' bg='white' color='black' gap="12px"><img src={google} alt="" /> Continue with Google</Button>
              <Button border='1px solid grey' mt="15px" bg='white' color='black' gap="12px"><img src={facebook} alt="" /> Continue with Google</Button>
              </>
            )
          }
          
        </Container>
      )
  }
}
export default Login