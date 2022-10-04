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
    width: 100%;
    padding-bottom: 18.2px;
    padding-left: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    > tbody > tr {
        display: flex;
        gap: 28px;
        margin-top: 20px;
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        margin-top: 8px;

        color: rgba(255, 255, 255, 0.6);
    }

`

export {Div, FirCon}