import { Item } from "../../core/entities/item";

export interface ItemRepository {
    getById(id: string): Item;
    create(item: Item):void;
    update(item: Item):void;
    delete():void;
}