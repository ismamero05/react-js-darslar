import React, { Component } from 'react';
import data from './data'

class prop extends Component{
    constructor(props){
        super(props);
        this.state = {
            kar: data,
        }
    }

    render(){



        const onSearch = (e) => {
            const {value} = e.target
            const res = data.filter(({img, title}) => title.includes(value))
            this.setState({kar: res})
            
        }
        return (
            <div className="properties">
            <input type="text" placeholder='Search...' onChange={onSearch} className="prop-inp" />
            <h1>Properties</h1>
            <p className="result"></p>
            

            <div className="cards">
            {
                this.state.kar.map(({img, title}) => {
                    return (
                        <div className="card1">
                            <img src={img} alt="" />
                            <p>{title}</p>
                        </div>
                    )
                })
            }
            </div>
            









                {/* <div className="card1">
                    <img src={uy1} alt="" />
                    <p>uy1</p>
                </div>
                <div className="card1">
                    <img src={uy2} alt="" />
                    <p>uy2</p>
                </div>
                <div className="card1">
                    <img src={uy1} alt="" />
                    <p>uy3</p>
                </div>
                <div className="card1">
                    <img src={uy2} alt="" />
                    <p>uy4</p>
                </div>
                <div className="card1">
                    <img src={uy1} alt="" />
                    <p>uy5</p>
                </div>
                <div className="card1">
                    <img src={uy2} alt="" />
                    <p>uy6</p>
                </div>
                <div className="card1">
                    <img src={uy1} alt="" />
                    <p>uy7</p>
                </div>
                <div className="card1">
                    <img src={uy2} alt="" />
                    <p>uy8</p>
                </div>
                <div className="card1">
                    <img src={uy1} alt="" />
                    <p>uy9</p>
                </div> */}
                
                

            </div>
        )
        
    }
}

export default prop