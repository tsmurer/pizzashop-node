import { AddressData } from "../value-objects/address-data.vo";
import { Address } from "../value-objects/address.vo";
import { Email } from "./email";
import { Name } from "./name";
import { Order } from "./order"

export class User {
    public readonly id: number;
    public readonly name: Name;
    public readonly email: Email;
    public readonly addressData: AddressData;
    public readonly password: string;
    public readonly order?: Order;
  
    constructor(id: number, name:Name, email: Email, password: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password; // Password should be securely hashed and salted.
      this.order = undefined;
      this.addressData = new AddressData();
    }
  
    getId(): number {
      return this.id;
    }
  
    getEmail(): String {
      return this.email.getAddress();
    }

    getOrder(): Order | undefined {
        return this.order;
    }

    getAddressData(): AddressData {
        return this.addressData;
    }

    authenticate(inputPassword: string): boolean {
        // In a real application, you would compare the inputPassword with the hashed and salted password.
        return this.password === inputPassword; // This is a simplified check.
    }
}