import React, { Component } from 'react';
import google from './assets/google.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            // son: 0
            title: ''
        }
    }

    
    render(){
        // const plus = () => {
            //     this.setState({son: this.state.son + 1})
            // }
            
            // const minus = () => {
                //     this.setState({son: this.state.son - 1})
                // }
                let getInp = (e) => {
                    this.setState({title: e.target.value})
                }
                
        return (
            <div className='main'>
                    {/* <button className='sec' onClick={minus}>-</button>
                    <h1>{this.state.son}</h1>
                    <button className='fir' onClick={plus}>+</button> */}


                    <div className="fir-con">
                        <h1 className='sign-up-let'>sign up</h1>
                        <p className='email-let'>email</p>
                        <input type="email" name="email" id="email-in" onChange={getInp} />
                        <p className='pass-let'>password</p>
                        <input type="password" name="password" id="pass-in" />
                        <button className="sign-up">sign up</button>
                        <div className="or-div">
                            <div className="hr"></div>
                            <div className="or-box">or</div>
                            <div className="hr"></div>
                        </div>
                        <div className="images">
                            <img src={google} alt="" />
                            <img src={facebook} alt="" />
                            <img src={linkedin} alt="" />
                        </div>
                        <p className='last'>Already a user? <a href="#">Login</a></p>
                        <br />
                        <h1>{this.state.title}</h1>
                    </div>
            </div>
        )
    }
}

export default Navbar