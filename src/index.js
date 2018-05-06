import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { WishList } from './models/WishList';

const wishList = WishList.create({
    items: [
        {
            'name': 'African Grey',
            'price': 2500,
            'image': 'https://i.pinimg.com/originals/90/dc/6b/90dc6b867860400b9001327e7c29759f.jpg'
        },
        {
            'name': 'Pineapple Conure',
            'price': 800,
            'image': 'https://sep.yimg.com/ca/I/yhst-85372353632825_2271_156425152'
        },
        {
            'name': 'Umbrella Cockatoo',
            'price': 1500,
            'image': 'https://i.pinimg.com/originals/bd/c7/f0/bdc7f0a3e7be40baf4b5c6104ad79b59.jpg'
        },
        
    ]
})

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));

