import React, { Component } from "react";
import img1 from './assets/images/discord.png';
import img2 from './assets/images/house 1.png';
import img3 from './assets/images/calculator.png';
import img4 from './assets/images/maps.png';
import {Container, Subtitle, Description, Opti} from './style.js';


class Choose extends Component {

    render(){
        return (
            <Container>
                <Subtitle>Why Choose Us?</Subtitle>
                <Description>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Description>
                <Opti>
                    <div>
                        <img src={img1} alt="" />
                        <h3>Trusted By Thousands</h3>
                        <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h3>Wide Renge Of Properties</h3>
                        <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h3>Financing Made Easy</h3>
                        <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <h3>See Neighborhoods</h3>
                        <p>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
                    </div>
                </Opti>
            </Container>
        )
    }
}

export default Choose