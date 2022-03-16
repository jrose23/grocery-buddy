import Store from './Store.js';

export default class UI {
    createShoppingListItem(item) {
        // Create List Item
        const listItem = document.createElement('li');
        listItem.className = 'category-list-item';
        listItem.setAttribute('data-id', item.id);
        listItem.setAttribute('data-category', item.category);

        // Create list item text
        const listItemText = document.createElement('span');
        listItemText.className = 'list-item-text';
        listItemText.appendChild(document.createTextNode(`${item.name}`));

        // Create list item completed button
        const completedButton = document.createElement('button');
        completedButton.className = 'btn-completed';
        completedButton.innerHTML = '<i class="las la-times-circle remove"></i>';

        listItem.appendChild(listItemText);
        listItem.appendChild(completedButton);

        // Add list item to category list
        this.addToShoppingList(listItem);
    }

    addToShoppingList(listItem) {
        const category = listItem.getAttribute('data-category');

        // Add list item to appropriate category
        switch (category) {
            case 'Bakery':
                const bakeryList = document.querySelector('#bakery-list');
                bakeryList.appendChild(listItem);
                break;
            case 'Beer-Wine':
                const beerWineList = document.querySelector('#beer-wine-list');
                beerWineList.appendChild(listItem);
                break;
            case 'Dairy':
                const dairyList = document.querySelector('#dairy-list');
                dairyList.appendChild(listItem);
                break;
            case 'Deli':
                const deliList = document.querySelector('#deli-list');
                deliList.appendChild(listItem);
                break;
            case 'Dry-Goods':
                const dryGoodsList = document.querySelector('#dry-goods-list');
                dryGoodsList.appendChild(listItem);
                break;
            case 'Frozen':
                const frozenList = document.querySelector('#frozen-list');
                frozenList.appendChild(listItem);
                break;
            case 'Meat-Seafood':
                const meatSeafoodList = document.querySelector('#meat-seafood-list');
                meatSeafoodList.appendChild(listItem);
                break;
            case 'Produce':
                const produceList = document.querySelector('#produce-list');
                produceList.appendChild(listItem);
                break;
        }
    }

    removeGroceryItem(target) {
        // Remove Grocery Item from DOM
        target.parentElement.parentElement.remove();
    }

    clearFormFields() {
        document.querySelector('#itemName').value = '';
        document.querySelector('#itemCategory').value = '';
    }

    showNotification(type, message) {
        const notification = document.querySelector('.notification');
        const notificationMessage = document.querySelector('.notification-message');

        if (type === 'error') {
            notification.classList.add('error');
            notificationMessage.innerHTML = `<i class="las la-exclamation-circle error-icon"></i> ${message}`;
        } else {
            notification.classList.add('success');
            notificationMessage.innerHTML = `<i class="las la-check-circle success-icon"></i> ${message}`;
        }

        notification.classList.add('show-notification');

        setTimeout(() => {
            notification.classList.remove('show-notification');
            notification.classList.add('hide-notification');
            notification.className = 'notification';
        }, 2000);
    }

    toggleArrow(target) {
        if (target.classList.contains('category-header')) {
            const arrow = target.lastElementChild;
            arrow.classList.toggle('rotate');
        }
    }
}
