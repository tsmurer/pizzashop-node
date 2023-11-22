import { Item } from "../../core/entities/item";

export interface ItemRepository {
    getById(id: string): Promise<Item | undefined>;
    create(item: Item):Promise<Item | undefined>;
    update(item: Item):Promise<Item | undefined>;
    delete():void;
}