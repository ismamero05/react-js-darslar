import React, { Component } from 'react';
import {Div, Options, Cards, AbAc, PrVa} from './MainBodyStyle.js';
import videoCard from './data.js';

class MainBody extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: videoCard,
        }
    }

    render(){

        const filterCards = (categCards) => {
            const res = this.state.card.filter((curEl) => {
                return curEl.category === categCards;
            })
            this.setState({card: res})
        }

        return (
            <Div>
                <Options>
                    <button onClick={() => filterCards('kino')}>Kino</button>
                    <button onClick={() => filterCards('comedy')}>Comedy</button>
                    <button onClick={() => filterCards('mix')}>Mix</button>
                    <button onClick={() => filterCards('cartoons')}>Cartoons</button>
                    <button>Muzik</button>
                    <button>Futbol</button>
                    <button>El sanatları</button>
                    <button>UX Tasarım</button>
                    <button>Animasyon</button>
                    <button>Görsel sanatlar</button>
                    <button>Son yüklenenler</button>
                </Options>

                <Cards>
                    {this.state.card.map(({id, img, accountLogo, title, nickname, pros, vaqt, cartoons}) => {
                        return (
                            <div key={id}>
                                <img src={img} alt="" />
                                <AbAc>
                                    <img src={accountLogo} alt="" />
                                    <h4>{title}</h4>
                                </AbAc>
                                <h5>{nickname}</h5>
                                <PrVa>
                                <p>{pros}</p>
                                <p>{vaqt}</p>
                                </PrVa>
                            </div>
                        )
                    })}
                </Cards>
            </Div>
        )
    }
}

export default MainBody