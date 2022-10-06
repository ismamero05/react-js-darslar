import styled, {css} from "styled-components";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
    `

const FullCard = styled.div`
    ${Df};
    flex-direction: column;
    margin-top: 32px;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    
    `

const ImgPart = styled.div`
    ${Df};
    position: relative;
    
    > :nth-child(2){
        height: 23px;
        width: 73px;
        background: none;
        border: none;
        outline: none;
    
        background: #0061DF;
        border-radius: 3px;



        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;
        text-transform: uppercase;
        color: #FFFFFF;

        position: absolute;
        top: 10px;
        left: 10px;
    }


    > :nth-child(3) {
        width: 71px;
        height: 23px;
        background: none;
        border: none;
        outline: none;


        background: #0D263B;
        border-radius: 3px;




        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 13px;
        text-transform: uppercase;
        color: #FFFFFF;


        position: absolute;
        top: 10px;
        right: 10px;
    }
    
`


const TitlePart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 100%;



    > h5 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        margin-left: 20px;
        color: #0D263B;
    }

    > h6 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin-left: 20px;
        line-height: 20px;

        color: #696969;
    }

    padding-bottom: 16px;
    border-bottom: 1px solid #E6E9EC;
`

const Opti = styled.div`
    ${Df};
    gap: 35px;
    margin-top: 16px;

     > div {
        ${Df};
        flex-direction: column;
        

        > p {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            text-transform: capitalize;
            color: #696969;
            margin-top: 7px;
        }
     }
`

const Acco = styled.img`
    position: absolute;
    bottom: -20px;
    right: 20px;
    border: 3px solid white;
    border-radius: 50%;
`

const Full = styled.div`
    ${Df};
    flex-direction: column;
    padding-bottom: 80px;


    


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
    width: 63.8%;
    ${Df};
    gap: 5px;
`
SwiperReact.Slide = styled(SwiperSlide)`
    width: 100%;

`

const BottomPart = styled.div`
    ${Df};
    width: 100%;
    justify-content: space-between;

    div:nth-child(1) {

        padding: 8px 20px;
        p {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            text-decoration-line: line-through;
            color: #696969;
        }


        h3 {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;

            color: #0D263B;
        }

    }


    div:nth-child(2){
        ${Df};
        gap: 20px;
        padding: 8px 15px;

        img:nth-child(2){
            padding: 11px;
            background: #F6F8F9;
            border-radius: 60px;
        }
    }
`

export {FullCard, ImgPart, TitlePart, Opti, Acco, Full, BottomPart, SwiperReact,}