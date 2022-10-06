import React, { Component } from "react";
import { Container, SwiperReact } from "./style";
import houseIcon from './assets/icons/house.svg'
import apartmentIcon from './assets/icons/apartment.svg'
import officeIcon from './assets/icons/office.svg'
import villaIcon from './assets/icons/villa.svg'
// import houseImg from './assets/images/house.png'
import apartmentImg from './assets/images/apartment.png'
import officeImg from './assets/images/office.png'
import villaImg from './assets/images/villa.png'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

class Categ extends Component {

    render(){
        return (
            <Container>
                <h1>Category</h1>
                <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                <SwiperReact
                    slidesPerView={4}
                    spaceBetween={10}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperReact.Slide style={{backgroundImage: `url(${villaImg})`}}>
                        <img src={houseIcon} alt="" />
                        <p>House</p>
                    </SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${apartmentImg})`}}>
                        <img src={apartmentIcon} alt="" />
                        <p>Apartment</p>
                    </SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${officeImg})`}}>
                        <img src={officeIcon} alt="" />
                        <p>Office</p>
                    </SwiperReact.Slide>
                    <SwiperReact.Slide style={{backgroundImage: `url(${villaImg})`}}>
                        <img src={villaIcon} alt="" />
                        <p>Villa</p>
                    </SwiperReact.Slide>
                    
                </SwiperReact>
            </Container>
        )
    }
}

export default Categ