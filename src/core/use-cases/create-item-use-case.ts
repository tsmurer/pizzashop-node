import { PrismaClient } from "@prisma/client";
import { PrismaItemRepository } from "../../infrastructure/persistence/item.repository.impl";
import { ItemDTO } from "../../interface-adapters/dtos/item.dto";
import { mapItemDtoToItem } from "../../interface-adapters/functions/entityDtoMapperFunctions";

export async function createItemUseCase(itemDTO: ItemDTO): Promise<void>{
    const itemRepository = new PrismaItemRepository(new PrismaClient)
    const item = mapItemDtoToItem(itemDTO)
    const savedItem = itemRepository.create(item);
    savedItem.then(item => console.log(item));
}