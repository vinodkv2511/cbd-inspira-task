import React, { Component } from 'react';
import Box from '../components/Box/Box'

import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            boxCount : 0
         }
    }

    getBoxes = () => {
        let boxes = []
        for (let i=1; i<= this.state.boxCount ; i++){
            let isEven = i%2 === 0 ? true : false;
            let isFifth = i%5 === 0 ?  true : false;

            boxes.push(
                <Box even={isEven} fifth={isFifth} key={i}>
                    {i}
                </Box>
            )
        }

        return boxes;
    }

    alterBoxCount = (alterBy) => {
        //To avoid negative boxCount
        if(alterBy < 0  && this.state.boxCount === 0){
            console.info("Minimum count is 0 cant reduce")
            return;
        }

        let newBoxCount = this.state.boxCount + alterBy
        
        this.setState({
            boxCount: newBoxCount
        })      
    }

    render() { 
        return ( 
            <div>
                <h2>Start Building</h2>
                <div className="buttons-container"> 
                    <button className="success" onClick={() => this.alterBoxCount(1)}>Add Box</button>
                    <button className="danger" onClick={() => this.alterBoxCount(-1)} >Remove Box</button>
                </div>
                {
                    this.state.boxCount === 0 ?
                    "No boxes added yet! Click Add Box to start building":
                        <div className="boxes-container">
                            {this.getBoxes()}
                        </div>
                }

                <p style={{
                    fontSize: 15+this.state.boxCount+"px"
                }}>
                    {this.state.boxCount}
                </p>
                               
            </div>
         );
    }
}
 
export default Home;