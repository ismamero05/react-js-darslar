import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'
import { Container } from './style'

export const Root = () => {
  return (
    <Container>
        <Navbar />
        <Products />
    </Container>
  )
}