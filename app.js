import UI from './UI.js';
import Store from './Store.js';
import GroceryItem from './GroceryItem.js';

// Get Shopping List
document.addEventListener('DOMContentLoaded', Store.displayShoppingList);

// Add new Grocery Item
document.querySelector('.item-form').addEventListener('submit', e => {
    e.preventDefault();

    const ui = new UI();

    const itemName = document.querySelector('#itemName').value;
    const itemCategory = document.querySelector('#itemCategory').value;

    if (itemName !== '' && itemCategory !== '') {
        // Create new Grocery Item
        const item = new GroceryItem(itemName, itemCategory);

        // Clear form fields
        ui.clearFormFields();

        // Add Grocery Item to DOM
        ui.createShoppingListItem(item);

        // Add Grocery Item to LS
        Store.addToLocalStorage(item);

        // Show success message
        ui.showNotification('success', 'Item added to Shopping List!');
    } else {
        // Show error message
        ui.showNotification('error', 'Please enter Item and Category!');
    }
});

// Remove Grocery Item
document.querySelector('.shopping-list').addEventListener('click', e => {
    const ui = new UI();

    let itemID;

    if (e.target.classList.contains('remove')) {
        // Get Grocery Item ID
        itemID = e.target.parentElement.parentElement.getAttribute('data-id');

        // Remove from DOM
        ui.removeGroceryItem(e.target);

        // Remove from LS
        Store.removeFromLocalStorage(itemID);
    }
});

// Delete Shopping List
document.querySelector('.btn-clear-all').addEventListener('click', () => {
    if (window.confirm('Delete shopping list?')) {
        Store.deleteShoppingList();
    }
});

// Toggle Category Arrow
document.querySelector('.shopping-list').addEventListener('click', e => {
    const ui = new UI();

    ui.toggleArrow(e.target);
});
