import React from 'react';
import Product from './Product';

const Products = ({products}) => {

    const productNodes = products.map(product => {
        return(
            <Product scent={product.scent} burnTime={product.burnTime} price={product.price}/>
        );
    });

    return (
        <div>{productNodes}</div>
    )
};

export default Products;
