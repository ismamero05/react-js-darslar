import styled, {css} from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    `


const SwiperReact = styled(Swiper)`
    width: 100%;
    `

SwiperReact.Slide = styled(SwiperSlide)`
    height: 571px;
    background-color: black;
    ${Df};
    flex-direction: column;


    > h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 48px;

        letter-spacing: -0.02em;

        color: #FFFFFF;
    }


    > h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: 8px;

        color: #FFFFFF;
    }


    > h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;
        margin-top: 25px;
        letter-spacing: -0.02em;

        color: #FFFFFF;
    }

    > button {
        width: 180px;
        height: 44px;
        background: transparent;

        border: 1px solid #FFFFFF;
        border-radius: 2px;



        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-top: 48px;

        color: #FFFFFF;
    }
`


const InfoPart = styled.div`
    ${Df};
    gap: 24px;
    margin-top: 24px;

    
`


const Info = styled.div`
    ${Df};
    flex-direction: column;


    > p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;


        color: #FFFFFF;
    }
`

export {SwiperReact, Container, InfoPart, Info}