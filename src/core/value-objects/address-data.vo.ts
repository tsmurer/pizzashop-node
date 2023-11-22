import { Address } from "./address.vo";

export class AddressData {
    private currentAddress: number;
    private addresses: Map<number, Address>

    constructor() {
        this.currentAddress = -1;
        this.addresses = new Map<number, Address>;
    }

    public getCurrentAddress(): Address | undefined {
        return this.addresses.get(this.currentAddress);
    }

    public getAddresses(): Map<number, Address> {
        return this.addresses;
    }
}