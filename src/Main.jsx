import React, { Component } from 'react';
import LeftBar from './LeftBar/LeftBar.jsx';
import Top from './Navbar/TopComp.jsx';

class Main extends Component {

    render(){

        return(
            <>
                <Top />
                <LeftBar />
            </>
        )
    }
}

export default Main