import { Item } from "../../core/entities/item";
import { ItemRepository } from "../../interface-adapters/repositories/item-repository";

export class ItemRepositoryImpl implements ItemRepository {
    getById(id: string): Item {
        throw new Error("Method not implemented.");
    }
    create(item: Item): void {
        throw new Error("Method not implemented.");
    }
    update(item: Item): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }

}