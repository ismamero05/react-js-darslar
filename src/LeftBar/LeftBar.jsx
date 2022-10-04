import React, { Component } from 'react';
import home from './assets/home.svg'
import clock from './assets/clock.svg'
import compas from './assets/compas.svg'
import lastIcon from "./assets/lastICon.svg"
import library from './assets/library.svg'
import like from './assets/like.svg'
import more from './assets/more.svg'
import moreIcon from './assets/moreIcon.svg'
import videos from './assets/videos.svg'
import profilePhoto from './assets/Profile-Photo.svg'
import profilePhoto2 from './assets/Profile-Photo2.svg'
import onLogo from './assets/on-logo.svg'
import dotLogo from './assets/dot-logo.svg'
import {Div, FirCon} from './LeftBarStyle.js'

class LeftBar extends Component {

    render(){

        return(

            <>
                <Div>

                    <FirCon>
                        <tbody>
                            <tr>
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


                    <FirCon>
                        <tbody>
                            <tr>
                                <img src={library} alt="" />
                                <td>Kitaplık</td>
                            </tr>
                            <tr>
                                <img src={lastIcon} alt="" />
                                <td>Geçmiş</td>
                            </tr>
                            <tr>
                                <img src={videos} alt="" />
                                <td>Videolarınız</td>
                            </tr>
                            <tr>
                                <img src={clock} alt="" />
                                <td>Daha sonra izle</td>
                            </tr>
                            <tr>
                                <img src={like} alt="" />
                                <td>Beğendiğim videolar</td>
                            </tr>
                            <tr>
                                <img src={more} alt="" />
                                <td>Daha fazla göster</td>
                            </tr>
                        </tbody>
                    </FirCon>


                    <FirCon>
                        <p>ABONELİKLER</p>
                        <tbody>
                            <tr>
                                <img src={profilePhoto} alt="" />
                                <td>The Game</td>
                                <img src={onLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto2} alt="" />
                                <td>The Game</td>
                                <img src={onLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto} alt="" />
                                <td>The Game</td>
                                <img src={onLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto2} alt="" />
                                <td>The Game</td>
                                <img src={dotLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto} alt="" />
                                <td>The Game</td>
                                <img src={dotLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto2} alt="" />
                                <td>The Game</td>
                                <img src={dotLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={profilePhoto} alt="" />
                                <td>The Game</td>
                                <img src={dotLogo} alt="" />
                            </tr>
                            <tr>
                                <img src={more} alt="" />
                                <td>Daha fazla göster</td>
                            </tr>
                            
                        </tbody>
                    </FirCon>


                    <FirCon>
                        <p>YOUTUBE’DEN DAHA FAZLA İÇERİK</p>
                        <tbody>
                            <tr>
                                <img src={compas} alt="" />
                                <td>Youtube Premium</td>
                            </tr>
                        </tbody>
                    </FirCon>

                

                </Div>
            </>
        )
    }
}

export default LeftBar