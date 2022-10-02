import styled, {css} from 'styled-components';


const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Div = styled.div`
    ${Df};
    flex-direction: column;
    background: #212121;
    width: 240px;
    `

const FirCon = styled.table`
    
    color: white;

    > tbody > tr {
        display: flex;
        gap: 28px;
        margin-top: 20px;
    }
`

export {Div, FirCon}