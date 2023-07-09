import React from 'react'

const Product = ({product, scent, price, burnTime, onBasketAdd}) => {
    
    const handleClick = () => {
        onBasketAdd(product.id)
    };

    const basketAddText = product.isAdded ? 'X' : 'Add to Basket'
    
    return (
        <>
        <h3>{scent}</h3>
        <h5>£{price}</h5>
        <p>Burns for {burnTime} hours</p>
        <button onClick={handleClick}>{basketAddText}</button>
        </>
        
    )
};

export default Product;
