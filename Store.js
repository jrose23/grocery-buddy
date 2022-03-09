import UI from './UI.js';

export default class Store {
    static getShoppingList() {
        let shoppingList;

        if (localStorage.getItem('GBShoppingList') === null) {
            shoppingList = [];
        } else {
            shoppingList = JSON.parse(localStorage.getItem('GBShoppingList'));
        }

        return shoppingList;
    }

    static displayShoppingList() {
        const shoppingList = Store.getShoppingList();

        shoppingList.forEach((item) => {
            const ui = new UI();

            ui.addGroceryItem(item);
        });
    }

    static addToLocalStorage(item) {
        const shoppingList = this.getShoppingList();
        shoppingList.push(item);
        localStorage.setItem('GBShoppingList', JSON.stringify(shoppingList));
    }

    static removeFromLocalStorage(id) {
        return;
    }
}
