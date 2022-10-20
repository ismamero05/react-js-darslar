import styled from "styled-components";
import {ReactComponent as basket} from '../../assets/icons/basket.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #111111;
    padding: 0 50px;
    box-sizing: border-box;
`

const Logo = styled.h3`
    font-size: 23px;
    color: white;
`

const Link = styled.p`
    font-size: 16px;
    color: white;
`

const Wrapper = styled.div`
    position: relative;
`

const Basket = styled(basket)`
`

const Counter = styled.p`
    position: absolute;
    top: -15px;
    right: -8px;
    font-size: 10px;
    width: 18px;
    height: 18px;
    color: white;
    background: #46A358;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`



export {Container, Logo, Link, Wrapper, Basket, Counter}