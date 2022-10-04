import React, { Component } from 'react';
import LeftBar from './LeftBar/LeftBar.jsx';
import MainBody from './MainBody/MainBody.jsx';
import Top from './Navbar/TopComp.jsx';
import './index.css'

class Main extends Component {

    render(){

        return(
            <>
                <Top />
                <div className='disfl'>
                    <LeftBar />
                    <MainBody />

                </div>
            </>
        )
    }
}

export default Main