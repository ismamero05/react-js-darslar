import React, { Component } from "react";
import data from './data.js';
import bedIcon from './assets/icons/bed.png'
import bathIcon from './assets/icons/bath.png'
import carIcon from './assets/icons/car.png'
import rulerIcon from './assets/icons/ruler.png'

import {Full, FullCard, ImgPart, TitlePart, Opti, Acco, BottomPart, SwiperReact} from './style.js'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



class Section01 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
        }
    }

    render(){
        return(
            <Full>
                <h1>Recommended</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>

                <SwiperReact
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        this.state.data.map(({id, img, accountProf, nameApr, location, bedNum, bathNum, garageNum, rulerNum, prevPrice, newPrice, scaleIcon, heartIcon}) => {
                            return (
                                <SwiperReact.Slide>

                                <FullCard key={id}>
                                <ImgPart>
                                    <img src={img} alt="rasm" />
                                    <button>featured</button>
                                    <button>for sale</button>
                                    <Acco src={accountProf} alt="" />
                                </ImgPart>
                                <TitlePart>
                                    <h5>{nameApr}</h5>
                                    <h6>{location}</h6>
                                    <Opti>
                                        <div>
                                            <img src={bedIcon} alt="" />
                                            <p>{bedNum}</p>
                                        </div>
                                        <div>
                                            <img src={bathIcon} alt="" />
                                            <p>{bathNum}</p>
                                        </div>
                                        <div>
                                            <img src={carIcon} alt="" />
                                            <p>{garageNum}</p>
                                        </div>
                                        <div>
                                            <img src={rulerIcon} alt="" />
                                            <p>{rulerNum}</p>
                                        </div>
                                    </Opti>
                                </TitlePart>
                                <BottomPart>
                                    <div>
                                        <p>${prevPrice}00</p>
                                        <h3>${newPrice}00</h3>
                                    </div>
                                    <div>
                                        <img src={scaleIcon} alt="" />
                                        <img src={heartIcon} alt="" />
                                    </div>
                                </BottomPart>
                            </FullCard>
                                </SwiperReact.Slide>
                            )
                        })
                    }
                </SwiperReact>
            </Full>
        )
    }
}


export default Section01