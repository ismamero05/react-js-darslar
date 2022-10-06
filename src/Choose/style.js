import styled, {css} from "styled-components";

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    ${Df};
    flex-direction: column;
    background: #F5F7FC;
    width: 100%;
`

const Subtitle = styled.h1`
    margin-top: 48px;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;

    text-align: center;
    letter-spacing: -0.02em;


    color: #0D263B;
`

const Description = styled.p`
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #696969;
`

const Opti = styled.div`
    ${Df};
    margin-top: 40px;
    gap: 77px;
    padding-bottom: 48px;

    > div {
        ${Df};
        flex-direction: column;

        > h3 {
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            text-align: center;

            margin-top: 24px;
            color: #0D263B;
        }

        > p {
            width: 235px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;

            color: #696969;
        }
    }
`

export {Container, Subtitle, Description, Opti}