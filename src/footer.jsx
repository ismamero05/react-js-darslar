import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        console.log(this);
        return (
            <div className='box'>
                <img className='imad' src={this.props.title.img} alt="" />
                <h3>{this.props.title.des}</h3>
            </div>
        )
    }
}

export default Navbar