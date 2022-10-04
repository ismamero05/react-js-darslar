import styled, {css} from 'styled-components';

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Div = styled.div`
    background: #212121;
    width: 100%;
    display: flex;
    flex-direction: column;

    
    
`

const Options = styled.div`
    ${Df};
    gap: 18px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    width: 100%;
    padding: 13px 0;

    > button {
        color: white;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50px;
        padding: 10px;
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.4);
        transition: transform .3s;

        :focus {
            background: white;
            color: black;
            transform: scale(.98);
        }
    }
`

const Cards = styled.div`
    color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 24px;
    grid-gap: 16px;
    grid-row-gap: 100px;

    > div {
        ${Df}
        flex-direction: column;

        > h5 {
            width: 215px;
            font-family: sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            margin-top: 4px;

            color: rgba(255, 255, 255, 0.6);
        }
    }
`

const AbAc = styled.div`
    ${Df};
    gap: 12px;
    margin-top: 12px;
    

    > h4 {
        width: 260px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;


        color: #FFFFFF;
    }

    > img {
        width: 36px;
    }
`

const PrVa = styled.div`
    ${Df};
    gap: 2px;
    
    > p {
        width: 110px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        color: rgba(255, 255, 255, 0.6);
    }
`

export {Div, Options, Cards, AbAc, PrVa}