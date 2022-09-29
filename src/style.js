import styled, {css} from 'styled-components'

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`


const Container = styled.h1`
    width: 500px;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 5px;
    ${Df};
    flex-direction: column;
`

const Login = styled.h3`
    font-family: sans-serif;
`

const Inp = styled.input`
    width: 60%;
    height: 25px;
    margin-top: 10px;
    padding-left: 5px;
    outline: none;
    border: none;
`

const Button = styled.div`
    width: 100px;
    height: 30px;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 23px;
    font-family: sans-serif;
    ${Df};
    color: cyan;
    background: yellow;
    transition: transform .3s;
    cursor: pointer;

    :active{
        transform: scale(0.87)
    }
`

export {Container, Login, Inp, Button}