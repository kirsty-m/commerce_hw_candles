import React from 'react'

const Basket = ({products}) => {
    
    // const basketList = products ? products.filter(product => product.isAdded) : [];

    return (
        <>
        <h2>Your Basket:</h2>
        <ul>
            {/* {basketList.map(product => {
                return(
                    <li key={product.id}>{product.scent}</li>
                )
            })} */}
        </ul>
        </>
    )
};

export default Basket;
