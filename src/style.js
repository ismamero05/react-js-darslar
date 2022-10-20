import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid black;

    > input {
        width: 250px;
        height: 20px;
        padding-left: 5px;
    }
`

const Divvv = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
    gap: 0px;
    border: 1px solid black;
    padding-left: 10px;
`

const Divv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 20px;
`

export {Div, Divv, Divvv}