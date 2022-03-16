import UI from './UI.js';

export default class Store {
    static getShoppingList() {
        const shoppingList = JSON.parse(localStorage.getItem('GBShoppingList')) || [];

        return shoppingList;
    }

    static displayShoppingList() {
        const ui = new UI();
        const shoppingList = Store.getShoppingList();

        shoppingList.forEach((item) => {
            ui.createShoppingListItem(item);
        });
    }

    static deleteShoppingList() {
        const ui = new UI();

        localStorage.removeItem('GBShoppingList');

        location.reload();
    }

    static addToLocalStorage(item) {
        const shoppingList = Store.getShoppingList();
        shoppingList.push(item);
        localStorage.setItem('GBShoppingList', JSON.stringify(shoppingList));
    }

    static removeFromLocalStorage(id) {
        const shoppingList = Store.getShoppingList();

        shoppingList.forEach((item, index) => {
            if (item.id == id) {
                shoppingList.splice(index, 1);
            }
        });

        localStorage.setItem('GBShoppingList', JSON.stringify(shoppingList));
    }
}
