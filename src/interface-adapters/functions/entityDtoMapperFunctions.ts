import { Item } from "../../core/entities/item";
import { LineItem } from "../../core/value-objects/line-item.vo";
import { ItemDTO } from "../dtos/item.dto";
import { LineItemDTO } from "../dtos/line-item.dto";


//map item
export function mapItemToItemDto(item: Item): ItemDTO {
    return {
      id: item.getId(),
      name: item.getName(),
      description: item.getDescription(),
      price: item.getPrice()
    };
  }

export function mapItemDtoToItem(itemDto:ItemDTO) {
    return new Item(itemDto.id, itemDto.name, itemDto.description, itemDto.price);
}

//map line item

export function mapLineItemToLineItemDto(lineItem: LineItem): LineItemDTO {
    const itemDto = mapItemToItemDto(lineItem.getItem());
    return {
      item: itemDto,
      quantity: lineItem.getQuantity()
    }
}

export function mapLineItemDtoToLineItem(lineItemDto: LineItemDTO): LineItem {
  const item = mapItemDtoToItem(lineItemDto.item);
  return new LineItem(item, lineItemDto.quantity);
}

//map address

export function mapAddressToAddressDto() {}
export function mapAddressDtoToAddress() {}

//map address data

export function mapAddressDataToAddressDataDto() {}
export function mapAddressDataDtoToAddressData() {}

//map Order
export function mapOrderToOrderDto() {}
export function mapOrderDtoToOrder() {}

//map User
export function mapUserToUserDto() {}
export function mapUserDtoToUser() {}