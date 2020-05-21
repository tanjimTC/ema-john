import React from 'react';
import './Ship.css';

import happyImage from "../../images/giphy.gif";

const Ship = () => {
    return (
        <div className='ship'>
            <center>
            <h2>Order Placed Successfully!!</h2>
            <img src={happyImage} alt="imag" />
          </center>
        </div>
    );
};

export default Ship;