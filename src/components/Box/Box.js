import React from 'react';
import './Box.css'

const Box = (props) => {

    return ( 
    <div 
    className={
        "inspiracbd-box " + 
        (props.className ? props.className : '') + 
        ( props.even ? 'inspiracbd-box-even ': 'inspiracbd-box-odd ')  + 
        ( props.fifth ? 'inspiracbd-box-fifth ' : '')
        }>
        {props.children}
    </div> 
    );
}
 
export default Box;