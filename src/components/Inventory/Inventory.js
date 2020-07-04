import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const addproducts=()=>{
        const product = fakeData[0];
        console.log(product);
        fetch('http://localhost:4200/addProduct', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
          })
          .then(res=>res.json())
          .then(data=>console.log('data inserted',data))
    }
    return (
        <div>
            <h1>Inventory</h1>
            <button onClick={addproducts}> Add product</button>
        </div>
    );
};

export default Inventory;