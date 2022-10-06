import React, { Component } from 'react';
import Logo from './assets/images/logo.png'
import LoginIcon from './assets/icons/login-icon.svg'
import HomesIcon from './assets/icons/homes-icon.svg'
import carKeyIcon from './assets/icons/car-key.svg'
import PriceIcon from './assets/icons/price.svg'
import OptionsIcon from './assets/icons/options-icon.svg'
import SearchIcon from './assets/icons/search-icon.svg'
import {NavbarPart, Option, AboutPart} from './style.js'



class Navbar extends Component {


    render(){
        return (
            <div>
                <NavbarPart>
                <img src={Logo} alt="" />
                <Option>
                    <p>home</p>
                    <p>properties</p>
                    <p>contacts</p>
                </Option>
                <img src={LoginIcon} alt="" />
                </NavbarPart>

                <AboutPart>
                    <div>
                        <img src={HomesIcon} alt="" />
                        <p>Enter an address, neighborhood, city, or ZIP code</p>
                    </div>
                    <div>
                        <img src={carKeyIcon} alt="" />
                        <p>Status</p>
                    </div>
                    <div>
                        <img src={PriceIcon} alt="" />
                        <p>Price</p>
                    </div>
                    <div>
                        <img src={OptionsIcon} alt="" />
                        <p>Advanced</p>
                    </div>
                    <div>
                        <img src={SearchIcon} alt="" />
                        <p>Search</p>
                    </div>
                </AboutPart>
            </div>
        )
    }
}


export default Navbar