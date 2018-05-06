import React from 'react';
import { observer } from 'mobx-react';

import WishListItemComponent from './WishListItemView';

const WishListComponent = ({ wishList }) => (
    <div className='list'>
        <ul>{wishList.items.map((item, index) => <WishListItemComponent key={index} item={item}/> )}</ul>
    </div>
);

export default observer(WishListComponent);