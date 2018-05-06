import { WishList, WishListItem } from './WishList';
import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { reaction } from 'mobx';

it('can create an instance of a model', () => {
    const item = WishListItem.create({
        name: 'African Grey',
        price: 1500
    });

    expect(item.price).toBe(1500);
    expect(item.image).toBe("");
    item.changeName('Cockatoo');
    expect(item.name).toBe('Cockatoo');
    item.changePrice(2000);
    expect(item.price).toBe(2000);

});

it('can create a WishLsit', () => {
    const wishList = WishList.create({
        items: [
            {
                name: 'African Grey',
                price: 1500
            }
        ]
    });

    expect(wishList.items.length).toBe(1);
    expect(wishList.items[0].price).toBe(1500);

});

it('can add new items (onSnapshot)', () => {
    const wishList = WishList.create();
    const states = [];
    onSnapshot(wishList, snapshot => {
        states.push(snapshot)
    });

    wishList.add(
        WishListItem.create({
            name: 'Sun Conure',
            price: 1000
        })
    );

    expect(wishList.items.length).toBe(1);
    expect(wishList.items[0].price).toBe(1000);
    wishList.items[0].changePrice(800);
    expect(wishList.items[0].price).toBe(800);

    expect(getSnapshot(wishList)).toMatchSnapshot();
    expect(states).toMatchSnapshot();

    // jest has snapshots that will make file of the object and compare it to that
    // expect(getSnapshot(wishList)).toEqual({
    //     items: [
    //         {
    //             name: 'Sun Conure',
    //             price: 800,
    //             image: ''
    //         }
    //     ]
    // })

});

it('can add new items (onPatch)', () => {
    const wishList = WishList.create();
    const patches = [];
    onPatch(wishList, snapshot => {
        patches.push(snapshot)
    });

    wishList.add(
        WishListItem.create({
            name: 'Sun Conure',
            price: 1000
        })
    );

    expect(patches).toMatchSnapshot();

});

it('can add new items (onPatch)', () => {
    const wishList = WishList.create({
        items: [
            {
                name: 'Pineapple Conure',
                price: 600
            },
            {
                name: 'Green Cheek Conure',
                price: 600
            }
        ]
    });

    expect(wishList.totalPrice).toBe(1200);

    let changed= 0;
    // reaction will listen to any changes on set value/funtion ( wishList.totalPrice) 
    // and call a callback whenever a change is detected 
    reaction(() => wishList.totalPrice, () => changed++);

    expect(changed).toBe(0);
    wishList.items[0].changeName('Dusky Conure')
    expect(changed).toBe(0);
    wishList.items[0].changePrice(700)
    expect(changed).toBe(1);

});