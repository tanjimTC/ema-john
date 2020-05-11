import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} =useParams()
    const product = fakeData.find(x=> x.key===productKey);
    console.log(product);
    return (
        <div>
            <Product product={product}/>
        </div>
    );
};

export default ProductDetails;