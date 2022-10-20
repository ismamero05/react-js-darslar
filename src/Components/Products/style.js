import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const Title = styled.h2`
    text-align: center;
`

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 40px;
    padding: 0 100px;
    box-sizing: border-box;
`

const Card = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid black;
`

Card.ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    background: #777;
`

Card.Img = styled.img`
    width: 100%;
    height: 100%;
`

Card.Title = styled.h4`
    padding: 0;
    margin: 0;
    margin-top: 10px;
`

Card.Price = styled.h5`
    color: crimson;
    padding: 0;
    margin: 10px 0px;
`

Card.Button = styled.button`
    width: 100%;
    height: 40px;
    background: #000000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    font-weight: 700;
    transition: transform .3s ease-in-out;
    :hover {
        transform: scale(0.97);
    }
`

export {Container, Title, Wrapper, Card}