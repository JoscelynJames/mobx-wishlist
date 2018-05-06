import { types } from 'mobx-state-tree';

const data = {
    'name': 'African Grey',
    'price': 1500,
    'image': 'https://i.pinimg.com/originals/90/dc/6b/90dc6b867860400b9001327e7c29759f.jpg'
}

export const WishListItem = types.model({
    name: types.string,
    price: types.number,
    // image: types.optional(types.string, '')
    // way defaults to optional
    image: ''
})
.actions(self => ({
    changeName(newName) {
        self.name = newName;
    },
    changePrice(newPrice) {
        self.price = newPrice;
    },
    changeImage(newImage) {
        self.image = newImage;
    }

    // one way to writing actions
    // function changeName(newName) {
    //     self.name = newName;
    // }

    // return {
    //     changeName
    // }

}));

export const WishList = types.model({
    items: types.optional(types.array(WishListItem), []),
})
.actions(self => ({
    add(item) {
        self.items.push(item);
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((sum, entry) => sum + entry.price, 0)
    }
}))
