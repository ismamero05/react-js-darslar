import styled, {css} from 'styled-components';


const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavbarPart = styled.div`
    ${Df};
    height: 64px;
    justify-content: space-around;
    background: #0D263B;
`

const Option = styled.div`
    ${Df};
    gap: 64px;


    > p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;

        color: #FFFFFF;
    }

`

const AboutPart = styled.div`
    ${Df};
    height: 64px;
    gap: 20px;


    > div:nth-child(1){
        padding: 12px 139px 12px 16px;
    }

    > div:nth-child(2){
        padding: 12px 29px;
    }

    > div:nth-child(3){
        padding: 12px 34px;
    }

    > div:nth-child(4){
        padding: 12px 16px;
    }

    > div:nth-child(5){
        padding: 14px 54px;
        background: #0061DF;
        color: white;
        border: 1px solid #0061DF;
    }


    > div {
        ${Df};
        border: 1px solid #E6E9EC;
        border-radius: 2px;
        padding: 12px;
        gap: 8px;
    }
`

export {NavbarPart, Option, AboutPart}