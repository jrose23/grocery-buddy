import Store from './Store.js';

export default class UI {
    addGroceryItem(item) {
        // Create List Item
        const listItem = document.createElement('li');
        listItem.className = 'category-list-item';
        listItem.setAttribute('data-id', item.id);

        const listItemText = document.createElement('span');
        listItemText.className = 'list-item-text';
        listItemText.appendChild(document.createTextNode(`${item.name}`));

        const completedButton = document.createElement('button');
        completedButton.className = 'btn-completed';
        completedButton.innerHTML = '<i class="las la-check-circle remove"></i>';

        listItem.appendChild(listItemText);
        listItem.appendChild(completedButton);

        // Add List Item to appropriate category
        switch (item.category) {
            case 'Produce':
                const produceList = document.querySelector('#produce-list');
                produceList.appendChild(listItem);
                break;
            case 'Meat':
                const meatList = document.querySelector('#meat-list');
                meatList.appendChild(listItem);
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

    toggleArrow() {
        return;
    }
}
