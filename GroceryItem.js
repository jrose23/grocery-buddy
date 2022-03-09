export default class GroceryItem {
    constructor(name, category) {
        this.name = name;
        this.category = category;
        this.id = Math.floor(Math.random() * 1000000);
    }
}
