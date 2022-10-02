import React, { Component } from 'react';
import home from './assets/home.svg'
// import clock from './assets/clock.svg'
import compas from './assets/compas.svg'
// import lastIcon from './assets/lastIcon.svg'
// import library from './assets/library.svg'
// import like from './assets/like.svg'
// import more from './assets/more.svg'
import moreIcon from './assets/moreIcon.svg'
// import videos from './assets/videos.svg'
import {Div, FirCon} from './LeftBarStyle.js'

class LeftBar extends Component {

    render(){

        return(

            <>
                <Div>

                    <FirCon>
                        <tbody>
                            <tr color>
                                <img src={home} alt="" />
                                <td>Anasayfa</td>
                            </tr>
                            <tr>
                                <img src={compas} alt="" />
                                <td>Keşfet</td>
                            </tr>
                            <tr>
                                <img src={moreIcon} alt="" />
                                <td>Abonelikler</td>
                            </tr>
                        </tbody>
                    </FirCon>

                

                </Div>
            </>
        )
    }
}

export default LeftBar