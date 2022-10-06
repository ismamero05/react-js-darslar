import styled, {css} from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";


const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    ${Df};
    flex-direction: column;

    > h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;

        text-align: center;
        letter-spacing: -0.02em;

        margin-top: 96px;
        color: #0D263B;
    }

    > p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: 8px;
        color: #696969;
    }
`

const SwiperReact = styled(Swiper)`
    width: 60%;
    ${Df};
    margin-top: 32px;
`

SwiperReact.Slide = styled(SwiperSlide)`
    height: 350px;
    width: 280px;
    ${Df};
    flex-direction: column;
    gap: 24px;

    > p {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;


        color: #FFFFFF;
    }
`

export {Container, SwiperReact}