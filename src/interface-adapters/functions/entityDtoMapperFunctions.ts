import { Item } from "../../core/entities/item";
import { ItemDTO } from "../dtos/item.dto";


export function mapItemToItemDto(item: Item): ItemDTO {
    return {
      id: item.getId(),
      name: item.getName(),
      description: item.getDescription(),
    };
  }

export function mapItemDtoToItem(itemDto:ItemDTO) {
    return new Item(itemDto.id, itemDto.name, itemDto.description);
}