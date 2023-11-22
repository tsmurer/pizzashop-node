import { Item } from "../../core/entities/item";
import { ItemDTO } from "../../interface-adapters/dtos/item.dto";
import { mapItemDtoToItem } from "../../interface-adapters/functions/entityDtoMapperFunctions";
import { ItemRepository } from "../../interface-adapters/repositories/item-repository";
import { PrismaClient } from "@prisma/client"

export class PrismaItemRepository implements ItemRepository {
    constructor(private readonly prisma: PrismaClient) {}
    getById(id: string): Promise<Item | undefined> {
        throw new Error("Method not implemented.");
    }
    async create(item: Item): Promise<Item | undefined> {
        const itemDto = await this.prisma.item.create({
            data: {
              name: item.getName(),
              description: item.getDescription(),
            },
          })
        
        return mapItemDtoToItem(itemDto)
    }
    update(item: Item): Promise<Item | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
}