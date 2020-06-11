import React from 'react';
import happyImage from '../../images/giphy.gif';
const Shipped = () => {
    return (
        <div>
            <center>
                <h3>Order placed successfully !</h3>
                <img style={{width:'30%'}} src={happyImage} alt=""/>
            </center>
        </div>
    );
};

export default Shipped;