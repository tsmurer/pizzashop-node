import { Item } from "../entities/item";

export class LineItem {
    private item: Item;
    private quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = 1;
    }

    getItem():Item {
        return this.item;
    }

    getQuantity(): number {
        return this.quantity;
    }
}