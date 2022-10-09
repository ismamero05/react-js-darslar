import styled, {css} from 'styled-components';

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    /* width: 300px; */
    /* height: 500px; */
    background: #EC8171 ;
    ${Df};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    padding: 25px 10px;
    border-radius: 5px;
`

const Adding = styled.div`
    ${Df};
    position: relative;

    > input {
        border: none;
        background-color: #FDCEC6;
        outline: none;
        width: 300px;
        height: 45px;
        border-radius: 10px;
    }

    > button {
        position: absolute;
        /* top: px; */
        right: 10px;
        border: none;
        outline: none;
        color: #EC8171;
        background: transparent;
        font-size: 40px;
    }
`

const Mains = styled.div`
    ${Df};
    width: 100%;
    margin-top: 20px;
    justify-content: space-around;

    > input[type='checkbox'] {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        appearance: none;
        -webkit-appearance: none;
        background-color: white;
        cursor: pointer;
        padding: 2px;
        outline: none;
    }

    > input[type='checkbox']::after {
        content: '\f00c';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
    }

    > input[type='checkbox']:hover {
        background-color: aquamarine;
    }

    > input[type='checkbox']:checked::after {
        display: block  ;
    }
`

const Counter = styled.div`
    ${Df};
    background: white;
    padding: 10px;
    border-radius: 50px;
    gap: 10px;

    > img {
        width: 15px;
    }
`

const TotalCount = styled.h3`
    margin-top: 25px;
    margin-right: -180px;
`

const Items = styled.p`
    font-size: 25px;
    text-decoration: ${({check}) => check && 'line-through'};
`

export {Container, Adding, Mains, Counter, TotalCount, Items}