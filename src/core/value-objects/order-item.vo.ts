import { Item } from "../entities/item";

export class OrderItem {
    item: Item;
    quantity: number;

    constructor(item: Item, quantity: number) {
        this.item = item;
        this.quantity = 1;
    }
}