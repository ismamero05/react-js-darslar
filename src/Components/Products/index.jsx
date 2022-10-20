import React, { useContext } from 'react'
import {FlowerContext} from '../../context/Flowers'
import { AddedProducts } from '../AddedProducts'
import { Card, Container, Title, Wrapper } from './style'

export const Products = () => {

    const [state, dispatch] = useContext(FlowerContext)

    
  return (
    <Container>
        <Title>Products</Title>
        {
                state.basket ? (
                    <AddedProducts />
                ) : (
                    <Wrapper>
                            {
                                state.data.map((value) => {
                                    return(
                                        <Card key={value.id}>
                                            <Card.ImageWrapper>
                                                <Card.Img src={value.img} />
                                            </Card.ImageWrapper>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Price>${value.price}</Card.Price>
                                            {
                                                value.addtocart ? <Card.Button>Cancel</Card.Button> : <Card.Button onClick={() => dispatch({type:'add', payload: {id: value.id}})}>Buy</Card.Button>
                                            }
                                        </Card>
                                    )
                                
                                })
                            }

                    </Wrapper>
                )
            }
    </Container>
  )
}