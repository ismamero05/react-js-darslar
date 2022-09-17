import React, { Component } from 'react';
import logo from './assets/logo.svg'

class Navbar extends Component{
    // constructor(props){
    //     super(props);
    // }

    
    render(){
    
                
        return (
            <div className='navbar'>
                <img src={logo} alt="" className="logo" />
                <ul className="options">
                    <li>home</li>
                    <li>properties</li>
                    <li>contacts</li>
                </ul>
                <button className="login">login</button>
            </div>
        )
    }
}

export default Navbar