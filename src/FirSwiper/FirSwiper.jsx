import React, { Component } from "react";
import { SwiperReact, Container, InfoPart, Info } from "./style.js";

import BedIcon from './assets/images/bed.png'
import BathIcon from './assets/images/bath.png'
import CarIcon from './assets/images/car.png'
import RulerIcon from './assets/images/ruler.png'
import Backpic from './assets/images/backpic.png'

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


class FirSwiper extends Component {
    
    
    render(){
        return(
            <Container>


                <SwiperReact
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        >
                        <SwiperReact.Slide style={{backgroundImage: `url(${Backpic})`}}>
                            <h1>Skyper Pool Partment</h1>
                            <h4>112 Glenwood Ave Hyde Park, Boston, MA</h4>
                            <InfoPart>
                                <Info>
                                    <img src={BedIcon} alt="" />
                                    <p>4 beds</p>
                                </Info>
                                <Info>
                                    <img src={BathIcon} alt="" />
                                    <p>5 Baths</p>
                                </Info>
                                <Info>
                                    <img src={CarIcon} alt="" />
                                    <p>1 Garage</p>
                                </Info>
                                <Info>
                                    <img src={RulerIcon} alt="" />
                                    <p>1200 Sq Ft</p>
                                </Info>
                            </InfoPart>
                            <h2>$5,250/mo</h2>
                            <button>Read more</button>

                        </SwiperReact.Slide>



                        <SwiperReact.Slide style={{backgroundImage: `url(${Backpic})`}}>
                            <h1>Skyper Pool Partment</h1>
                            <h4>112 Glenwood Ave Hyde Park, Boston, MA</h4>
                            <InfoPart>
                                <Info>
                                    <img src={BedIcon} alt="" />
                                    <p>4 beds</p>
                                </Info>
                                <Info>
                                    <img src={BathIcon} alt="" />
                                    <p>5 Baths</p>
                                </Info>
                                <Info>
                                    <img src={CarIcon} alt="" />
                                    <p>1 Garage</p>
                                </Info>
                                <Info>
                                    <img src={RulerIcon} alt="" />
                                    <p>1200 Sq Ft</p>
                                </Info>
                            </InfoPart>
                            <h2>$5,250/mo</h2>
                            <button>Read more</button>

                        </SwiperReact.Slide>
                        
                    </SwiperReact>

            </Container>
        )
    }
}


export default FirSwiper




















