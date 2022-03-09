import UI from './UI.js';
import Store from './Store.js';
import GroceryItem from './GroceryItem.js';

const ui = new UI();

// Get Shopping List
document.addEventListener('DOMContentLoaded', Store.displayShoppingList);

// Add new Grocery Item
document.querySelector('.item-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const itemName = document.querySelector('#itemName').value;
    const itemCategory = document.querySelector('#itemCategory').value;

    // Create new Grocery Item
    const item = new GroceryItem(itemName, itemCategory);

    // Clear form fields
    ui.clearFormFields();

    // Add Grocery Item to DOM
    ui.addGroceryItem(item);

    // Add Grocery Item to LS
    Store.addToLocalStorage(item);
});

// Remove Grocery Item
document.querySelector('.shopping-list').addEventListener('click', (e) => {
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

// Toggle Arrow ---> MOVE OVER TO UI MODULE?
document.querySelector('.shopping-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('category-header')) {
        const arrow = e.target.lastElementChild;
        arrow.classList.toggle('rotate');
    }
});
