import React, { Component } from 'react'
import menuIcon from './assets/menuIcon.svg'
import logo from './assets/Logo.svg'
import search from './assets/search.svg'
import cameraIcon from './assets/cameraIcon.svg'
import dotsIcon from './assets/dots.svg'
import bellIcon from './assets/bellIcon.svg'
import accountImg from './assets/accountImg.png'
import {Container, NavLeft, NavMid, NavRight} from './style.js'
import '../index.css'

class Top extends Component {


    render(){
        return (
            <>
        <Container>
            <NavLeft>
            <img className='menu-icon' src={menuIcon} alt="" />
            <img src={logo} alt="" />
            </NavLeft>
            <NavMid>
            <input type="text" name="" id="search-inp" />
            <button className='search-btn'><img src={search} alt="" /></button>
            </NavMid>
            <NavRight>
            <img className='btn-act' src={cameraIcon} alt="" />
            <img className='btn-act' src={dotsIcon} alt="" />
            <img className='bell-icon' src={bellIcon} alt="" />
            <img src={accountImg} alt="" />
            </NavRight>
        </Container>

        
        </>



            
        )
    }
}

export default Top