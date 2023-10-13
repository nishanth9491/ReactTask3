import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const arr = ["#cf0606", "#07ed1e", "#073ded", "#e9ed07", "#ed07ed", "#07ede9", "#faa716", "#91276a", "#fcd0c7", "#28a745", "#e65f05", "#087bc7", "#4a1b07", "#f57842", "#164266", "#b89c12"];

export class Container extends Component {
    constructor() {
        super();
        this.state = {
            color: "#28a745",
            toggle: false
        };
    }

   
    checkColor = (e) => {
        this.setState({
            color: e.target.style.backgroundColor,
            toggle: false
        });
    }

    toggleColors = () => {
        this.setState({
            toggle: true
        });
    }

    render() {
        return (
            <div className='container-fluid vh-100 vw-100' style={{width:"100%", backgroundColor: this.state.color }}>
                <h2 className='pt-5 d-flex justify-content-center fw-bolder'>Color Picker</h2>
                <div className='d-flex justify-content-center align-items-center my-5'>
                    {this.state.toggle ? arr.map((item, index) => (
                        <button key={index} onClick={this.checkColor} className='mx-2 border-0' style={{ width: "50px", height: "50px", backgroundColor: item, boxShadow: "2px 2px 10px #3b383a" }}></button>
                    )) : <p></p>}
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <button id="clickButton" className='text-light border-0 px-3 py-2' onClick={this.toggleColors} style={{ backgroundColor: "black" }}>Pick a color</button>
                </div>
            </div>
        );
    }
}
