import React from 'react';

const WishListItemComponent = ({ item }) => (
    // <div >
        <li className='item'>
            {item.image && <img className='image' src={item.image} />}
            <div>
                <h3>{item.name}</h3>
                <span>{item.price}</span>
            </div>
        </li>
    // </div>
);

export default WishListItemComponent;