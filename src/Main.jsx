import React, { Component } from 'react';
import Categ from './category/Category.jsx';
import Choose from './Choose/WhyChoose.jsx';
import FirSwiper from './FirSwiper/FirSwiper.jsx';
import './index.css';
import Navbar from './Navbar/NavbarFIle.jsx';
import Section01 from './ThreeSwiper/ThreeSwiper.jsx';

class Main extends Component {

    render(){

        return(
            <div>
                <Navbar />
                <FirSwiper />
                <Section01 />
                <Choose />
                <Categ />
            </div>
        )
    }
}

export default Main