import { AddressDataDTO } from "./address-data.dto";
import { OrderDTO } from "./order.dto";

export interface UserDTO{
    id: number,
    name: string,
    email: string,
    addressData: AddressDataDTO,
    order: OrderDTO,


}