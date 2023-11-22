import { AddressDTO } from "./address.dto";

export interface AddressDataDTO {
    currentAddress: number;
    addresses: Map<number, AddressDTO>
}