import React, { useContext } from 'react'
import { FlowerContext } from '../../context/Flowers'
import DeleteIcon from '../../assets/icons/delete.png'
import { Container, ProductButtonpl, ProductButtonmi, ProductImg, ProductPrice, ProductQua, ProductTitle, TotalPr, DelIc } from './style'

export const AddedProducts = () => {
    const [state, dispatch] = useContext(FlowerContext)
    var TotalPrice = 0
    var Total = 0
  return (
    <Container>
        <h4>Added Products</h4>
        <Container.Wrapper>
            {
                state.products.map((value) => {
                    TotalPrice = value.price !== null ? value.price * value.quantity : value.price
                    Total += TotalPrice
                    return(
                        <Container.Product key={value.id}>
                            <ProductImg src={value.img} alt="" />
                            <ProductTitle>{value.title}</ProductTitle>
                            <ProductPrice>{value.price}$</ProductPrice>
                            <ProductButtonmi onClick={() => dispatch({type: 'decrement', payload: {ee: value.id}})}>-</ProductButtonmi>
                            <ProductQua>{value.quantity}</ProductQua>
                            <ProductButtonpl onClick={() => dispatch({type: 'increment', payload: {ee: value.id}})}>+</ProductButtonpl>
                            <TotalPr>${TotalPrice}</TotalPr>
                            <DelIc onClick={() => dispatch({type: 'delete', paylaod: value.id})} src={DeleteIcon} alt="" />
                        </Container.Product>
                    )
                })
            }
            <h3>Total: ${Total}</h3>
            <button>Buy</button>
        </Container.Wrapper>
    </Container>
  )
}